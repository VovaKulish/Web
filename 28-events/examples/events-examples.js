var eventHandler = function () {
	console.log('clicking');
};

$(document).on('click.counter', eventHandler);
$(document).on('mousemove.counter', function () {
	console.log('Mouse moved');
});
$(document).on('mouseenter.counter', function () {
	console.log('Mouse entered');
});
$(document).on('mouseleave.counter', function () {
	console.log('Mouse left');
});

$(document)
	.off('mousemove.counter')
	.off('mouseenter.counter')
	.off('mouseleave.counter')

$(document).off('mousemove.counter mouseenter.counter mouseleave.counter')


$(document).on('click', function () {
	console.log('some logic');
});



$(document).on('mouseenter', '.tab-link', function () {
	console.log('Tab link entered', this);
});


$(document).off('.counter');
// $(document).off('click', eventHandler);



// var nativeBoundClick = function () {
// 	console.log('Native bound click');
// };

// document.addEventListener('click', nativeBoundClick, false);
// document.removeEventListener('click', nativeBoundClick, false);


// document.addEventListener('click', function nativeBoundClick () {
// 	console.log('NFE handler', nativeBoundClick);
// }, false);
