(function autoRunner() {

	console.log(autoRunner); // reference to self invoced function	
}());



(function() {

	console.log(arguments.callee); // reference to self invoced function	
}());