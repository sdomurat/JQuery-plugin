(function($) {
	$.fn.validate = function(settings) {
		var settings = $.extend({
			lenghts: "0-9999"
		}, settings);

		var lenghtsTest = settings.lenghts.split("-").map(function(number) {
			return parseInt(number);
		});
		var value = $(this).val();
		console.log("value " + value);
		console.log("value.length " + value.length);
		console.log("lenghtsTest.length " + lenghtsTest.length);
		console.log("lenghtsTest[0] " + lenghtsTest[0]);
		console.log("lenghtsTest[1] " + lenghtsTest[1]);

		//return this.each(function() {
			if (lenghtsTest[0] !== value.length){
				console.log("error");
			};
		//})
	};
}(jQuery));
