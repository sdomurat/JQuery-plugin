(function($) {
	$.fn.validate = function(settings) {
		var settings = $.extend({
			lenghts: "0-99",
			pattern: new RegExp(/.*/),
			showOk: function(msg) {alert("Ok :)")},
			showError: function(msg) {alert("Błąd -> nieprawidłowa ilość liter!")},
			small: 0,
			big: 0,
			numbers: 0,
			special: 0
		//	polish: false
		}, settings);

		var lenghtsTest = settings.lenghts.split("-").map(function(number) {
			return parseInt(number);
		});
		var pattern = settings.pattern;
		var value = $(this).val();
		var isOk = settings.showOk;
		var isError = settings.showError;
		var male = settings.small;
		var duze = settings.big;
		var specjalne = settings.special;
		var liczby = settings.numbers;
	//	var polskie = settings.polish;

		console.log("value " + value);
		console.log("value.length " + value.length);
		console.log("lenghtsTest.length " + lenghtsTest.length);
		console.log("lenghtsTest[0] " + lenghtsTest[0]);
		console.log("lenghtsTest[1] " + lenghtsTest[1]);

		var error = 0;
		return this.each(function() {
	if(lenghtsTest.length){
		if (lenghtsTest[0] > value.length || value.length > lenghtsTest[1]){
				error = 1;
				console.log("error2222");
				isError(this);
			} else{
				error = 0;
				isOk(this);
		};
};
			if (!pattern.test(value)) {
				error = 1;
				isError(this);
			};

			value.split("").map(function(char){
				//console.log("char " + char);
				if (new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,\/{}|\\":<>\?ŻżŹźĆćŃńĄąŚśĘęÓóŁł]/).test(char)){
						specjalne--;
						console.log("char " + char);
						console.log("specjalne po" + specjalne);
				} else if (new RegExp(/[0-9]/).test(char)) {
						liczby--;
						console.log("liczby " + liczby);
					} else if (char == char.toUpperCase()) {
						duze--;
						console.log("duze " + duze);
					} else if (char == char.toLowerCase()) {
						male--;
						console.log("male " + male);
					}

					return char;



			});

			if (specjalne > 0 || duze > 0 || liczby > 0 || male > 0) {
				error = 1;
				isError(this);
			}

		});
	};
}(jQuery));
