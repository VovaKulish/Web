function makeCounter() {
	var currentCount = 0;
	return function() {
		currentCount++;
		return currentCount;
	};
}

var counter = makeCounter();



var c1 = makeCounter();
var c2 = makeCounter();
 
console.log( c1() ); // 1
console.log( c1() ); // 1
console.log( c1() ); // 1
console.log( c1() ); // 1
console.log( c1() ); // 1
console.log( c2() ); // 1