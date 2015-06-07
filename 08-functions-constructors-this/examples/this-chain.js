var position = {
	x: 0,
	y: 0,
};

function walk(obj, x, y) {
	obj.x = x;
	obj.y = y;
}

function talk(obj) {
	console.log('I am at x:' + obj.x + ', y:' + obj.y);
}

walk(position, 10, 20);
talk(position);



// object props
var position = {
	x: 0,
	y: 0,
	walk: function (x, y) {
		this.x += x;
		this.y += y;
	},
	talk: function () {
		console.log('I am at x:' + this.x + ', y:' + this.y);
	}
};

position.walk(10, 20);
position.talk();




// class instance
var position1 = {
	x: 0,
	y: 0,
	walk: function (x, y) {
		this.x += x;
		this.y += y;
	},
	talk: function () {
		console.log('I am at x:' + this.x + ', y:' + this.y);
	}
};

var position2 = {
	x: 0,
	y: 0,
	walk: function (x, y) {
		this.x += x;
		this.y += y;
	},
	talk: function () {
		console.log('I am at x:' + this.x + ', y:' + this.y);
	}
};

position1.walk(20, 30);
position2.walk(-20, 15);
position1.talk();
position2.talk();









function createWalkyTalky(x, y) {
	return {
		x: x || 0,
		y: y || 0,
		walk: function (x, y) {
			this.x += x;
			this.y += y;
		},
		talk: function () {
			console.log('I am at x:' + this.x + ', y:' + this.y);
		}
	};
}

var position1 = createWalkyTalky(90, 49);
var position2 = createWalkyTalky(30);
position1.walk(20, 30);
position2.walk(-20, 15);
position1.talk();
position2.talk();





function WalkyTalky(x, y) {
	this.x = x || 0;
	this.y = y || 0;

	this.walk = function (x, y) {
		this.x += x;
		this.y += y;
	};
	this.talk =function () {
		console.log('I am at x:' + this.x + ', y:' + this.y);
	};
}


var wt1 = new WalkyTalky(90, 49);
var wt2 = new WalkyTalky(30);
wt1.walk(20, 30);
wt2.walk(-20, 15);
wt1.talk();
wt2.talk();




// Prototype-base
function WalkyTalky(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

WalkyTalky.prototype.walk = function (x, y) {
	this.x += x;
	this.y += y;
};

WalkyTalky.prototype.talk = function () {
	console.log('I am at x:' + this.x + ', y:' + this.y);
};



var wt1 = new WalkyTalky(90, 49);
var wt2 = new WalkyTalky(30);
wt1.walk(20, 30);
wt2.walk(-20, 15);
wt1.talk();
wt2.talk();





