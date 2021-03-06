// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// MY SOLUTION
function capitals(word) {
    // Write your code here
    let caps = []
    let split = word.split('')
    split.forEach((item, index) => {
      if (item === item.toUpperCase()) {
        caps.push(index)
      }
    })
  return caps
};



// OTHER SOLUTIONS

// var capitals = function (word) {
//     var caps = [];
//     for(var i = 0; i < word.length; i++) {
//       if(word[i].toUpperCase() == word[i]) caps.push(i);
//     }
//     return caps;
//   };


// var capitals = function (word) {
//     return word.split('').reduce(function(memo, v, i) {
//       return v === v.toUpperCase() ? memo.concat(i) : memo;
//     }, []);
//   };