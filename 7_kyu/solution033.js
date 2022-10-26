// Title -- No oddities here
// Category -- Arrays
// Tags -- Arrays, Fundamentals 

// My Solution
function noOdds( values ){
    // Return all non-odd values
    
      let filtered = values.filter((item, index) => item % 2 === 0)
  
      // let filteredd = values.filter((item, index) => {
    //   if (item % 2 === 0) {
    //     return item
    //   }
    // })
    
    // WHY does this ^ not work like the "filtered" declaration above? it will only return [2] instead of [0, 2]
  
      
      return filtered
  }