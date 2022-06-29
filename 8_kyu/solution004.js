// Grasshopper -- Terminal game combat function

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// update
// SOLUTION I USED
function combat(health, damage) {
    // Write your code here
    if (health - damage < 0) {
      return 0;
    } else {
      return health - damage;
    }
  }


// OTHER SOLUTIONS:

// function combatt(health, damage) {
//     return health - damage < 0 ? 0 : health - damage;
// }


// function combat(health, damage) {
//     return Math.max(health - damage, 0);
// }