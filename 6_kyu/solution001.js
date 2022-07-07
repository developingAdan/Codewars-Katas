function solution(number){
    let multiplesOf3Or5 = []
    let multiplesOfBoth = []
  
    for (i = 0; i < number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        multiplesOfBoth.push(i)

      } else if (i % 3 === 0 || i % 5 === 0) {
        multiplesOf3Or5.push(i) 
      }
    }
  
    let reduced = multiplesOf3Or5.reduce((acc, currentVal) => {
      return acc + currentVal}, 0)
  
    let reduced2 = multiplesOfBoth.reduce((acc, currentVal) => acc + currentVal, 0)
  
    const added = reduced + reduced2
    
    if (added < 0) {
        return 0;
    } else {
        return added
    }
  }