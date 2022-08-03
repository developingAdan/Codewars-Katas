// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array

// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// MY SOLUTION
// Return the output array, and ignore all non-op characters
function parse (data) {
    let splitted = data.split('')

    let numsArr = []
    let count = 0;

    splitted.forEach(item => {
        // let count = 0
        if (item === 'i') {
            count++
            console.log(`yoo is ${count}`)

        } else if (item === 'd') {
            count--
            console.log(`yoo is ${count}`)
        } else if (item === 's') {
            count = Math.pow(count, 2)
            console.log(`squared count is ${count}`)
        } else if (item === 'o') {
            numsArr.push(count)
        }
    })
    return numsArr
}


// OTHER SOLUTIONS

// this solution is interesting as it's kinda like what I did, except just using the .reduce method. Nice\

// function parse(data) {
//     let res = [];
  
//     data.split('').reduce((cur, s) => {
//       if (s === 'i') cur++;
//       if (s === 'd') cur--;
//       if (s === 's') cur = Math.pow(cur, 2);
//       if (s === 'o') res.push(cur);
      
//       return cur;
//     }, 0);
    
//     return res;
//   }



//var map = {
//     'i' : function(x){return x + 1;},
//     'd' : function(x){return x - 1;},
//     's' : function(x){return x * x;}
//   }
  
//   function parse( data )
//   {
//     var array = [], val = 0;
//     data.split('').forEach(function(x){
//       if(x === 'o'){
//         array.push(val); 
//       } else {
//         val = map[x](val);
//       }
//     });
//     return array;
//   }