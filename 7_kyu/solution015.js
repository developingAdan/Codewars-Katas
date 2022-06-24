// Title -- SpOnGeBoB MeMe

// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

// "Dont use that weird spongebob mocking meme" Me: DonT uSe thAt WeIrd SpoNgEboB MoCkinG MEme

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"


// MY SOLUTION: 

function spongeMeme(sentence) {
    let splitted = sentence.split('')
    console.log(splitted)
    let newArr = []
    
    // splitted.forEach((item, index) => {
    //   if (index % 2 === 0) {
    //     return item.toUpperCase()
    //   } else {
    //     return item.toLowerCase()
    //   }
    // })
    
    // why didn't the code above work?? hmm...
    
    for (i = 0; i < splitted.length; i++) {
      if (i % 2 === 0) {
        console.log(splitted[i].toUpperCase())
        newArr.push(splitted[i].toUpperCase())
      } else {
        console.log(splitted[i].toLowerCase())
        newArr.push(splitted[i].toLowerCase())
      }
    }
    
    return newArr.join('')
}



// OTHER SOLUTIONS:

// function spongeMeme(sentence) {
//     return sentence.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
// } 


// const spongeMeme = sentence => 
//   sentence.split('').map((letter, i) => 
//     i % 2 ? letter.toLowerCase() : letter.toUpperCase()
//   ).join('')
