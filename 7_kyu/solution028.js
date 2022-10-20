// Title -- Alternate Capitalization

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try: 


// My Solution
function capitalize(s){
    let splitted = s.split('')
  
    let mapped = splitted.map((item, index) => {
      if (index % 2 === 0) {
        return item.toUpperCase();
      } else {
        return item.toLowerCase();
      }
    })
  
    let mapped2 = splitted.map((item, index) => {
      if (index % 2 === 0) {
        return item.toLowerCase();
      } else {
        return item.toUpperCase();
      }
    })
  
    // let combiningViaSpread = [...mapped, ...mapped2]
    let weDontWantCombined = [mapped.join(''), mapped2.join('')]
  
    return weDontWantCombined
  
  };



// Other Solutions

// function capitalize(s){
//     const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
//     const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
//     return [even, odd];
//   };
  

// function capitalize(s) {
//     const S = s.toUpperCase()
//     let a = ""
//     let b = ""
//     for (let i = 0; i < s.length; ++i) {
//       if (i & 1) {
//         a += s[i]
//         b += S[i]
//       } else {
//         a += S[i]
//         b += s[i]
//       }
//     }
//     return [a, b]
//   }