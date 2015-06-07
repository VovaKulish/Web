function compose () {
	var args = arguments;
	return function () {
		for (var i = 0; i < args.length; i += 1) {
			args[i]();
		}
	};
}


function compose () {
	var args = Array.prototype.slice.call(arguments);
	return function () {
		args.forEach(function (funcToCall) {
			funcToCall();
		});
	};
}




function compose () {
	var args = arguments;
	return function () {
		Array.prototype.forEach.call(args, function (funcToCall) {
			funcToCall();
		});
	};
}
