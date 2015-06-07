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