function execFunctions(arrOfFunctions) {
	var result = [];
	for (var i = 0; i < arrOfFunctions.length; i += 1) {
		result.push(arrOfFunctions[i]());
	}
	return result;
}