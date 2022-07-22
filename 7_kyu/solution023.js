// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
    //your code here
    let splitted = dna.split('')
    let newArr = []
    
    // for (i = 0; i < splitted.length; i++) {
    //   if (splitted[i] === 'A') {
    //     newArr.push('T')
    //   } else if (splitted[i] === 'T') {
    //     newArr.push('A')
    //   } else if (splitted[i] === 'G') {
    //     newArr.push('C')
    //   } else if (splitted[i] === 'C') {
    //     newArr.push('G')
    //   }
    // }
  
  
    // using .forEach() here instead of forLoop
    splitted.forEach(item => {
      if (item === 'A') {
        newArr.push('T')
      } else if (item === 'T') {
        newArr.push('A')
      } else if (item === 'G') {
        newArr.push('C')
      } else if (item === 'C') {
        newArr.push('G')
      }
    })
  
    return newArr.join('')
}


// OTHER SOLUTIONS

// function DNAStrand(dna) {
//     return dna.replace(/./g, function(c) {
//       return DNAStrand.pairs[c]
//     })
// }
  
//   DNAStrand.pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
// }

// edited this i swear im coding today!!
// var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }