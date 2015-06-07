var num = 100;
console.log(num.toString());


var str = 'http://forum.jscourse.com/t/02-zadanie-igra-ugadajka-pochitat-pro-massivy-obekty-czikly/482';
str.split('/');

var str = 'http://forum.jscourse.com/t/02-zadanie-igra-ugadajka-pochitat-pro-massivy-obekty-czikly/482';
str.split('/').join('_');

str.trim().toLowerCase()


str.split(''); // -> 

var arr = [];
var arr1 = arr;


// ....... 
arr.push('one');
arr.push('one');
arr.push('one');
console.log(arr);
// ....... 


var obj = {};
var arr = [obj, 'two', 'three', 'four', 'five'];
var arrCopy = arr.slice();
var arrCopy1 = arr.slice(1);
var arrCopy2 = arr.slice(1, 2);
console.log('arrCopy', arrCopy);
console.log('arrCopy1', arrCopy1);
console.log('arrCopy2', arrCopy2);


arr[arr.length - 1] = 'item';
arr.push('item');



var words = ['mama', 'mila', 'ramu'];




// Если в массиве есть элемент
var element = {};
var array = [element];
if (array.indexOf(element) !== -1) {
	console.log('Wowowow')
}


// Если элемента нет в массиве
if (array.indexOf(element) === -1) {
	// ... 
}






