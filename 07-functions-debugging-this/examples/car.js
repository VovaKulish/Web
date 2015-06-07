var car = {
	durability: 0.78,
	gas: 100,
	speeds: {
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
	},
	drive: function(distance, speed) {
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

		var realDurabilitySpent = realDistance * speedCharacteristics.durability;
		var realGasSpent = realDistance * speedCharacteristics.gas / 100;
		this.durability -= realDurabilitySpent;
		this.gas -= realGasSpent;
		return car;
	}
};




// car.drive();


var car2 = {
	durability: 0.38,
	gas: 50,
	speeds: {
		slow: {
			durability: 0.002,
			gas: 10
		},
		average: {
			durability: 0.002,
			gas: 12
		},
		fast: {
			durability: 0.006,
			gas: 11
		}
	}
};

car.drive.call(car2, 100, 'slow')




function drive(car, distance, speed) {
	var speedCharacteristics = car.speeds[speed];
	var drivingDistance = Math.min(distance, car.gas / speedCharacteristics.gas * 100);

	var durabilitySpent = drivingDistance * speedCharacteristics.durability;
	var durabilityLeft = car.durability - durabilitySpent;

	var realDistance;
	if (durabilityLeft < 0) {
		realDistance = car.durability / speedCharacteristics.durability;
	} else {
		realDistance = drivingDistance;
	}

	var realDurabilitySpent = realDistance * speedCharacteristics.durability;
	var realGasSpent = realDistance * speedCharacteristics.gas / 100;
	car.durability -= realDurabilitySpent;
	car.gas -= realGasSpent;
	return car;
}

drive(car, 100, 'average');

car.drive(100, 'average');