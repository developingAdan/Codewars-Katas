// Title -- Sum of numbers from 0 to N
// Tags -- Fundamentals, Strings

// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.
// Example:

// Input:

// > 6

// Output:

//     0+1+2+3+4+5+6 = 21

// Input:

// > -15

// Output:

//     -15<0

// Input:

// > 0

// Output:

//     0=0

// My Solution
var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      // for
      
      if (count < 0) {
              return count + '<0'
          } else if (count === 0) {
              return '0=0'
          }
      let counter = 0;
          let str = ''
          for (i = 0; i <= count; i++) {
              counter += i
              str += i + '+'
          }
          let splitStr = str.split('')
          splitStr.pop();
          splitStr.splice(splitStr.length, 0, ' = ' + counter)
          let joinedStr = splitStr.join('')
          // console.log(counter)
          // console.log(joinedStr)
          return joinedStr
    };
  
    return SequenceSum;
  
  })();