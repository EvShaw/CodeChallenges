const today = new Date
console.log(today)

// 8Kyu: convert
//  const numToStr = n => String(n)
//  const numToStr = n => n.toString()

//7kyu: Sum nums

// PREP
//P:
// given 2 numbers (positive and negative), find the sum of all the integers between them including the numbers themselves. If the same, return a or b. 
//no strings or symbols. Can be any whole number
//R:
// return the total sum 
//E:
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//P:
//create the funciton, and then an if statement, if the numbers are the same, return one of them. If not the same, then move on to else statement... 
//create a loop, starting with the lowest integer and looping to the highest integer. Adding to a variable called sum with each loop:

// function getSum(a, b) {
//     let sum = 0
//     let start;
//     let end;
//     if (a == b) {
//         return a
//     } 

//     if (a > b) {
//         start = b
//         end = a
//     } else {
//         start = a
//         end = b
//     }
//     for (let i = start; i <= end; i++) {
//         sum += i
//     }
//     return sum

// }

// console.log(getSum(0, 2))

//refactor: 

// const getSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
//   }

// console.log(getSum(0, 2))

