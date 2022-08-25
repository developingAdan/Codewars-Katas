// Title -- String average

// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"


// MY SOLUTION

function averageString(str) {
    // Code away
    
    let numberStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
      if (str.length === 0) {
          return 'n/a'
      }
  
      let splitted = str.split(' ')
  
      const isEveryWordInSplittedIncluded = splitted.every(item => numberStrings.includes(item))
      
      console.log(isEveryWordInSplittedIncluded)
      
      let count = 0;
      
      splitted.forEach((item, index) => {
          if (item === 'zero') {
              count = count + 0;
          } else if (item === 'one') {
              count = count + 1;
          } else if (item === 'two') {
              count = count + 2
          } else if (item === 'three') {
              count = count + 3
          } else if (item === 'four') {
              count = count + 4
          } else if (item === 'five') {
              count = count + 5
          } else if (item === 'six') {
              count = count + 6
          } else if (item === 'seven') {
              count = count + 7
          } else if (item === 'eight') {
              count = count + 8
          } else if (item === 'nine') {
              count = count + 9
          } 
      })
      
      if (isEveryWordInSplittedIncluded !== true) {
          return 'n/a'
      }
  
      let calc = Math.floor(count / splitted.length);
  
      switch (calc) {
          case 0:
              return 'zero';
              break;
          case 1:
              return 'one'
              break;
          case 2:
              return 'two'
              break;
          case 3:
              return 'three'
              break;
          case 4: 
              return 'four'
              break;
          case 5: 
              return 'five'
              break;
          case 6: 
              return 'six'
              break;
          case 7: 
              return 'seven'
              break;
          case 8: 
              return 'eight'
              break;
          case 9: 
              return 'nine'
              break;
          default:
              return 'n/a'
              break;
      }
  }
  

  
// OTHER SOLUTIONS

// const numbers = [
//     'zero',
//     'one',
//     'two',
//     'three',
//     'four',
//     'five',
//     'six',
//     'seven',
//     'eight',
//     'nine',
//   ];
  
//   const averageString = (str) => {
//     const nums = str.split(' ').map(v => numbers.indexOf(v));
//     if (nums.includes(-1)) return 'n/a'
//     const sum = nums.reduce((prev, cur) => prev + cur);
//     const average = Math.floor(sum / nums.length)
//     return numbers[average]
//   }

// function averageString(str) {
//     var numObj = {
//       'zero': 0,
//       'one': 1,
//       'two': 2,
//       'three': 3,
//       'four': 4,
//       'five': 5,
//       'six': 6,
//       'seven': 7,
//       'eight': 8,
//       'nine': 9
//     },
//     sum = 0;
//     str = str.split(' ');
//     for(var i = 0; i < str.length; i++) {
//       if(numObj[str[i]] === undefined) {
//         return 'n/a';
//       } else {
//         sum += numObj[str[i]];
//       }
//     }
//     return Object.keys(numObj)[Math.floor(sum/str.length)];
//   }