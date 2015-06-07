function getUnique(list) {
	var res = [];
	for (var i = 0; i < list.length; i += 1) {
		if (res.indexOf(list[i]) === -1) {
			res.push(list[i]);
		}
	}
	return res;
}


function getUnique(list) {
	list = toArray(list);
	return list.filter(function (elem, i, list) {
		return list.indexOf(elem) === i;
	});
}
