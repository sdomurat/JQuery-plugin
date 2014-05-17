(function($) {
	$.fn.validate = function() {
		var settings = $.extend({
			lenghts: "0-9"
		}, settings);

		var lenghtsTest = settings.lenghts.split("-").map(function(number) {
			return parseInt(number);
		});
		var value = $(this).val();
		console.log(value);

		return this.each(function() {

		})
	};
}(jQuery));
