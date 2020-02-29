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
    constructor(id, color, passengers) {
        super(id, 4, "honk");
        this.color = color;
        this.passengers = passengers;
    }

    useHorn() {
        console.log(this.sound);
    }

    checkPassengers() {
        if (this.passengers <= 4) {
            return true;
        } else {
            console.log("There are too many passengers! GET THEM OUT!!");
            return false;
        }
    }    
}

const carPassengers = [
    {
        name: "Nathan"
    },
    {
        name: "Harrison"
    },
    {
        name: "Mitchell"
    },
    {
        name: "Rebecca"
    },
    {
        name: "Jillian"
    },
];

class Boat extends Vehicle {
    constructor(id, type, crew) {
        super(id, 0, "bwom");
        this.type = type;
        this.crew = crew;
    }

    crewSoundOff() {
        this.crew.forEach(member => {

        })
    }

    useHorn() {
        console.log(this.sound);
    }
}

const car = new Car(15, "blue", carPassengers);

car.printInfo();
car.useHorn();
car.checkPassengers();

  module.exports = Vehicle;
  