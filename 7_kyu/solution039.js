// Title -- By 3, or not by 3?
// Tags -- Arrays, Strings, Fundamentals

// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false


// My Solution
function divisibleByThree(str){
    let strSplit = str.split('')
  
      let turnedToNum = strSplit.map((item, index) => {
          return Number(item)
      })
  
  
      let reduced = turnedToNum.reduce((accum, currentVal) => {
          return accum + currentVal
      }, 0)
  
      // if (reduced / 3)
  
      if (reduced % 3 === 0) {
          return true
      } else {
          return false
      }
  }



// Other Solutions
  function divisibleByThree(str){
    return [...str].reduce((s,d)=>+d+s,0)%3===0;
  }



  const divisibleByThree = (str) => {
    const num = [...str].reduce((a, b)=> +a + +b, 0)
    return parseInt(num/3) === num/3
  }
