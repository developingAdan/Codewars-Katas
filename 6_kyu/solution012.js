// Title -- The Vowel Code

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.


//MY SOLUTION

function encode(string) {
    let splitted = string.split('')

    splitted.forEach((item, index) => {
        if (item === 'a') {
            splitted.splice(index, 1, '1')

        } else if (item === 'e') {
            splitted.splice(index, 1, '2')
        } else if (item === 'i') {
            splitted.splice(index, 1, '3')
        } else if (item === 'o') {
            splitted.splice(index, 1, '4')
        } else if (item === 'u') {
            splitted.splice(index, 1, '5')
        }
    
    
    })
    
    return splitted.join('')
  }
  
  function decode(string) {
    let splitted = string.split('')

    splitted.forEach((item, index) => {
        if (item === '1') {
            splitted.splice(index, 1, 'a')

        } else if (item === '2') {
            splitted.splice(index, 1, 'e')
        } else if (item === '3') {
            splitted.splice(index, 1, 'i')
        } else if (item === '4') {
            splitted.splice(index, 1, 'o')
        } else if (item === '5') {
            splitted.splice(index, 1, 'u')
        }
    })

    return splitted.join('')
  }


// OTHER SOLUTIONS

// function encode(string){
//     var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
//     return codeStringGivenMapping(string, vowelMapping);
//   }
  
//   function decode(string){
//     var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
//     return codeStringGivenMapping(string, vowelMapping); 
//   }
  
//   function codeStringGivenMapping(string, mapping){
//     return string.split('').map(function(char){
//       return mapping[char] || char;
//     }).join(''); 
//   }

  // this one was good, imo. Taken from Code Wars submissions