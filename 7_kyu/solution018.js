
// Title -- Filter Long Words

// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']



// MY SOLUTION:
function filterLongWords(sentence, n) {
    //Solution here
      let splittedSent = sentence.split(' ')
  
      return splittedSent.filter(item => item.length > n) 

    // I could've made it into a one-liner (but putting sentence.split() in return statement) but this helped me visually see what's going on.  
}


// OTHER SOLUTIONS:

// function filterLongWords(sentence, n) {
//     var longer = [];
//     var sent  = sentence.split(' ');
//     console.log(sent)
//     for(var i=0; i< sent.length; i++) {
//       if( sent[i].length > n) {
//         longer.push(sent[i])
//       }
//     }
//     return longer
//   }