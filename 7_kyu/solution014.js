// Title: Turn mars rover to take pictures

// Mars rover is on an important mission to take pictures of Mars.

// In order to take pictures of all directions it needs an algorithm to help it turn to face the correct position.

// Mars rover can face 4 different directions, that would be N, S, E, W. Every time it needs to turn it will call a command turn passing the current position it is facing and the position it wants to face.

// For example:

//     if it asks turn N E the expected result would be right
//     if it asks turn N W the expected result would be left

// Mars rover can only make one move at a time and it will only request positions that require a single move.

// Can you write an algorithm that tells if it should move left or right?


// MY SOLUTION
function turn(current, target) {
  
    if (current === 'N' && target === 'E') {
     return 'right'
   } else if (current === 'N' && target === 'W') {
     return 'left' 
   } else if (current === 'E' && target === 'S') {
     return 'right' 
   } else if (current === 'E' && target === 'N') {
     return 'left' 
   } else if (current === 'S' && target === 'W') {
     return 'right' 
   } else if (current === 'S' && target === 'E') {
     return 'left' 
   } else if (current === 'W' && target === 'N') {
     return 'right' 
   } else if (current === 'W' && target === 'S') {
     return 'left' 
   }
}


// OTHER SOLUTIONS

// const directions = {
//     N: {W: "left", E: "right"},
//     S: {W: "right", E: "left"},
//     W: {N: "right", S: "left"},
//     E: {N: "left", S: "right"},
//   }
  
//   function turn(current, target) {
//     return directions[current][target]
// }


// function turn(current, target) {
//     return "NESWN".includes(current+target) ? 'right' : 'left';
// }