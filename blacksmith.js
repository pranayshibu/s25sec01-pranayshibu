// Initial inventory
let gold = 10;
let ore = 0;
let wood = 0;
let swords = 0;
let axes = 0;
let fireBurning = false;

// 🔥 Start or stop the fire
function fire() {
  if (fireBurning) {
    fireBurning = false;
    console.log("The fire has been put out.");
  } else {
    if (wood >= 1) {
      wood -= 1;
      fireBurning = true;
      console.log("You used 1 wood to start the fire.");
    } else {
      console.log("You don't have enough wood to start the fire.");
    }
  }
}

// 🛒 Buy resources (ore or wood)
function buy(item) {
  if (fireBurning) {
    console.log("You cannot buy items while the fire is burning.");
    return;
  }

  if (item === "ore") {
    if (gold >= 3) {
      gold -= 3;
      ore += 1;
      console.log("You bought 1 ore.");
    } else {
      console.log("Not enough gold to buy ore.");
    }
  } else if (item === "wood") {
    if (gold >= 1) {
      gold -= 1;
      wood += 1;
      console.log("You bought 1 wood.");
    } else {
      console.log("Not enough gold to buy wood.");
    }
  } else {
    console.log("Invalid item. You can only buy 'ore' or 'wood'.");
  }
}

// ⚒️ Craft weapons (sword or axe)
function make(item) {
  if (!fireBurning) {
    console.log("You must start the fire to craft weapons.");
    return;
  }

  if (item === "sword") {
    if (ore >= 2 && wood >= 1) {
      ore -= 2;
      wood -= 1;
      swords += 1;
      console.log("You crafted 1 sword.");
    } else {
      console.log("Not enough materials to make a sword.");
    }
  } else if (item === "axe") {
    if (ore >= 1 && wood >= 2) {
      ore -= 1;
      wood -= 2;
      axes += 1;
      console.log("You crafted 1 axe.");
    } else {
      console.log("Not enough materials to make an axe.");
    }
  } else {
    console.log("Invalid item. You can only make 'sword' or 'axe'.");
  }
}

// 💰 Sell crafted weapons
function sell(item) {
  if (fireBurning) {
    console.log("You can't sell while the fire is burning.");
    return;
  }

  if (item === "sword") {
    if (swords > 0) {
      swords -= 1;
      gold += 5;
      console.log("You sold 1 sword for 5 gold.");
    } else {
      console.log("No swords available to sell.");
    }
  } else if (item === "axe") {
    if (axes > 0) {
      axes -= 1;
      gold += 4;
      console.log("You sold 1 axe for 4 gold.");
    } else {
      console.log("No axes available to sell.");
    }
  } else {
    console.log("Invalid item. You can only sell 'sword' or 'axe'.");
  }
}

// 📦 Show current inventory
function inventory() {
  console.log(`Current Inventory:
  Gold: ${gold}
  Ore: ${ore}
  Wood: ${wood}
  Swords: ${swords}
  Axes: ${axes}`);
}

// 📘 Show instructions
function help() {
  return `INSTRUCTIONS:
Blacksmith is a simple text-based game.

As a blacksmith, you convert ore and wood into swords and axes.
You buy your resources using gold and sell your weapons for gold.

COMMANDS:
- fire()
- buy("ore" or "wood")
- make("sword" or "axe")
- sell("sword" or "axe")
- inventory()
- help()`;
}

// Show help message on page load
console.log(help());
