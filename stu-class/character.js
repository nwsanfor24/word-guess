class Character {

    constructor (name, strength, hitpoints) {
        this.name = name;
        this.strength = strength;
        this.hitpoints = hitpoints;
    }
    // method which prints all of the stats for a character
    printStats() {
      console.log(`Stats for ${this.name} are as following:`);
      console.log(`Each attack will do ${this.strength} damage.`);
      console.log(`${this.name} has ${this.strength} hit points remaining!`);
      console.log("------------");
    };
    // method which determines whether or not a character's "hitPoints" are less then zero
    // and returns true or false depending upon the outcome
    isAlive() {
        if (this.hitpoints > 0) {
            return true;
        } else {
            return false;
        }
    };
  
    // method which takes in a second object and decreases their "hitPoints" by this character's strength
    attack(opponent) {

      // console.log which character was attacked and how much damage was dealt
      // Then, change the opponent's hitPoints to reflect this

      opponent.hitpoints -= this.strength;

      console.log(`${this.name} attacked ${opponent.name}`);
    }
  }
  
  // Create two unique characters using the "character" class

  const accountant = new Character("Tim", 50, 2000);
  const greedyKing = new Character("Regis", 12, 450);

  accountant.printStats();
  greedyKing.printStats();
  
  // Create an interval that alternates attacks every 2000 milliseconds

  setInterval(attack(opponent), 2000);