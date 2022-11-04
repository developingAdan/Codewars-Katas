// Title -- Most Number of times a Number is in Array
// Category -- Arrays
// Tags -- Arrays, Fundamentals

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


// My Solution

function highestRank(arr){
    //Your Code logic should written here
      let creatingObj = arr.reduce((accum, currentVal) => {
        if (!accum[currentVal]) {
          accum[currentVal] = 0
        }
        accum[currentVal]++
  
        return accum
      }, {})
  
      let arrr = []
      for (const item in creatingObj) {
        // console.log(`${creatingObj[item]}`)
        // console.log(`${item}: ${creatingObj[item]}`)
        arrr.push([item, creatingObj[item]])
      }
  
      // you can use Object.entries() to convert the object into an array as well. Instead of pushing values into a new arr, as shown above 
      const creatingArr = Object.entries(creatingObj)
      // return creatingArr
  
     
      let sorting = creatingArr.sort((firstItem, nextItem) => {
        return firstItem[1] - nextItem[1]
      })
      let gettingResult = sorting.pop()[Number(0)]
      return Number(gettingResult)
  
    }


// Other Solutions

function highestRank(arr){
    var high,max=0,rec={}
    for(var x of arr){
      rec[x]=(rec[x]||0)+1
      if(rec[x]>max){
        max=rec[x]
        high=x
      }
    }
    return high
  }


  function highestRank(arr){
    return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
  }
