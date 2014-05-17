$("#imie").focusout(function() {
	$(this).validate({
		lenghts: "2-6"
	});
});
