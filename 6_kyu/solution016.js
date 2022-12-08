// Title -- Coding Meetup #7 -- Higher Order Functions -- Find the most senior developers
// Category -- Arrays
// Tags -- Functional Programming, Data Structures, Arrays, Fundamentals, Algorithms, Strings

// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];

// your function should return the following array:

// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]

// Notes:

//     The input array will always be valid and formatted as in the example above and will never be empty.


// My Solution
function findSenior(list) {

    let sorted = list.sort((firstItem, nextItem) => {
      if (firstItem.age > nextItem.age) {
        return -1
      } else {
        return 1
      }
      
    })
  
    let newArr = []
    let count = 0
    for (i = 0; i < sorted.length; i++) {
      console.log(sorted[i].age)
  
      if (sorted[i].age === sorted[0].age) {
        count++
      }
    }
  
    return sorted.slice(0, count)
  }

// Other Solutions

function findSenior(list) {
    var maxAge = Math.max(...list.map(person => person.age));
    return list.filter(person => person.age === maxAge);
  }


  const findSenior = list =>
  list.filter(val => val.age === Math.max(...list.map(val => val.age)));