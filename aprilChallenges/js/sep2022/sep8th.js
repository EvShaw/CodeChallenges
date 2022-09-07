//***************************************************************
//@241:Sum of differences in array

// sum the differences between consecutive pairs in the array in descending order: 

//within the array, sort into descending order (b-a) before reducing. 
//append reduce method, with four arguments: acc, curr, index, and array. 
//create a variable to store the array[index + 1]
//open a conditional, if curr - next is NOT NaN
//acc += curr - next. 
// returnn acc. 
//start from zero.


// const sumOfDifferences = arr => {
//     return arr
//       .sort((a, b) => b - a)
//       .reduce((acc, curr, index, array) => {
//         const next = array[index + 1];
//         if (!isNaN(curr - next)) {
//           acc += curr - next;
//         }
//         return acc;
//       }, 0);
//   }

// function sumOfDifferences(arr) {
//     return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }

// console.log(sumOfDifferences([2, 1, 10]))
// console.log(sumOfDifferences([-3, -2, -1]))

//***************************************************************
//@240: SpeedCode #2 - Array Madness

//inside function, map each element from the first array to get its squared value. 
//map each element from the second array to get its cubed value. 

//sum the first arr with reduce method
//sum the second arr with reduce method

//if sum of squared array is greater than sum of cubed arr, return true. 

function arrayMadness(a, b) {
    const squared = a.map(num => num**2).reduce((pre, cur) => pre + cur)
    const cubed = b.map(num => num**3).reduce((pre, cur) => pre + cur)

    if(squared > cubed) return true
    else return false
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]))