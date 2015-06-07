function f(timeCalled) {
	console.log(999, timeCalled);
}
// console.log(f());
// var a = f;

function run10Times(func) {
	for (var i = 0; i < 10; i += 1) {
		func(i);
	}
}

run10Times(f);
