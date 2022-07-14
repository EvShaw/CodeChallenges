const today = new Date
console.log(today)


// 6kyu: Does my number lok big in this
// const narcissistic = (value) => {
//     let arr = String(value).split('')
//     let valLength = arr.length
//     let sum = arr.map(e => Number(e) ** valLength).reduce((a,b) => a + b, 0)
//     return sum === value
// }

// 6kyu: 

// an array of integers, find the number that appears an odd amount of times. 
//always going to be one number that does appear an odd amount of times. 
// [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] => 5

// sort the array, to iterate over the numbers. 

// compare first number to the second numnber, if it the same, variable count total times a number appears. if that variable value is odd => return

//run nested loop to count how many times a number appears for each og loop iteration. 

// function findOdd(a) {

//     let theNum = 0


//     a.sort().forEach(num => {
//         let count = 0


//         a.sort().forEach(n => {
//            if (n == num) {
//             count++
//            }

//         })
//         if (count % 2 !== 0) {
//             console.log(num)
//             theNum = num
//         }

//     })
//     return theNum
// }

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
// [-1, -1, -2, -2, 1, 1, 2, 2, 20, 20, 3, 3, 4, 4, 5, 5, 5]
// const removeDupes = str => [...str].filter((a, i) => a !== i[i - 1])


