// Fix the function

// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?


// SOLUTION:
function addFive(num) {
    var total = num + 5
    return total
  }


// OTHER SOLUTION #1:

const number = num => num + 5;

console.log(number(5))

// OTHER SOLUTION #2
function addFive(num) {
    return num + 5
  }
