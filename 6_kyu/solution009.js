// Title: Count letters in a string

// In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

// My Solution
function letterCount(s) {
    //your code here
    
    let splitted = s.split('')

    let reduced = splitted.reduce((accum, currentVal) => {
        if (!accum[currentVal]) {
            accum[currentVal] = 0;
        }
        accum[currentVal]++;
        return accum;
    }, {})  
    return reduced
  }


// Other Solutions

// const letterCount = s => s
//   .split('')
//   .reduce((accum, value) => {
//     accum[value] = accum[value] ? accum[value] + 1 : 1
//     return accum
//   }, {})


// function letterCount(s){
//     let dict = {}
//     for (let letter of s) {
//       if (dict[letter]){
//         dict[letter] += 1   // UPDATE
//       } else {
//         dict[letter] = 1    // CREATE
//       }
//     }
//     return dict
//   }