function queryStringToObject (queryString) {
	var res = {};
	var keyValuePairs = queryString.split('&');

	if (!queryString) {
		return {}; // empty query string
	}

	var key;
	var stringifiedValue;
	var parsValue;
	var currentKeyValue;
	for (var i = 0; i < keyValuePairs.length; i += 1) {
		currentKeyValue = keyValuePairs[i];
		key = currentKeyValue.split('=')[0];
		stringifiedValue = decodeURIComponent(currentKeyValue.split('=')[1]);

		if (stringifiedValue === 'true') {
			parsValue = true;			
		} else if (stringifiedValue === 'false') {
			parsValue = false;
		} else if (!isNaN(parseInt(stringifiedValue, 10))) {
			parsValue = parseInt(stringifiedValue, 10);
		} else {
			parsValue = stringifiedValue;
		}
		res[key] = parsValue;
	}
	return res;
}