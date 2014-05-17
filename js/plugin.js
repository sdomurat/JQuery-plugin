(function($) {
	$.fn.validate = function(settings) {
		var settings = $.extend({
			lenghts: "0-9999",
			pattern: new RegExp(/.*/),
			showOk: function(msg) {alert("Ok :)")},
			showError: function(msg) {alert("Błąd -> nieprawidłowa ilość liter!")}
		}, settings);

		var lenghtsTest = settings.lenghts.split("-").map(function(number) {
			return parseInt(number);
		});
		var pattern       = settings.pattern;
		var value = $(this).val();
		var isOk      = settings.showOk;
		var isError      = settings.showError;

		console.log("value " + value);
		console.log("value.length " + value.length);
		console.log("lenghtsTest.length " + lenghtsTest.length);
		console.log("lenghtsTest[0] " + lenghtsTest[0]);
		console.log("lenghtsTest[1] " + lenghtsTest[1]);

		var error = 0;
		//return this.each(function() {
		//	if (lenghtsTest[0] == value.length){
		//		console.log("error1111");
		//		error = 1;
		//		isOk(this);

		//	}
			if (lenghtsTest[0] > value.length || value.length > lenghtsTest[1]){
				error = 1;
				console.log("error2222");
				isError(this);

			} else{
				isOk(this);
			};
			if (!pattern.test(value)) {
				error = 1;
				isError(this);
			};
		//})
	};
}(jQuery));
