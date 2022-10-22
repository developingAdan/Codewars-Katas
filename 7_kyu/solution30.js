// Title -- Bumps in the Road
// Category -- Strings
// Tags -- Fundamentals, Strings

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

// My Solution
function bump(x){

    let splitted = x.split('')
    let count = 0
    splitted.forEach((item, index) => {
      if (item === 'n') {
        count++
      }
    })

    // console.log(count)

    return count > 15 ? 'Car Dead' : 'Woohoo!'

    // if (count > 15) {
    //   return 'Car Dead'
    // } else {
    //   return 'Woohoo!'
    // }

  }


// Other Solutions

function bump(x){
    return (x.match(/n/g) || []).length > 15 ? "Car Dead" : "Woohoo!";
  }



  function bump(str)
{
  return str.replace(/_/g, "").length > 15 ? "Car Dead" : "Woohoo!";
}