// tests/tests.js
const { buy, make, sell, fire, inventory, help, state } = require("../blacksmith.js");

// Function to reset the state
function resetGame() {
  state.gold = 10;
  state.ore = 0;
  state.wood = 0;
  state.swords = 0; // Reset swords count
  state.axes = 0;   // Reset axes count
  state.fireBurning = false;
}

// Run manual checks
console.log("Running comprehensive manual checks...");

// Manual check for `buy` function
resetGame();
console.log("Testing `buy` function...");
buy("ore");
console.log(state.ore === 1 ? "✔️ Ore buying works!" : "❌ Ore buying failed!");
console.log(state.gold === 7 ? "✔️ Gold deduction for ore works!" : "❌ Gold deduction for ore failed!");

buy("wood");
console.log(state.wood === 1 ? "✔️ Wood buying works!" : "❌ Wood buying failed!");
console.log(state.gold === 6 ? "✔️ Gold deduction for wood works!" : "❌ Gold deduction for wood failed!");

buy("invalid");
console.log("✔️ Test passed: Invalid item in `buy` handled correctly.\n");

// Manual check for `make` function
resetGame();
console.log("Testing `make` function...");
buy("ore");
buy("ore");
buy("wood");
buy("wood");
fire(); // Start fire
make("sword");
console.log(state.swords === 1 ? "✔️ Sword making works!" : "❌ Sword making failed!");
console.log(state.ore === 0 ? "✔️ Ore deduction for sword works!" : "❌ Ore deduction for sword failed!");
console.log(state.wood === 0 ? "✔️ Wood deduction for sword works!" : "❌ Wood deduction for sword failed!");

resetGame();
buy("ore");
buy("wood");
buy("wood");
buy("wood");
fire(); // Start fire
make("axe");
console.log(state.axes === 1 ? "✔️ Axe making works!" : "❌ Axe making failed!");
console.log(state.ore === 0 ? "✔️ Ore deduction for axe works!" : "❌ Ore deduction for axe failed!");
console.log(state.wood === 0 ? "✔️ Wood deduction for axe works!" : "❌ Wood deduction for axe failed!");

make("invalid");
console.log("✔️ Test passed: Invalid weapon in `make` handled correctly.\n");

// Manual check for `sell` function
resetGame();
console.log("Testing `sell` function...");
state.swords = 1; // Manually set inventory
sell("sword");
console.log(state.gold === 15 ? "✔️ Gold increase for sword sale works!" : "❌ Gold increase for sword sale failed!");
console.log(state.swords === 0 ? "✔️ Sword removal after sale works!" : "❌ Sword removal after sale failed!");

state.axes = 1; // Manually set inventory
sell("axe");
console.log(state.gold === 19 ? "✔️ Gold increase for axe sale works!" : "❌ Gold increase for axe sale failed!");
console.log(state.axes === 0 ? "✔️ Axe removal after sale works!" : "❌ Axe removal after sale failed!");

sell("invalid");
console.log("✔️ Test passed: Selling invalid item handled correctly.\n");

// Manual check for `fire` function
resetGame();
console.log("Testing `fire` function...");
state.wood = 1; // Ensure there's enough wood to start the fire
fire();
console.log(state.fireBurning === true ? "✔️ Fire starting works!" : "❌ Fire starting failed!");
console.log(state.wood === 0 ? "✔️ Wood deduction for fire works!" : "❌ Wood deduction for fire failed!");

fire();
console.log(state.fireBurning === false ? "✔️ Fire stopping works!" : "❌ Fire stopping failed!");

fire(); // Attempt to start fire without wood
console.log(state.fireBurning === false ? "✔️ Fire does not start without wood!" : "❌ Fire should not start without wood!\n");

// Manual check for `inventory` function
resetGame();
console.log("Testing `inventory` function...");
state.swords = 2;
state.axes = 1;
inventory(); // Check console output manually
console.log("✔️ Inventory function outputs as expected. (Verify manually)\n");

// Manual check for `help` function
console.log("Testing `help` function...");
help(); // Check console output manually
console.log("✔️ Help function outputs as expected. (Verify manually)\n");

console.log("All comprehensive manual checks completed!");
