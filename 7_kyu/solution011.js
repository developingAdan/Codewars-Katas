// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

// NOTES

//     Vowels in this context refers to: a e i o u y (including upper case)
//     This is indexed from [1..n] (not zero indexed!)




// MY SOLUTION:
function vowelIndices(word){
    //your code here
    
    let trying = word.toLowerCase().split('')
    let tryingg = trying.unshift('-1')
    console.log(trying)
    // let trying = word.toLowerCase().split('')
    // // return trying
    let indexArr = []
    
    for (i = 1; i < trying.length; i++) {
      console.log(trying[i])
      console.log(i)
      
      if (trying[i] === 'a' || trying[i] === 'e' || trying[i] === 'i' || trying[i] === 'o' || trying[i] === 'u' || trying[i] === 'y') {
        indexArr.push(i)
      }
      // return indexArr
    }
    
    return indexArr
      
  }


  // OTHER SOLUTIONS

//   function vowelIndices(word) {
//     var arr = [];
//     for(var i = 0; i < word.length; i++) {
//       if(/[aeioyu]/i.test(word[i])) {
//         arr.push(i+1);
//       }
//     }
//     return arr;
//   }


//     function vowelIndices(word,a=[]){
//     return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
//   }