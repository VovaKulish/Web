$.get('/').then(function (response) {
	console.log('response', response);
});

$.get('/todos/').then(function (todosList) {
	console.log('todosList', todosList);
});


// Chaining async operations
// Try on https://aqueous-reaches-8130.herokuapp.com/
var emailsToCheck = ['asd@asd.asd', 'asdasd@asd.asd'];
var CHECK_URL = '/check-email/';
$.get(CHECK_URL, {
	email: emailsToCheck[0]
}).then(function (resp) {
	console.log('first email', resp);
	return $.get(CHECK_URL, {
		email: emailsToCheck[1]
	});
}).then(function (resp) {
	console.log('second email', resp);
});


// Custom deferreds
function loadImage(url) {
	var deferred = new $.Deferred();
	var img = $('<img src="' + url + '">');
	img.css('opacity', 0);
	img.on('load', function () {
		deferred.resolve(img);
	});
	$('body').append(img);
	return deferred;
}


loadImage('http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg').then(function (img) {
	return img.show();
});


// Combining deferreds
// http://jscourse.com/example/parallel-loading-with-jquery-deferred
