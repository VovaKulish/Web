// http://jscourse.com/task/contains
function contains(where, what) {
	for (var i = 0; i < what.length; i += 1) {
		if (where.indexOf(what[i]) === -1) {
			return false;
		}
	}
	return true;
}


function contains(where, what) {
	var doesContain = true;
	for (var i = 0; i < what.length; i += 1) {
		if (where.indexOf(what[i]) === -1) {
			doesContain = false;
			break;
		}
	}
	return doesContain;
}


function contains(where, what) {
	var doesContain = true;
	var currentContains;
	for (var i = 0; i < what.length; i += 1) {
		currentContains = false;
		for (var j = 0; j < where.length; j += 1) {
			if (where[j] === what[i]) {
				currentContains = true;
				break;
			}
		}
		if (!currentContains) {
			doesContain = false;
			break;
		}
	}
	return doesContain;
}
