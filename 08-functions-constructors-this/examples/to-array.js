function toArray(obj) {
	return [].slice.call(obj);
}

function toArray(obj) {
	return Array.prototype.slice.call(obj);
}


function toArray(obj) {
	var res = [];
	for (var i = 0; i < obj.length; i += 1) {
		res.push(obj[i]);
	}
	return res;
}





function pop() {
	debugger
	var res;
	if (this.length) {
		res = this[this.length - 1];
		this.length -= 1;
	}
	return res;
}


function popargs() {
	console.log(pop.call(arguments));
}

popargs('one', 'two', 'three')
