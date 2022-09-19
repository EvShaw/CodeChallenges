const today = new Date
console.log(today)

// ****************************************************
//flatten and sort an array: 

// given an array of integers, return the flattened version with all the integers in sorted (ascending) order. 
// [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], =>  [1, 2, 3, 4, 5, 6, 7, 8, 9]


//inside the funtion, create an empty array to capture all the numbers in the seperated arrays. 
//run an outside loop, loopover each element inside the arr. 
//run a nested loop pushing each element in each array into the empty array. 
//return the new arr, with it sorted in ascending order

function flattenAndSort(array) {
    const newArr = []
    array.forEach((el, i, arr) => {
        el.forEach(num => {
            newArr.push(num)
        })
    })
    return newArr.sort((a, b) => a - b)
}

//One liner: 
//  return [].concat(...array).sort((a,b) => a - b); //create an array literal with the contact method appended. Passing in the spread syntax and spreading out every element of the array. Then sort it and return

//use flat() method: 
// const flatten = arr => arr.flat().sort((a, b) => a - b)
// the flat method creates a new array with all sub-arrays elements concatenated into it recursively, up to the specified depth.  

console.log(flattenAndSort([[], []]))
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))