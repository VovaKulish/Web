function isInArray(arr) {
     for(var j = 1; j < arguments.length; j++){
         if(arr.indexOf(arguments[j]) === -1){
        return false;
        }
}
  return true;
}
isInArray([1], 1);