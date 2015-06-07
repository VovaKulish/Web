var keys = ["name", "lastname", 'asdagqa'];
var data = ['Vova' , 'Kulish'];

function createObject(arrOfKeys, arrOfData) {
var obj = {};
for (var i=0; i<arrOfKeys.length; i++){
	var key = arrOfKeys[i];
obj[key] = arrOfData[i];
}
return obj;
}
console.log(createObject(keys, data));