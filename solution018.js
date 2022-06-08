// MY SOLUTION:
function getDrinkByProfession(param){

    let str = param.toLowerCase();
    
    switch (str) {
        case 'jabroni':
          return 'Patron Tequila'
          break;
        
        case 'school counselor':
          return 'Anything with Alcohol'
          break;
        
        case 'programmer':
          return 'Hipster Craft Beer'
          break;
        
        case 'bike gang member':
          return 'Moonshine'
          break;
        
        case 'politican':
          return 'Your tax dollars'
          break;
        
        case 'rapper':
          return 'Cristal'
          break;
        
        default:
          return 'Beer'
          break;
    }
    
}


// OTHER SOLUTIONS:

// const drinks = {
//     "jabroni": "Patron Tequila",
//     "school counselor": "Anything with Alcohol",
//     "programmer": "Hipster Craft Beer",
//     "bike gang member": "Moonshine",
//     "politician": "Your tax dollars",
//     "rapper": "Cristal"
// }
  
// const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"


// function getDrinkByProfession(param){
//     let map = new Map([
//         ["jabroni", "Patron Tequila"],
//         ["school counselor", "Anything with Alcohol"],
//         ["programmer", "Hipster Craft Beer"],
//         ["bike gang member", "Moonshine"],
//         ["politician", "Your tax dollars"],
//         ["rapper", "Cristal"]
//         ]);
        
//      let normal = param.toLowerCase();
//      return map.has(normal) ? map.get(normal) : "Beer";
// }