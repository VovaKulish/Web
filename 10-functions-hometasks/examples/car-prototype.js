function Car(carCharacteristics) {
	this.durability = carCharacteristics.durability;
	this.gas = carCharacteristics.gas;
	this.speeds = JSON.parse(JSON.stringify(carCharacteristics.speeds));
}


Car.prototype._getRealDistance = function (distance, speed) {
	var speedCharacteristics = this.speeds[speed];
	var drivingDistance = Math.min(distance, this.gas / speedCharacteristics.gas * 100);

	var durabilitySpent = drivingDistance * speedCharacteristics.durability;
	var durabilityLeft = this.durability - durabilitySpent;

	var realDistance;
	if (durabilityLeft < 0) {
	    realDistance = this.durability / speedCharacteristics.durability;
	} else {
	    realDistance = drivingDistance;
	}
	return realDistance;
};


Car.prototype.drive = function (distance, speed) {
	var realDistance = this._getRealDistance(distance, speed);
	var speedCharacteristics = this.speeds[speed];
	var durabilitySpent = realDistance * speedCharacteristics.durability;

	var gasSpent = realDistance * speedCharacteristics.gas / 100;
	this.durability -= durabilitySpent;
	this.gas -= gasSpent;
};


var speeds = {
	slow: {
		durability: 0.001,
		gas: 7
	},
	average: {
		durability: 0.001,
		gas: 6.5
	},
	fast: {
		durability: 0.003,
		gas: 6
	}
};

var sedan = new Car({
	durability: 100,
	gas: 90,
	speeds: speeds
});

var sedan1 = new Car({
	durability: 80,
	gas: 80,
	speeds: speeds
});

speeds.slow.gas = 100500;
console.log(sedan.durability, sedan.gas);
sedan.drive(100, 'slow');
console.log(sedan.durability, sedan.gas);

// console.log(sedan1.gas, sedan1.durability)
// sedan1.drive(100, 'slow');
// console.log(sedan1.gas, sedan1.durability)








