const today = new Date
console.log(today.toLocaleString())

// given two arrays, convert each array into a single integer, and sum them together. Then split back into individual elements and return as an array of integers. 
//if the first number of the array is negative, treat the whole array once joined as negative

// convert both arrays into single integers and sum. Convert back to strings and turn the single integer into a new array. 
//if the totalArr equals 0, return an empty array. 
// check if the first element of the array is a '-'. 
    //if so, shift it out of the array, convert the array to number and multiply by -1. 
//map over the totalArr and convert each string into an array that contains integers and return as such. 
//if no negative, convert the integer to an array by mapping over and convert each element into a number. 

function addArrays(array1, array2) {
    let totalArr = (+array1.join('') + +array2.join('')).toString().split('')

    if (totalArr == '0') return []

    if (totalArr[0] === '-') {
        totalArr.shift()

        totalArr[0] = +totalArr[0] * -1

        return totalArr.map(num => +num)
    }

    return totalArr.map(num => +num)
}

console.log(addArrays([3, 2, 6, 6], [-7, 2, 2, 8])) //3962