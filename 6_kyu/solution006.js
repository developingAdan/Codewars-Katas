// Title -- Count characters in your string

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// MY SOLUTION
function count(string) {  
    // The function code should be here
    let splitted = string.split('')

    let reduced = splitted.reduce((accum, currentVal) => {
        if (!accum[currentVal]) {
            accum[currentVal] = 0;
        }
        accum[currentVal]++;
        return accum
    }, {})

    return reduced
  }

console.log(count('aba'))


// OTHER SOLUTIONS

// function count (string) {  
//     var count = {};
//     string.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
//   }