// TITLE: Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.


// MY SOLUTION:
function solution(number){
    let multiplesOf3Or5 = []
    let multiplesOfBoth = []
  
    for (i = 0; i < number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        multiplesOfBoth.push(i)

      } else if (i % 3 === 0 || i % 5 === 0) {
        multiplesOf3Or5.push(i) 
      }
    }
  
    let reduced = multiplesOf3Or5.reduce((acc, currentVal) => {
      return acc + currentVal}, 0)
  
    let reduced2 = multiplesOfBoth.reduce((acc, currentVal) => acc + currentVal, 0)
  
    const added = reduced + reduced2
    
    if (added < 0) {
        return 0;
    } else {
        return added
    }
  }


// OTHER SOLUTIONS

// function solution(number){
//     var sum = 0;
    
//     for(var i = 1;i< number; i++){
//       if(i % 3 == 0 || i % 5 == 0){
//         sum += i
//       }
//     }
//     return sum;
//   }


// function solution(number){
//     return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
//   }