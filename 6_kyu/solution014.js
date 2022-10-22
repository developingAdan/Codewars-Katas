// Title -- Reverse every other word in the string
// Category -- Arrays
// Tags -- Fundamentals, Arrays

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// My Solution
function reverse(str) {

    let splitted = str.split(' ')
    let newArr = []
    splitted.forEach((item, index) => {
      if (index % 2 !== 0) {
        let splittedItem = item.split('').reverse().join('')
        newArr.push(splittedItem)
      } else {
        newArr.push(item)
      }
    })

    return newArr.join(' ')

  }


// Other Solutions

function reverse(str){
  
    let arr = str.split(" "); 
  
    for(var i = 1; i<arr.length; i+=2){
        arr[i] = arr[i].split('').reverse().join(""); 
    }
    
    return arr.join(" ").trim(); 
    
  }


  function reverse(string) {
    return string
      .split` `
      .map((w, i) => i & 1 ? [...w].reverse().join`` : w)
      .join` `
      .trim();
  }