// Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


// MY SOLUTION
function highAndLow(numbers){
  
    let splitNum = numbers.split(' ').sort((a, b) => a - b)
  
    let convertToNum = splitNum.map(item => {
      return Number(item)
    })
    
    let n1 = (Math.min(...convertToNum));
    let n2 = (Math.max(...convertToNum));
  
    let convertToStringN1 = String(n1)
    let convertToStringN2 = String(n2)
    return (convertToStringN2 + ' ' + convertToStringN1)
}


// OTHER SOLUTIONS

// function highAndLow(numbers){
//     numbers = numbers.split(' ').map(Number);
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }


// function highAndLow(numbers){
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }
