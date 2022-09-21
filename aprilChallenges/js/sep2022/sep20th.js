// ************************************************
// create a function that takes two arguments. 
//the first argument containing an array of only integers
// a second containing whether to return the lowest value in the array OR the index givens value. 

//     min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

//inside the array set an empty variable to store the lowestValue
//inside the array set an empty variable to store the index value. 

//create a conditional inside the array, 
//if the second argument === 'value'
// use static Math.min, spread out the arr, and return the lowest integer.
//else return the value of the array with the given index passed. 

function min(arr, toReturn) {
    if (toReturn === 'value') return Math.min(...arr)
    return arr.indexOf(Math.min(...arr))
}
