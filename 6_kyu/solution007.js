// Title -- Valid phone number

// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false


function validPhoneNumber(phoneNumber){
    //TODO: Return whether phoneNumber is in the proper form
    
     if (phoneNumber.length === 14 && phoneNumber[9] === '-') {
        return true
      } else {
        return false
    }
  }


// OTHER SOLUTIONS

function validPhoneNumber(str) {

    if (str.length !== 14) {
      return false;
    }
    if (str[4] !== ")") {
      return false;
    }
    if (str[5] !== " ") {
      return false;
    }
    if (str[9] !== "-") {
      return false;
    } else {
      return true;
    }
  }

  // this one is definitely best practice as it checks if the parantheses, space, and dash are in the correct places