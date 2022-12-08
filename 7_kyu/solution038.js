// Title -- Love vs Friendship
// Tags -- Fundamentals, Strings

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.


// My solution
function wordsToMarks(string){
    //your code here
    let alphab = '1abcdefghijklmnopqrstuvwxyz'
    let count = 0;
  
      for (i = 1; i <= alphab.length; i++) {
          // console.log(alphab[i])
          for (k = 0; k < string.length; k++) {
              if (string[k] === alphab[i]) {
                  count += i
              }
          }
      }
      return count
  }

// Other Solutions

function wordsToMarks(str)
{
  var sum = 0;
  for (let i = 0; i < str.length; i++)
    sum += str.charCodeAt(i) - 96;
  return sum;
}