// The highest profit wins!

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples(Input --> Output)

// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5, 2334454]
// [1]         --> [1, 1]

// Remarks

// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.


// MY SOLUTION:

function minMax(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    return [min, max]
}


// OTHER SOLUTIONS:

// function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)];
//   }


// function minMax(arr) {
//     var a = arr.sort(function(a,b) {return a-b});
//     return [a[0], a[a.length-1]];
// }