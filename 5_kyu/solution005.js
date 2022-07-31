// Title -- Extract the domain name from the URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


// MY SOLUTION -- wow. after looking at OTHER solutions, this code is completely all over the place :/ I will get better!
function domainName(url){
    //your code here
    let splitted = url.split('')
  
    if (splitted[3] === 'p') {
  
      if (splitted[4] === 's') {
        let replacingHTTP = url.replace(/https:/g, '')
        let splitted2 = replacingHTTP.split('')
  
        if (splitted2[2] === 'w') {
          splitted2.splice(0, 6)
  
          let findingIndexofDot = splitted2.findIndex(item => item === '.')
          splitted2.splice(findingIndexofDot, Infinity)
    
          return splitted2.join('')
          
        } else {
          splitted2.splice(0, 2)
  
          let findingIndexofDot = splitted2.findIndex(item => item === '.')
          splitted2.splice(findingIndexofDot, Infinity)
  
          return splitted2.join('')
            }
        }
  
    let replacingHTTP = url.replace(/http:/g, '')
    let splitted2 = replacingHTTP.split('')
    splitted2.splice(0, 2)
    
      if (splitted2[0] === 'w') {
        splitted2.splice(0, 4)
        let findingIndexofDot = splitted2.findIndex(item => item === '.')
        splitted2.splice(findingIndexofDot, Infinity)
        return splitted2.join('')
        } 
  
    let findingIndexofDot = splitted2.findIndex(item => item === '.')
    splitted2.splice(findingIndexofDot, Infinity)
  
    return splitted2.join('')
  
    } else if (splitted[3] === '.') {
      let replacingHTTP = url.replace(/w/g, '')
      let splitted2 = replacingHTTP.split('')
      splitted2.splice(0, 1)
      
      let findingIndexofDot = splitted2.findIndex(item => item === '.')
      splitted2.splice(findingIndexofDot, Infinity)
      return splitted2.join('')

    } else {
  
      let findingIndexOfDot = splitted.findIndex(item => item === '.')
      splitted.splice(findingIndexOfDot, Infinity)
      return splitted.join('')
    }
  }


// OTHER SOLUTIONS

// this one seems to be efficient and working well
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };


//   function domainName(url){
//     return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
//   }