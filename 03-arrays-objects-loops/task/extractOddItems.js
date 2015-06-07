var arr = [0,1,0,1,0,1];
function extractOddItems(arr){
	var newArr = [];
 for (var i=0; i<arr.length; i++) {
			if (arr[i] % 2 === 0){
    newArr.push(arr[i]);
}
}
return(newArr);
}
extractOddItems(arr);