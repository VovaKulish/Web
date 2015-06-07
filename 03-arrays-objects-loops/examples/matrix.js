var arr = [1,1,1,1,1];
var arr = [1, "foo", "boo", "bar"];
var arr = [1, "foo", "boo", [1,2,3]];

var matrix = [['o', 'x', 'o'],
			  [' ', 'x', 'o'],
			  [' ', 'o', 'x']];

for (var row = 0; row < matrix.length; row += 1) {
	console.log('matrix[row]', matrix[row]);
	for (var column = 0; column < matrix[row].length; column += 1) {
		console.log(row, column, matrix[row][column]);
	}
}

var a = [1,2,3];
a[100] = 'foo';
console.log(a);