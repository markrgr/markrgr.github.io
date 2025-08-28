$(document).ready(function(e) {
   // $('.letterTileBack').draggable(true);
	var oldZ;
	$('.letterTileBack').mousedown(function(e) {
		oldZ = $(this).css('z-index');
        $(this).css('z-index', 10000);
    });
	$('.letterTileBack').mouseup(function(e) {
        $(this).css('z-index', oldZ);
    });
	
	$('#debugChooser').change(function(e) {
		$('.contentPanel').hide();
       $('#' + $(this).val()).fadeIn(500);
    });
});