function queryStringToObject (queryString) {
	var res;
	var keyValPairs = queryString.split('&');

	if (!queryString) {
		return {}; // empty query string
	}

	return keyValPairs.reduce(function (reducedValue, currentKeyValue) {
		var key = currentKeyValue.split('=')[0];
		var stringifiedValue = decodeURIComponent(currentKeyValue.split('=')[1]);
		var parsedValue;

		if (stringifiedValue === 'true') {
			parsedValue = true;			
		} else if (stringifiedValue === 'false') {
			parsedValue = false;
		} else if (!isNaN(parseInt(stringifiedValue, 10))) {
			parsedValue = parseInt(stringifiedValue, 10);
		} else {
			parsedValue = stringifiedValue;
		}
		reducedValue[key] = parsedValue;
		return reducedValue;
	}, {});
}



function queryStringToObject (queryString) {
	var res = {};
	var keyValPairs = queryString.split('&');

	if (!queryString) {
		return {}; // empty query string
	}

	var key;
	var stringifiedValue;
	var parsedValue;
	var currentKeyValue;
	for (var i = 0; i < keyValPairs.length; i += 1) {
		currentKeyValue = keyValPairs[i];
		key = currentKeyValue.split('=')[0];
		stringifiedValue = decodeURIComponent(currentKeyValue.split('=')[1]);

		if (stringifiedValue === 'true') {
			parsedValue = true;			
		} else if (stringifiedValue === 'false') {
			parsedValue = false;
		} else if (!isNaN(parseInt(stringifiedValue, 10))) {
			parsedValue = parseInt(stringifiedValue, 10);
		} else {
			parsedValue = stringifiedValue;
		}
		res[key] = parsedValue;
	}
	return res;
}