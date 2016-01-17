jquery.modify
======

jQuery plugin that fires event immediately when input value is modified.

## jQuery version

* [1.7+](http://code.jquery.com/jquery-1.7.js)

## Supported browsers

Almost all browsers that works jQuery.

* [Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/download-ie): 6 or later
* [Mozilla Firefox](http://www.mozilla.com/firefox/): Latest version
* [Google Chrome](http://www.google.com/chrome/): Latest version
* [Opera](http://www.opera.com/): version 12(Presto based), 15([Blink](http://www.chromium.org/blink) based)
* [Safari for Windows](http://support.apple.com/kb/DL1531): version 5

## How to use

Very easy to use!

### Traditional method

Just load script files and "modify" event will be ready.

```html
<!-- That's it! Now you can trap "modify" event! -->
<script src="https://code.jquery.com/jquery-1.7.0.min.js"></script>
<script src="path/to/jquery.modify.min.js"></script>
```

Here is [a demo page](https://rawgit.com/shimataro/jquery.modify/master/demo.html).

### Modern method (CommonJS)

If you are using CommonJS-based framework (webpack, browserify, ...), you can describe very simple.

First, install package via [npm](http://npmjs.com/).

    $ npm install --save jquery.modify

...and just do this!
```js
// That's it! Now you can trap "modify" event!
// (and this returns jQuery object)
var $ = require("jquery.modify");
```

## Project Page

http://github.com/shimataro/jquery.modify
