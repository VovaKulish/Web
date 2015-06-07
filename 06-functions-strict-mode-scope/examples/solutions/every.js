// contains with every
// http://jscourse.com/task/every

function every(arr, func) {
	for (var i = 0; i < arr.length; i += 1) {
		if (!func(arr[i], i, arr)) {
			return false;
		}
	}
	return true;
}


function contains(where, what) {
	return every(what, function(whatItem) {
		return where.indexOf(whatItem) !== -1; // 
	});
}


contains([1], [2]);