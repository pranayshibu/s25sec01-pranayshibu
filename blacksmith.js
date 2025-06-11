// Here your variables
let gold = 10;
let ore = 0;
let wood = 0;
let swords = 0;
let axes = 0;
let fireBurning = false;

// Here your Functions

function fire() {
  if (fireBurning) {
    fireBurning = false;
    console.log("The fire has been extinguished.");
  } else {
    if (wood >= 1) {
      wood -= 1;
      fireBurning = true;
      console.log("The fire is now burning.");
    } else {
      console.log("You don't have enough wood to start the fire.");
    }
  }
}

function buy(item) {
  if (fireBurning) {
    console.log("You can't buy items while the fire is burning.");
    return;
  }

  if (item === "ore") {
    if (gold >= 3) {
      ore += 1;
      gold -= 3;
      console.log("You bought 1 ore.");
    } else {
      console.log("Not enough gold to buy ore.");
    }
  } else if (item === "wood") {
    if (gold >= 1) {
      wood += 1;
      gold -= 1;
      console.log("You bought 1 wood.");
    } else {
      console.log("Not enough gold to buy wood.");
    }
  } else {
    console.log("Invalid item. You can only buy 'ore' or 'wood'.");
  }
}

function make(weapon) {
  if (!fireBurning) {
    console.log("The fire must be burning to make weapons.");
    return;
  }

  if (weapon === "sword") {
    if (ore >= 2 && wood >= 1) {
      ore -= 2;
      wood -= 1;
      swords += 1;
      console.log("You crafted a sword.");
    } else {
      console.log("Not enough resources to make a sword.");
    }
  } else if (weapon === "axe") {
    if (ore >= 1 && wood >= 2) {
      ore -= 1;
      wood -= 2;
      axes += 1;
      console.log("You crafted an axe.");
    } else {
      console.log("Not enough resources to make an axe.");
    }
  } else {
    console.log("Invalid weapon. You can only make 'sword' or 'axe'.");
  }
}

function sell(weapon) {
  if (fireBurning) {
    console.log("Extinguish the fire before selling items.");
    return;
  }

  if (weapon === "sword") {
    if (swords >= 1) {
      swords -= 1;
      gold += 5;
      console.log("You sold a sword for 5 gold.");
    } else {
      console.log("You don't have any swords to sell.");
    }
  } else if (weapon === "axe") {
    if (axes >= 1) {
      axes -= 1;
      gold += 4;
      console.log("You sold an axe for 4 gold.");
    } else {
      console.log("You don't have any axes to sell.");
    }
  } else {
    console.log("Invalid weapon. You can only sell 'sword' or 'axe'.");
  }
}

function inventory() {
  console.log(`Current Inventory: Gold: ${gold}, Ore: ${ore}, Wood: ${wood}, Swords: ${swords}, Axes: ${axes}`);
}

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
    return ore;
  },
  set ore(value) {
    ore = value;
  },

  get wood() {
    return wood;
  },
  set wood(value) {
    wood = value;
  },

  get swords() {
    return swords;
  },
  set swords(value) {
    swords = value;
  },

  get axes() {
    return axes;
  },
  set axes(value) {
    axes = value;
  },

  get fireBurning() {
    return fireBurning;
  },
  set fireBurning(value) {
    fireBurning = value;
  }
};

// Export your commands plus the special "state" object
module.exports = {
  buy,
  make,
  sell,
  fire,
  inventory,
  help,
  state
};
