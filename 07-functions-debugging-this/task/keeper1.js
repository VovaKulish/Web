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