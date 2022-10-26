// Title -- Incrementer
// Category -- Arrays, Numbers
// Tags -- Fundamentals

// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.
// Notes:

// return an empty array if your array is empty
// arrays will only contain numbers so don't worry about checking that

// My Solution
function incrementer(nums) {
    let newArr = []
    for (i = 0; i < nums.length; i++) {
      nums[i] = nums[i] + i+1;
      newArr.push(nums[i])
    }
  
  let newerArr = []
    newArr.forEach((item, index) => {
      if (item > 9) {
        let slicedItem = item.toString().slice(1)
        
        console.log(`sp item is -- ${slicedItem}`)
        newerArr.push(item.toString().split('')[1])
      } else {
        newerArr.push(item)
      }
    })
  
  let mappingToNumbers = newerArr.map((item, index) => {
    return Number(item)
  })
  return mappingToNumbers
  }

// Other Solutions

function incrementer(num) { 
    return num.map((a,i) => (a+i+1)%10);
  }

function incrementer(num) { 
    var arr=[];
    for (var i=0; i<num.length; ++i)
      arr.push((num[i]+i+1)%10)
    return arr;
  }