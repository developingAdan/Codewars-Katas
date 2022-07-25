// Title -- CamelCase Method

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// Don't forget to rate this kata! Thanks :)


// MY SOLUTION
String.prototype.camelCase = function () {
    let splitted = this.split(' ');
  
    let mapped = splitted.map((item, index) => {
    if (item[0] === undefined) {
      return ''
    }

    let flattened = [item[0].toUpperCase(), item.substring(1)].join('')
      return flattened
    })  
    return mapped.join('')
}


// OTHER SOLUTIONS

// String.prototype.camelCase=function(){
//     return this.split(' ').map(function(word){
//      return word.charAt(0).toUpperCase() + word.slice(1);
//    }).join('');
// }

