// // complete the function
// function solution(string) {
//     let splitted = string.split('')

//     let findingIndex = splitted.findIndex(item => {
//         if (item.toUpperCase() === item) {
//             return item
//         }
//     })

//     // let splicingAddingSpace = splitted.splice(findingIndex, 1, ' ')

//     splitted.splice(findingIndex, 0, ' ')
//     let joined = splitted.join('')

//     return joined
//     // return splitted
// }


console.log(solution('camelCasing'))
console.log(solution('camelCasingTest')) 
console.log(solution('identifier'))

function queueTime(customers, n) {
    //TODO

    return [[...customers], n] 

  }

  console.log(queueTime([5, 3, 4], 1))