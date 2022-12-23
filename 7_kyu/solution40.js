// Title -- Absent Vowel
// Tags -- Arrays, Strings

// Your job is to figure out the index of which vowel is missing from a given string:

//     A has an index of 0,
//     E has an index of 1,
//     I has an index of 2,
//     O has an index of 3,
//     U has an index of 4.

// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.
// Examples

// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"



// My Solution
// I wanted to used the 'vowels' string to somehow match or 'check' if a vowel is included in the parameter passed in. Definitely can make this more efficient. 
function absentVowel(x) {
    let vowels = 'aeiou'
    // return [...vowels]
    let lowerCased = x.toLowerCase()

    if (!lowerCased.includes('a')) {
        return 0
    } else if (!lowerCased.includes('e')) {
        return 1
    } else if (!lowerCased.includes('i')) {
        return 2
    } else if (!lowerCased.includes('o')) {
        return 3
    } else if (!lowerCased.includes('u')) {
        return 4
    }
}


// Other Solutions

function absentVowel(x) {
    var vowels = 'aeiou';
    for (var i in vowels) {
      if (x.toLowerCase().indexOf(vowels[i]) == -1) {
        return Number(i);
      }
    }
}

function absentVowel(x){
    switch(-1)
    {
      case x.split('').indexOf('a'): return 0;
      case x.split('').indexOf('e'): return 1;
      case x.split('').indexOf('i'): return 2;
      case x.split('').indexOf('o'): return 3;
      case x.split('').indexOf('u'): return 4;
    }
}

const absentVowel = string =>
  [...'aeiou'].findIndex(letter => !string.includes(letter))