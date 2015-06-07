// http://jscourse.com/task/exec-each-function-in-array
function execFunctions(arrOfFunctions) {
	var res = [];
	for (var i = 0; i < arrOfFunctions.length; i += 1) {
		res.push(arrOfFunctions[i]());
	}
	return res;
}