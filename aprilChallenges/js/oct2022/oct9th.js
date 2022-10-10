const today = new Date;
console.log(today.toLocaleDateString())
console.log(today.toLocaleTimeString())

// given an array of integers, retrun one of the following: 
//yes, ascending - if numbers in the array are sorted in an ascending order.
//yes, descending - if number in the array are sorted in a descending order.
// no  - other wise. 

// array will always be valid, will always be on correct answer. always integers in an array. 
// return a string based on that array. 


// check if ascending or descending. 
// create a binding that filters over the array. 
    // calling three paramaters, element, index, and array. 
        // ascending: 
            // check if the element is greater than the array, index + 1. legnth == 0
        // descending: 
                // check if the element is less than the array, index + 1. legnth == 0

// with a ternary, check if ascending is truthy, if not, chain a ternary and check if descending is truthy, return no if not. 

function isSortedAndHow(array) {
    let ascending = array.filter((e, i, a) => e > a[i+1]).length == 0

    let descending = array.filter((e, i, a) => e < a[i+1]).length == 0

    return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'

}

console.log(isSortedAndHow([15, 7, 3, -8]))
console.log(isSortedAndHow([-8, 3, 7, 15]))