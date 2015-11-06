var gulp = require("gulp");


// default task
gulp.task("default", ["js"], function()
{
});


// minify JS
gulp.task("js", function()
{
	var uglify = require("gulp-uglify");
	var rename = require("gulp-rename");
	gulp.src("./src/jquery.modify.js")
		.pipe(uglify({preserveComments: "some"}))
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest("."));
});
