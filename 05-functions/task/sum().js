function sum(){
  for(var i=0; i<arguments.length; i++) {
   if (typeof arguments[i] === 'number'){
   var result = 0 ;
   }
   else if (typeof arguments[i] === 'string'){
     result = '';
   }
    for(var i=0; i<arguments.length; i++) {
    result += arguments[i];
    }
  }
  return result;
}
sum(20,45,'s', 'ade',22);