var where = [1,2,3];
var what = [3,2];
function contains(where,what){
var commonNumbers = 0;
for (var i=0; i<what.length; i++) {
if (where.indexOf(what[i])!= -1) {
        commonNumbers += 1; }
}
if (what.length === commonNumbers){
return true;
}else{
return false;
}
}
contains(where,what);