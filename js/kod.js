$(document).ready(function(){
	var isOk = function(object) {
  //  $(object).attr( 'id', "" + "inputSuccess2" );
    $(object).parent().attr( 'class', "form-group " + "has-success" + " has-feedback" );
    $(object).parent().append("<span></span>");
    $(object).next().attr('class', "glyphicon" + " glyphicon-ok" + " form-control-feedback");
		//alert("ok")
	};

		var isError = function(object) {
		//	$(object).attr( 'id', "" + "inputError1" );
			$(object).parent().attr( 'class', "form-group " + "has-error" + " has-feedback" );
			$(object).parent().append("<span></span>");
			$(object).next().attr('class', "glyphicon" + " glyphicon-remove" + " form-control-feedback");
		//	alert("nie")
		};

	$("#imie").focusout(function() {
		$(this).validate({
			lenghts: "4-9",
		  pattern: new RegExp(/[a-zA-Z]/),
			showOk: isOk,
			showError: isError
		});
	});

	$("#nazwisko").focusout(function() {
		$(this).validate({
			lenghts: "4-19",
			pattern: new RegExp(/[a-zA-Z]/),
			showOk: isOk,
			showError: isError
		});
	});

	$("#email").focusout(function() {
		$(this).validate({
			pattern: new RegExp(/[\+a-z\.]+\@[a-z]+\.[a-z]{2,}/),
			showOk: isOk,
			showError: isError
		});
	});

	$("#kod").focusout(function() {
		$(this).validate({
			pattern: new RegExp(/^[0-9]{2}-[0-9]{3}$/),
			lenghts: "6",
			showOk: isOk,
			showError: isError
		});
	});
});
