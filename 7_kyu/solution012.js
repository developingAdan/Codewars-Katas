// Sum of numbers from 0 to N

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21


// MY SOLUTIONS
function sequenceSum(num) {
    let numbersArr = 0
      for (i = 0; i <= num; i++) {
        numbersArr = numbersArr + i;
      }
      return numbersArr
  }
  
  console.log(sequenceSum(6))