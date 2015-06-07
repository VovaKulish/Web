var a = 20;
function getFunction() {
	var a = 10;
	function fff () {
		console.log(a);
	}
	return fff;
}


function getFunction() {
	var a = 10;
	return function () {
		console.log(a);
	};
}



function getFunction() {
	var a = 0;
	return function() {
		a++;
		return a;
	};
}


var f = getFunction();
f(); // 
f(); // 
f(); // 
f(); // 
f(); // 




































(function () {
	'use strict';

	// do something, without leaving global variables
}());




























var module = (function () {
	function privateCall() {
		console.warn('Private');
	}
	
	return {
		pub: function () {
			return privateCall();
		}
	};
}())




















var f = (function () {
	var uniqueString = (new Date()).now().toString();

	return function () {

	};
}());









