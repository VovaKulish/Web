function compose () {
	var args = arguments;
	return function () {
		Array.prototype.forEach.call(args, function (funcToCall) {
			funcToCall();
		});
	};
}