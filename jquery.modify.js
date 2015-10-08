/*! jQuery.modify */
/*
 * Fires "modify" event when input element is modified.
 * Note: doesn't work in checkbox and radio.
 */
(function($, window, undefined)
{
	"use strict";
	var
		eventName   = "modify",
		interval_ms = 200;

	$(function($)
	{
		$(window.document)
			.on("focus", ":input", function()
			{
				// watch input element when focused
				_watch(this);
			})
			.find(":input:focus").each(function()
			{
				// watch input element currently focused
				// (don't use window.document.activeElement for compatibility)
				_watch(this);
			});

		function _watch(input)
		{
			var $input = $(input);
			var val_saved = $input.val();

			// watch!
			var timer_id = window.setInterval(function()
			{
				var val = $input.val();
				if(_isModified(val, val_saved))
				{
					// fire event if modified
					var data = {
						"previousValue": val_saved,
						"currentValue" : val
					};
					$input.trigger(eventName, data);
					val_saved = val;
				}
			}, interval_ms);

			// unwatch when focus is out
			$input.one("blur", function()
			{
				window.clearInterval(timer_id);
				timer_id = null;
			});
		}

		function _isModified(val1, val2)
		{
			// for long text
			if(val1.length !== val2.length)
			{
				return true;
			}
			if(val1 !== val2)
			{
				return true;
			}
			return false;
		}
	});
})(jQuery, window);
