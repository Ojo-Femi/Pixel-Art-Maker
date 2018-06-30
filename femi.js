$(document).ready(function () {
	$('h2').on('click', function makeGrid(event) {
		$('table tr').remove();
		var row = $('#inputHeight').val();
		var col = $('#inputWeight').val();

		for (var i = 1; i < row; i++) {
			$('table').append('<tr></tr>');
			for (var j = 1; j < col; j++) {
				$('tr:last').append('<td></td>');
			};
		};
		event.preventDefault();
		$('td').click(function() {
			var paint = $('#colorPicker').val();
			$( this ).css('background-color', paint);
		})
	})

})