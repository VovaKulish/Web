// $.get('/todos', function (response) {
// 	console.log('response', response)
// });

$.get('/todos').then(function (response) {
	console.log('response', response);
});

function getAllTodos() {
	return $.get('/todos').then(function (todoList) {
		a();
		return $.when.apply($, todoList.map(function (todoListName) {
			return $.get('/todos/' + todoListName);
		})).then(function () {
			return Array.prototype.reduce.call(arguments, function (allTodos, todoResolvedData, index) {
				allTodos[todoList[index]] = todoResolvedData[0];
				return allTodos;
			}, {});
		});
	});
}

getAllTodos().then(function (allTodos) {
	console.log(allTodos);
}, function (error) {
	console.error(error);
});