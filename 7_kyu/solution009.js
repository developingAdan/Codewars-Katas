// Predict your age!

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

//     Take a list of ages when each of your great-grandparent died.
//     Multiply each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.

// Example

// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

// Note: the result should be rounded down to the nearest integer.

//MY SOLUTION
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    // your code
    let multipliedAges = [[age1 * age1], [age2 * age2], [age3 * age3], [age4 * age4], [age5 * age5], [age6 * age6], [age7 * age7], [age8 * age8]]
  
    let flatAges = multipliedAges.flat()
    let addedAges = flatAges.reduce((acc, currentVal) => {
      acc = acc + currentVal
      return acc
    })
    let squareRtOfAges = Math.floor(Math.sqrt(addedAges) / 2)
  
    return squareRtOfAges
}
  




// OTHER SOLUTIONS
// function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
//     let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
//     return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
// }


// const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;
// this one is intersting ^





