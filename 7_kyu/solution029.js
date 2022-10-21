// Title -- Greet Me
// Category -- Strings, Fundamentals

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// My Solution
var greet = function(name) {
    let toLowerCaseWord = name.toLowerCase();

    // return toLowerCaseWord
    let firstChar = name[0].toUpperCase();
    let splitted = toLowerCaseWord.split('')
    splitted.splice(0, 1, firstChar)


    return 'Hello ' + splitted.join('') + '!'
  };