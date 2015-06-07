// http://jscourse.com/task/create-object-from-arrays
function createObject(arrOfKeys, arrOfData) {
	var resObj = {};
	for (var i = 0; i < arrOfKeys.length; i += 1) {
		resObj[arrOfKeys[i]] = arrOfData[i];
	}
	return resObj;
}



function createObject(arrOfKeys, arrOfData) {
	var resObj = {};
	for (var i = 0; i < arrOfKeys.length; i += 1) {
		// Если элемент, с которым мы работает выходит за пределы массива значений
		if (i < arrOfData.length) {
			resObj[arrOfKeys[i]] = arrOfData[i];
		} else {
			resObj[arrOfKeys[i]] = undefined;
		}
	}
	return resObj;
}