$(document).ready(function(){
	var isOk = function(object) {
  //  $(object).attr( 'id', "" + "inputSuccess2" );
    $(object).parent().addClass( "has-success" + " has-feedback" );
    $(object).parent().append("<span></span>");
    $(object).next().addClass('class', "glyphicon" + " glyphicon-ok" + " form-control-feedback");
		alert("ok")
	};

		var isError = function(object) {
		//	$(object).attr( 'id', "" + "inputError1" );
			$(object).parent().addClass( "has-error" + " has-feedback" );
			$(object).parent().append("<span></span>");
			$(object).next().attr('class', "glyphicon" + " glyphicon-remove" + " form-control-feedback");
			alert("nie")
		};

	$("#imie").focusout(function() {
		$(this).validate({
			lenghts: "4-9",
			showOk: isOk,
			showError: isError
		});
	});
});
