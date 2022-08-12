// Title -- Moving zeros to the end

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {

    let zerosArr = []

    // here i filter out zeros first n array and push them at
    // same time to zeros array..
    arr = arr.filter(item => {
        return item !== 0 ? true : zerosArr.push(item) && false
    })

     // here i combine the zeros array at end of n array
    return arr.concat(zerosArr)
  }

// Other Solution -- should've thought about this one tbh
  var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num){return num !== 0;});
    var zeroList = arr.filter(function (num){return num === 0;});
    return filtedList.concat(zeroList);
  }