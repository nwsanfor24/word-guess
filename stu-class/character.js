class Character {

    constructor (name, strength, hitpoints) {
        if (!name) {
            throw new Error("You are missing a name");
        }
        if (!strength) {
            throw new Error("You are missing the strength");
        }
        if (!hitpoints) {
            throw new Error("You are missing hitpoints");
        }
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
            console.log(`${this.name} has been defeated!`);
            return false;
        }
    };
  
    // method which takes in a second object and decreases their "hitPoints" by this character's strength
    attack(opponent) {

      // console.log which character was attacked and how much damage was dealt
      // Then, change the opponent's hitPoints to reflect this

      opponent.hitpoints -= this.strength;

      console.log(`${this.name} attacked ${opponent.name} for ${this.strength}. Shit's about to get real.`);
    }
  }
  
  // Create two unique characters using the "character" class

  const accountant = new Character("Tim", 50, 2000);
  const greedyKing = new Character("Regis", 12, 450);

  accountant.printStats();
  greedyKing.printStats();

  const turnInterval = setInterval(() => {

    accountantTurn = !accountantTurn;

    if (!accountant.isAlive() || !greedyKing.isAlive()) {
        clearInterval(turnInterval);
        console.log("Game over Man!");
    } else if (accountantTurn) {
        accountant.attack(greedyKing);
        greedyKing.printStats();
    }
  }, 2000);
  
  // Create an interval that alternates attacks every 2000 milliseconds