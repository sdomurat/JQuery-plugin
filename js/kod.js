$(document).ready(function(){
	$("#imie").focusout(function() {
		$(this).validate({
			lenghts: "4-9"
		});
	});
});
