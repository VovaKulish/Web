[{
    delta: 5,
    value: 5
}, {
    delta: -3,
    value: 2
}, {
    delta: 5,
    value: 7
}, {
    delta: 0,
    value: 7
}]




// Условие
arr[n].delta === arr[n].value - arr[n - 1].value



x = arr[n + 1].value - arr[n + 1].delta

0 = -x + arr[n + 1].value - arr[n + 1].delta
y = x - arr[n - 1].value

y = arr[n + 1].value - arr[n + 1].delta



arr[n].value = arr[n + 1].value - arr[n + 1].delta
arr[n].delta = arr[n].value - arr[n - 1].value



var arr = ['one', 'two', 'three', 'four', 'five'];
for (var i = 1; i < arr.length - 1; i += 1) {
	console.log(arr[i]);
}


function fixStruct(struct) {
	var brokenElementIndex

	for (var i = 1; i < struct.length - 1; i += 1) {
		if (struct[i].delta !== struct[i].value - struct[i - 1].value) {
			brokenElementIndex = i;
			break;
		}
	}
	struct[brokenElementIndex].value = struct[brokenElementIndex + 1].value - struct[brokenElementIndex + 1].delta
	struct[brokenElementIndex].delta = struct[brokenElementIndex].value - struct[brokenElementIndex - 1].value
}
















