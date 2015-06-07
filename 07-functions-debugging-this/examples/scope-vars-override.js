var f = (function () {
	function parseInt(a) {
		return !!a;
	}

	return function () {
		console.log("window.parseInt(10)", window.parseInt(10));
		console.log("parseInt(10)", parseInt(10));
		debugger
	};
}());


f();