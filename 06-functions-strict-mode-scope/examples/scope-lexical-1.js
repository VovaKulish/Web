// Variable is accesable inside any place in function, where it was defined
function f () {

	// ReferenceError expected...
	console.log(a);
	// But wait! What's that? undefined?


	var a = 10;

	console.log(a);
}

f();































var globalVariable = 'Im global';
function outer() {
	var outerVariable = true;

	function inner() {
		var innerVariable = true;
		console.log(outerVariable, innerVariable, globalVariable);

		console.log(ppp); // 
	}


	window.inner = inner;
	console.log(outerVariable); // true
	console.log(innerVariable); // referenceError
	inner();
}

outer();
inner();
// inner();
















window.inner = inner; // put function reference out of the scope
	inner(); // true, true

























// Shadowing
function outer (a, b) {
	var ars = arguments;
	function inner () {
		var a = 10; // shadow parent scope variable
		console.log('inner', a, ars);
	}
	inner();
	console.log('outer', a);
}




outer(10050); // inner 10 , outer 10050












