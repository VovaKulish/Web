var utils = {}
 
utils.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};

function flattern(array) {
    var res = [];
    for (var i = 0; i < array.length; i += 1) {
        if (utils.isArray(array[i])) {
            res = res.concat(flattern(array[i]));
        } else {
            res.push(array[i]);
        }
    }
    return res;
}
flattern(['mama', ['mila'], [], [['ramu']]]);