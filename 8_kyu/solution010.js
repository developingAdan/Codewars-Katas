// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */

// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */


// MY SOLUTION:
function toBinary(n){
    return Number(n.toString(2));
  }

// I used this because I know the .toString(2) method converts any number to its binary format, but in a string. So I used Number to wrap around the return statement to convert the string to a number. 





// OTHER SOLUTIONS:

// let toBinary = n => +n.toString(2)



// toBinary = (n) => parseInt(n.toString(2));



// function toBinary(n){
//     return +n.toString(2);
//   }