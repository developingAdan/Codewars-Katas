// Title -- Credit Card Mask

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"



function maskify(cc) {

    if (cc.length < 5) {
      return cc
    }
  
    let newArr = []
  
    let retrieveLastFour = cc.slice(-4)
    let sliced = cc.slice(0, -4)
    let mapped = sliced.split('').map(item => {
      if (item !== '#') {
        newArr.push('#')
      }
    })
  
    let combiningArr = newArr.concat(retrieveLastFour)
  
  
    return combiningArr.join('')
  
  }
  
  console.log(maskify('4556364607935616'))
  console.log(maskify('11111'))
  console.log(maskify('Nananananananananananananananana Batman!'))



// OTHER SOLUTIONS

// return masked string
// function maskify(cc) {
//     var maskedString = "";
//     for(var i = 0; i < cc.length; i++) {
//       if(i < cc.length - 4) {
//         maskedString = maskedString + "#";
//       } else {
//         maskedString = maskedString + cc.charAt(i);
//       };
//     }
//     return maskedString;
//   }
