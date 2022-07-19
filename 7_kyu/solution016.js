// Title -- Truthy and Falsy

// In JavaScript there are truthy and falsy values:

//     truthy: a value that when evaluated in a boolean context returns true
//     falsy: a value that when evaluated in a boolean context returns false

//     Your task

//     You are given two empty arrays (truthy and falsy) and you have to fill this array with at least 5 elements in each which will evaluate to true or false accordingly.

// MY SOLUTION:
const truthy = [];
const falsy = [];

for (i = 0; i < 5; i++) {
  let truthyValues = [true, 'string', 3, 'otherString', 'otherOtherStr']
  
  truthy.push(truthyValues[i])
  
  let falsyValues = [0, null, undefined, '', NaN]
  
  falsy.push(falsyValues[i])
  
  // for (j = 0; j < 1; j++) {
  //   falsy.push(null)
  // }
  
  console.log([truthy, falsy])
}


// Apparently I could've solved this kata by *manually* inputting the truthy and falsy values. Interesting

// OTHER SOLUTIONS

// const truthy = [1, 2, 3, 4, 5];
// I SWEAR I CODED TODAY, i coded codewars with jon
// const falsy = [0, "", NaN, false, null];