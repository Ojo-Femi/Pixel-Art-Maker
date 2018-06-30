//When Dom Loads
$(document).ready(function () {

	//Watch the form submission. Everything happens in this event listener!
	$('#sizePicker').on('submit', function(tabled) {
		
		//This step is to clear the table on another sbmit click
		$('table tr').remove();

		//Grabbing the values for the row and column
		var rows = $('#inputHeight').val();
		var cols = $('#inputWeight').val();

		//Nested for loop that prints the table. First loop takes care of row
		for (var i = 1; i <= rows; i++) {
			$('table').append('<tr></tr>');

			//This loop takes care of the column
			for (var j = 1; j <= cols; j++) {
				$('tr:last').append('<td></td'); 
			};
		};

		//To prevent the table from disappearing after submission;
		tabled.preventDefault();
		
		//On td (cells) click, grab value of colorPicker and change the background color
		$('td').click(function() {
			var paint = $('#colorPicker').val();
			$( this ).css('background-color', paint);
		});

		
	});



});