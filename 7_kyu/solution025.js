// Title -- Two to one

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// MY SOLUTION
function longest(s1, s2) {
    // your code
    let s1Arr = s1.split('');
    let s2Arr = s2.split('');
    let combinedArr = s1Arr.concat(s2Arr).sort();
    
    let result = []
  
    combinedArr.forEach((item) => {
      if (!result.includes(item)) {
        result.push(item);
      } 
    })
  
    return result.join('')
    }
    
  console.log(longest('asdfalkwjer', 'asdfoijweidke'))

  // OTHER SOLUTIONS