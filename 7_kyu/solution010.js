// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// MY SOLUTION:
function descen(num) {
    let numb = num.toString().split('')
    let sorted = numb.sort((firstItem, nextItem) => firstItem < nextItem ? 1 : -1)
  
    let convertToNum = sorted.map(item => Number(item))
    let yo = Number(convertToNum.join(''))
  
    return yo
}


// OTHER SOLUTIONS:

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}


function descendingOrder(n){
    return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}