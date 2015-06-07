function sumOnly100Plus(arr) {
	return arr.filter(function (value) {
		return typeof value === 'number' && value > 100;
	}).reduce(function (total, item) {
		return total += item;
	}, 0);
}




function sumOnly100Plus(arr) {
	return arr.reduce(function (total, item) {
		if (typeof item === 'number' && item > 100) {
			total += item;
		}
		return total;
	}, 0);
}