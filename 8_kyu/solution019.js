// Enumerable Magic #25 -- Take the First N Elements

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
    return arr.slice(0, n);
}

// OTHER SOLUTIONS

// let take = (arr, n) => arr.slice(0, n);

// const take = (a, n) => a.slice(0, n);