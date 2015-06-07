function compose () {
	var args = arguments;
	return function () {
		for (var i = 0; i < args.length; i += 1) {
			args[i]();
		}
	};
}