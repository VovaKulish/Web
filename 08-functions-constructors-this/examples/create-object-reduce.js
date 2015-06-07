function createObject(arrOfKeys, arrOfData) {
	return arrOfKeys.reduce(function (result, key, keyIndex) {
		result[key] = arrOfData[keyIndex];
		return result;
	}, {});
}




var items = [1,2,3,4,5,6,7,8];
var doubled = items.map(function (item) {
	return item * 2;
});
doubled