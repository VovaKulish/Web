function sum(a, b) {
	return a + b;
}


sum(10, 20); // 30

//////////////////

function addTest(obj) {
	obj.test = true;
}

var o = {foo: 'bar'};
addTest(o); // 
console.log(o); // {foo: 'bar', test: true}


//////////////////

function exec(f) {
	f();
}

function log(val) {
	console.log(val);
}

exec(log);



///////////////////

var ppp = {
	log: function (val) {
		console.log('THIS FUNC');
		console.log(val);
	}
};

function forEach(array, action) {
  console.log(action === ppp.log); // true 
  for (var i = 0; i < array.length; i++) {
  	action(array[i]);
  }
}

function log(val) {
	console.log(val);
}

function warn(val) {
	console.warn(val);
}

// forEach(["Тили", "Мили", "Трямдия"], function fff (val) {
// 	console.log(val, fff);
// });

// forEach(["Тили", "Мили", "Трямдия"], function (val) {
// 	console.log(val, fff);
// });

// forEach(["Тили", "Мили", "Трямдия"], log);
// forEach(["Тили", "Мили", "Трямдия"], warn);
forEach(["Тили", "Мили", "Трямдия"], ppp.log);

// log("Тили");