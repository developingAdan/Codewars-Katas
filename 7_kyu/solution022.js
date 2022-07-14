// Title -- Odd-Even String Sort

// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces

// input: 'CodeWars'

// output 'CdWr oeas'


// MY SOLUTION
function sortMyString(s) {
    let splitted = s.split('')
    let evenNumsIndex = splitted.filter((item, index) => index % 2 === 0 && item)
    let oddNumsIndex = splitted.filter((item, index) => index % 2 !== 0 && item)

    evenNumsIndex.push(' ')
    let joinedEven = evenNumsIndex.join('')
    let joinedOdd = oddNumsIndex.join('')

    let finalResult = joinedEven.concat(joinedOdd)

    return finalResult
}


// OTHER SOLUITIONS

// const sortMyString = s => {
//     let even = s.split('').filter((v, i) => i % 2 === 0).join('')
//     let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
//     return even + ' ' + odd
// }