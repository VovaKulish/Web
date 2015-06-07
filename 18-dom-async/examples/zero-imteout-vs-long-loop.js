var arr = []

setTimeout(function () {
	console.log(arr.length)
}, 0)

for (var i = 0; i < 1999999; i += 1) {
	arr.push(new Date())
}