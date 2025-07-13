var taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341,
	started: false,
	fuel: 0,
	
	start: function() {
		if(this.fuel > 0) {
			this.started = true;
		} else {
			alert(this.make + " " + this.model + " is on empty, fill up before starting!");
		}
	},
	
	stop: function() {
		this.started = false;
	},
	
	drive: function() {
		if (this.started) {
			if(this.fuel > 0) {
				alert(this.make + " " + this.model + " goes Zoom zoom!");
			this.fuel = this.fuel - 1;
			} else {
				alert("Uh uh, out of fuel.");
				this.stop;
			}
		} else {
			alert("You need to start the engine first.");
		}
	},
	
	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
	}
};

var cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12892,
	started: false,
	
	start: function() {
		this.started = true;
	},
	
	stop: function() {
		this.started = false;
	},
	
	drive: function() {
		if (this.started) {
			alert(this.make + " " + this.model + " goes Zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	}
}

var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	
	start: function() {
		this.started = true;
	},
	
	stop: function() {
		this.started = false;
	},
	
	drive: function() {
		if (this.started) {
			alert(this.make + " " + this.model + " goes Zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	}
}

var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021,
	started: false,
	
	start: function() {
		this.started = true;
	},
	
	stop: function() {
		this.started = false;
	},
	
	drive: function() {
		if (this.started) {
			alert(this.make + " " + this.model + " goes Zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	}
}

function prequal(car) {
	if (car.mileage > 10000) {
		return false;
	} else if (car.year > 1960) {
		return false;
	}
	return true;
}

function carDesirePrint(car) {
	var worthALook = prequal(car);

	if (worthALook) {
		console.log("You gotta check out this " + car.make + " " + car.model);
	} else {
		console.log("You should really pass on the " + car.make + " " + car.model);
	}
}

carDesirePrint(taxi);
carDesirePrint(cadi);
carDesirePrint(fiat);
carDesirePrint(chevy);

taxi.start();
taxi.drive();
taxi.addFuel(2);
taxi.start();
taxi.drive();
taxi.drive();
taxi.drive();
taxi.stop();