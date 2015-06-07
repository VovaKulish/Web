// http://jscourse.com/task/summ-all-arguments

function sum(){
	var result = arguments[0];
	for (var i = 1; i < arguments.length; i += 1) {
		result += arguments[i];
	}
	return result;
}



function sum(){
	var result;
	if (typeof arguments[0] === 'number') {
		result = 0;
	} else {
		result = '';
	}

	for (var i = 0; i < arguments.length; i += 1) {
		result += arguments[i];
	}
	return result;
}


function sum(){
	var result = (typeof arguments[0] === 'number') ? 0 : '';

	for (var i = 0; i < arguments.length; i += 1) {
		result += arguments[i];
	}
	return result;
}