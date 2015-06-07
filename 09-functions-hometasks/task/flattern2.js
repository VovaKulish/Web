var utils = {}
 
utils.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};

function flattern(array) {
    return array.reduce(function (result, element) {
        if (utils.isArray(element)) {
            result = result.concat(flattern(element))
        } else {
            result.push(element)
        }
        return result
    }, []);
}

flattern(['mama', ['mila'], [], [['ramu']]]);