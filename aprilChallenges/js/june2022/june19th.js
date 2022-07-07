const today = new Date
console.log(today)

//7 kyu: find the stray number: 
//PREP: 
//P:
// given an odd length array of integers. all but one are the same. no strings, all in one array, no negatives. always an odd amount
//R:
//return the sinlge element that is different
//E:
// 1, 1, 2 => 2
// 17, 17, 3, 17, 17, 17 => 3
//P:
//looping through the array, checking what number is different by comparing it to the first number. If its the same, we move on and if its different we return it. Since every numb is the same, it won't be too much... 


// function stray(numbers) {
//     const sorted = numbers.sort((a, b) => a - b)
//     if (sorted[0] !== sorted[1]) {
//         return sorted[0]
//     } else {
//         return sorted[sorted.length-1]
//     }
// }

// console.log(stray([17, 17, 17, 17, 3, 17, 17]))

// //refactor: 

// const stray = nums => nums.reduce((a, b) => a ^ b);