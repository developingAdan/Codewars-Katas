// Title -- filterEvenLengthWords

// Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

// var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);

// console.log(output); // --> ['word', 'word']


// MY SOLUTION
function filterEvenLengthWords(words) {
    // your code here
    
     if (words.length === 0) {
          return []
      } else {
        let wordSplit = words.toString().split(',')
  
        let filtered = wordSplit.filter(item => item.length % 2 === 0)
      
        return filtered
      }
  }



// OTHER SOLUTIONS
// function filterEvenLengthWords(words) {
//     return words.filter(s=>s.length%2===0)
// }


// function filterEvenLengthWords(words) {
//     return words.filter(function(word) {
//       return !(word.length & 1);
//     });
//   }
