function compose () {
	var args = Array.prototype.slice.call(arguments);
	return function () {
		args.forEach(function (funcToCall) {
			funcToCall();
		});
	};
}