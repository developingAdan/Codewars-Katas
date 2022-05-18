// Name Shuffler

// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"



// MY SOLUTION
function nameShuffler(str){
    //Shuffle It
    return str.split(' ').reverse().join(' ')
}


// OTHER SOLUTIONS:

// const nameShuffler = str => str.split(' ').reverse().join(' ');