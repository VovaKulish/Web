// http://jscourse.com/task/is-in-array

function every(arr, func) {
	console.log(arr, func);
	for (var i = 0; i < arr.length; i += 1) {
		console.log(func(arr[i], i, arr));
		if (!func(arr[i], i, arr)) {
			return false;
		}
	}
	return true;
}



function contains(where, what) {
	return every(where, function(whatItem) {
		return where.indexOf(whatItem) !== -1; // 
	});
}


function isInArray(arr) {
	var what = [];
	for (var i = 1; i < arguments.length; i += 1) {
		what.push(arguments[i]);
	}
	return contains(arr, what);
}



function isInArray(arr) {
	for (var i = 1; i < arguments.length; i += 1) {
		if (arr.indexOf(arguments[i]) === -1) {
			return false;
		}
	}
	return true;
}



function isInArray(arr) {
	for (var i = 0; i < arguments.length; i += 1) {
		if (i === 0) {
			continue;
		}
		if (arr.indexOf(arguments[i]) === -1) {
			return false;
		}
	}
	return true;
}