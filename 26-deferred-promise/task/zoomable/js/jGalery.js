'use strict';

$('body').append('<div class = "darkBack"></div>');
$('body').append('<div class = "largeImg"><img src = ""><div class = "close"></close></div>');

function makeZoomable(node) {

	$(node).delegate('img', 'click', pictureZoom);
	$('.close').delegate($('.close'), 'click', pictureClose);
	$(document).keydown( function(event) {
  		if (event.which == 27) {
  		pictureClose();
  		}
  	});
}

function pictureZoom() {
	$('.darkBack').addClass('enable');
	$('.close').addClass('enable');
	$('.largeImg img').attr('src', $(this).attr('alt'));
}

function pictureClose() {
	$('.darkBack').removeClass('enable');
	$('.close').removeClass('enable');
	$('.largeImg img').attr('src', '');
}

