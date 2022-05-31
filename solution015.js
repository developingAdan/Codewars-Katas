// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.



// MY SOLUTION
function addLength(str) {
    //start-here
      let arr = []
      
       let splitStr = str.split(' ')
      console.log(splitStr)
      let stringLength = splitStr.length
      console.log(stringLength)
      splitStr.forEach((item, index) => {
        arr.push(item + ' ' + item.length)
      })
       return arr
}


// OTHER SOLUTIONS

// function addLength(str){
//     return str.split(' ').map(function(v){return v+' '+v.length})
// }

// function addLength(str){
//     return str.split(" ").map(s => `${s} ${s.length}`)
//   }
