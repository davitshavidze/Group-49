
class Car {
    #engineStatus = false;
    #speed = 0;
    #fuelLevel;

    constructor(fuelLevel) {
        this.#fuelLevel = fuelLevel;
    }

    #startEngine() {
        if (this.#fuelLevel > 0) {
            this.#engineStatus = true;
            console.log("Engine started.");
        } else {
            console.log("Not enough fuel to start the engine.");
        }
    }
    #consumeFuel(amount) {
        if (this.#fuelLevel >= amount) {
            this.#fuelLevel -= amount;
        } else {
            this.#fuelLevel = 0;
            this.#engineStatus = false;
            this.#speed = 0;
            console.log("Oops, Out of fuel! Car has stopped დ; .");
        }
    }

    drive(speed) {
        if (!this.#engineStatus) {
            this.#startEngine();
        }

        if (this.#engineStatus) {
            if (speed > 0) {
                this.#speed = speed;
                this.#consumeFuel(speed * 0.1); 
                console.log(`Driving at ${speed} km/h. Fuel level: ${this.#fuelLevel}`);
            } else {
                console.log("Speed must be greater than zero.");
            }
        }
    }

    refuel(amount) {
        if (amount > 0) {
            this.#fuelLevel += amount;
            console.log(`Refueled ${amount} liters. Current fuel level: ${this.#fuelLevel}`);
        } else {
            console.log("Refuel amount must be positive.");
        }
    }

    stop() {
        this.#speed = 0;
        this.#engineStatus = false;
        console.log("Car has stopped.");
    }
}

const myCar = new Car(10);
myCar.drive(60);
myCar.refuel(5);
myCar.stop();