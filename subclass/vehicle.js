class Vehicle {
    constructor(id, numberOfWheels, sound) {
      this.id = id;
      this.numberOfWheels = numberOfWheels;
      this.sound = sound;
    }
  
    printInfo() {
      console.log(`This vehicle has ${this.numberOfWheels} wheels`);
      console.log(`This vehicle has an id of ${this.id}`);
    }
  }

class Car extends Vehicle {
    constructor(color, passengers) {
        this.color = color;
        this.passengers = passengers;
    }

    checkPassengers() {
        if (this.passengers <= 4) {
            return true;
        } else {
            console.log("There are too many passengers! GET THEM OUT!!");
            return false;
        }
    }

    useHorn() {
        console.log(this.sound);
    }
}

class Boat extends Vehicle {
    constructor(crew) {
        this.crew = crew;
    }

    crewSoundOff() {
        console.log(`${this.crew}`);
    }

    useHorn() {
        console.log(this.sound);
    }
}

  module.exports = Vehicle, Car, Boat;
  