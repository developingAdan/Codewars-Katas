// Title: Who likes it?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

// MY SOLUTION:
function likes(names) {
  
    if (names.length === 0) {
      return `no one likes this`
    }
    
    let numOfUsersLiked = names.length - 2;
    // console.log(numOfUsersLiked)
  
    for (i = 0; i < names.length; i++) {
      if (names.length < 2) {
        return `${names[0]} likes this`
      } else if (names.length < 3) {
        return `${names[0]} and ${names[1]} like this`
      } else if (names.length < 4) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
      } else {
        return `${names[0]}, ${names[1]} and ${numOfUsersLiked} others like this`
      }
  
    }
  }
  

// OTHER SOLUTIONS:

// function likes(names) {
//     names = names || [];
//     switch(names.length){
//       case 0: return 'no one likes this'; break;
//       case 1: return names[0] + ' likes this'; break;
//       case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//       case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//       default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
//   }


// function likes(names) {
//     return {
//       0: 'no one likes this',
//       1: `${names[0]} likes this`, 
//       2: `${names[0]} and ${names[1]} like this`, 
//       3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
//       4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
//     }[Math.min(4, names.length)]
//   }


// function likes (names) {
//     var templates = [
//       'no one likes this',
//       '{name} likes this',
//       '{name} and {name} like this',
//       '{name}, {name} and {name} like this',
//       '{name}, {name} and {n} others like this'
//     ];
//     var idx = Math.min(names.length, 4);
    
//     return templates[idx].replace(/{name}|{n}/g, function (val) {
//       return val === '{name}' ? names.shift() : names.length;
//     });
//   }