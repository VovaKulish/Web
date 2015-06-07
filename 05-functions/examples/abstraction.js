function objectToArray(arrayLikeObject) {
	var res = [];
	for (var i = 0; i < arrayLikeObject.length; i += 1) {
		res.push(arrayLikeObject[i]);
	}
	return res;
}


function f(first, second, third) {
	var args = objectToArray(arguments);
	console.log('undeinfed index', args.indexOf(undefined));
	// console.log('arguments.length', arguments.length);
	// console.log(first, second, third);
	// console.log('arguments', arguments);
}


// f('mama');
// f('mama', 'mila');
f('mama', 'mila', undefined);