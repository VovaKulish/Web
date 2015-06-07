function f (data) {
	return result;
}


function func1 = function () {
	return data.map(f);
}

// Promise
// $.Deferred
// Try on https://hidden-brook-8135.herokuapp.com/
function getTodos(callback) {
	var response;
	$.get('/todos', function (resp) {
			callback(resp);
	    response = resp;
	});
	return response;
}


function getTodos() {
	var todosList = new $.Deferred();
	$.get('/todos', function (resp) {
			todosList.resolve(resp);
	});
	return todosList;
}

function getTask(name) {
	var taskData = new $.Deferred();
	$.get('/todos/' + name, function (resp) {
			taskData.resolve(resp);
	});
	return taskData.promise();
}



$.when(getTask("another-task"), getTask("example-task")).then(function (firstTaskArgs, secondTaskArgs) {
	console.log('Both tasks loaded', firstTaskArgs, secondTaskArgs);
});


var todos = getTodos();
todos.then(function (todosList) {
	console.log('todosList', todosList);
	var timeouted = new $.Deferred();
	setTimeout(function () {
		timeouted.resolve(true);
	}, 4000);
	console.log('First then');
	return timeouted;
}).then(function () {
	console.log('Second then');
});


// Promises, right way
function getTodos() {
	var todosList = new $.Deferred();
	$.get('/todos', function (resp) {
			todosList.resolve(resp);
	});
	return todosList.promise();
}

var todos = getTodos();
todos.then(function (todosList) {
	console.log('todosList', todosList);
	var timeouted = new $.Deferred();
	setTimeout(function () {
		timeouted.resolve(true);
	}, 4000);
	console.log('First then');
	return timeouted.promise();
}).then(function () {
	console.log('Second then');
});






var d = new $.Deferred();
d.resolve(100500);
setTimeout(function () {
	d.then(function (val) {
		console.log('val', val);
	});
}, 2000);

