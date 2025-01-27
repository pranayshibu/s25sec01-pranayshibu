// Here your variables
let gold = 10;
// Add your missing variables here (e.g., ore, wood, swords, axes, fireBurning)

// Here your Functions
// Define your missing functions here: buy(item), make(weapon), sell(weapon), fire(), inventory()





























/**
 * Do not modify the code below
 */
function help() {
  console.log(`
  Commands:
  - buy(item): Buy supplies (ore or wood)
  - make(weapon): Make weapons (sword or axe)
  - sell(weapon): Sell weapons (sword or axe)
  - fire(): Start or stop the fire
  - inventory(): View your inventory
  - help(): View game instructions
  `);
}

// A 'state' object that forwards reads/writes to the variables
const state = {
  get gold() {
    return gold;
  },
  set gold(value) {
    gold = value;
  },

  get ore() {
    return ore; // Variable to be defined by students
  },
  set ore(value) {
    ore = value;
  },

  get wood() {
    return wood; // Variable to be defined by students
  },
  set wood(value) {
    wood = value;
  },

  get swords() {
    return swords; // Variable to be defined by students
  },
  set swords(value) {
    swords = value;
  },

  get axes() {
    return axes; // Variable to be defined by students
  },
  set axes(value) {
    axes = value;
  },

  get fireBurning() {
    return fireBurning; // Variable to be defined by students
  },
  set fireBurning(value) {
    fireBurning = value;
  }
};

// Export your commands plus the special "state" object
module.exports = {
  buy, // Function to be defined by students
  make, // Function to be defined by students
  sell, // Function to be defined by students
  fire, // Function to be defined by students
  inventory, // Function to be defined by students
  help,
  state
};
