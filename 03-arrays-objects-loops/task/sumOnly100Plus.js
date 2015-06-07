var arr = [150, "200", " ", 30, 300];
function sumOnly100Plus(arr){
	var sumOfNumbers = 0;
 for (var i=0; i<arr.length; i++) {
			if (typeof arr[i] === 'number' && arr[i] > 100){
    sumOfNumbers += (arr[i]);
}
}
return(sumOfNumbers);
}
sumOnly100Plus(arr);