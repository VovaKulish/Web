function contains(where, what) {
	for (var i = 0; i < what.length; i += 1) {
		console.count('loops');
		if (where.indexOf(what[i]) === -1) {
			return false;
		}
	}
	return true;
}


contains([1,2,3,4,5,6], [1,2,3,4,5,0]); // false