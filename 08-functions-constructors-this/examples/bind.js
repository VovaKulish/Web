function bind(func, context) {
	return function() {
		return func.apply(context, arguments);
	};
}


var hiVariants = {
	name: 'Sergey',
	greeting: 'you there'
};

function sayHi() {
	return this.name + ' hi ' + this.greeting;
}


var binded = bind(sayHi, hiVariants);



var obj = {
	hi: binded
};

obj.hi(); // 