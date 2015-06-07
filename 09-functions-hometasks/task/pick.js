 function pick(obj,keys) {
      var newObj = {};
      if (keys.length !== 0) {
   for(var i = 0; i < keys.length; i++){
         if (obj[keys[i]]!== undefined ) {
         	newObj[keys[i]] = obj[keys[i]]
        }
      } 
    }
      return newObj; 
}