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

// console.log(count('aba'))


// OTHER SOLUTIONS

// function count (string) {  
//     var count = {};
//     string.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
//   }


function wave(str) {
    // Code here
    let splitted = str.split('')
    let arr = []
    let otherArr = []

    for (i = 0; i < splitted.length; i++) {
        if (splitted[i].toUpperCase() !== splitted[i]) {
            arr.push(splitted[i].toUpperCase())
        }
    }

    
    let doingTheThing = arr.toString().replace(/,/g, '').substring(0, arr.length).toLowerCase()

    return doingTheThing

}
  console.log(wave('hello'))

  const teams = ['Denver Broncos', 'New York Jets', 'Dallas Cowboys', 'Seattle Seahawks']

  console.log(teams.sort())


  const numbers = [1, 5, 33, 71, 201, 8]

  const numSorted = numbers.sort((a, b) => a - b)

  console.log(numSorted)