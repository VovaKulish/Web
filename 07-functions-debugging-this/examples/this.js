(function () {
	'use strict';

	function logThis() {
		console.log('this', this);
	}


	logThis();
}());



function logThis() {
	console.log('this', this);
	console.log('arguments', arguments);
}

// logThis.apply({foo: 'bar'}, ['uno', 'tuo', 'tre']);
// logThis.call({foo: 'bar'}, 'uno', 'tuo', 'tre');



var obj = {
	test: true,
	action: logThis
};

obj.action();
