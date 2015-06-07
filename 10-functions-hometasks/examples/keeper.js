// http://jscourse.com/task/keeper

// Релизовать функцию createKeeper(), которая возвращает
// объект с 2 методами put(key, value) и get(key). Метод
// get(key) должен возвращать данные, которые были сохранены
// с помощью метода put, если вызывается с тем-же значением
// key, что и put.Ключами могут быть как объекты, так и
// примитивы, про NaN не задумываться.Если put был вызван с
// таким ключом, с которым уже был вызван ранее, старое
// значение перезатирается новым. Доступ к ключам и
// значениями должен быть возможен только через методы
// put и get.

function createKeeper () {
	'use strict';

	var keyValuePairs = [];

	function _getKeyValuePair(key) {
		for (var i = 0; i < keyValuePairs.length; i += 1) {
			if (keyValuePairs[i].key === key) {
				return keyValuePairs[i];
			}
		}
		return null;
	}

	return {
		put: function (key, value) {
			var savedKeyvaluePair = _getKeyValuePair(key);
			if (savedKeyvaluePair) {
				savedKeyvaluePair.value = value;
			} else {
				keyValuePairs.push({
					key: key,
					value: value
				});
			}
		},
		get: function (key) {
			var savedKeyvaluePair = _getKeyValuePair(key);
			if (savedKeyvaluePair) {
				return savedKeyvaluePair.value;
			} else {
				return null;
			}
		}
	};
}




function createKeeper() {
	'use strict';

	var keys = [];
	var values = [];

	return {
		put: function (key, value) {
			var sameKeyIndex = keys.indexOf(key);
			if (sameKeyIndex === -1) {
				keys.push(key);
				values.push(value);
			} else {
				values[sameKeyIndex] = value;
			}
		},
		get: function (key) {
			var sameKeyIndex = keys.indexOf(key);
			if (sameKeyIndex !== -1) {
				return values[sameKeyIndex];
			} else {
				return null;
			}
		}
	};
}






var keeper = createKeeper();
// keeper.put({}, 999);
// keeper.get({});


keeper.put(1, 20);
keeper.get(1);