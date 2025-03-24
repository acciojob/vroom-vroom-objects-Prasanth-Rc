// Complete the js code
function Car(make, model) {
	this.make = make;
    this.model = model;
}

Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
    // Call the Car constructor to inherit make and model properties
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);

SportsCar.prototype.constructor = SportsCar;

function SportsCar(make, model, topSpeed) {
	return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
