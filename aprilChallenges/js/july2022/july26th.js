const today = new Date
console.log(today)


// function squareDigits(num) {
//     const numArr = num.toString().split('')
//     const returnArr = []
//     numArr.forEach(num => {
//         console.log(num)
//         returnArr.push(+num * +num)
//     })
//     return returnArr.join('')
// }

// console.log(squareDigits(3212))

// --------------------------------------------//

//FizzBuzz -

// return an array, from 1 -> n (param)
//replace certain values. 
//

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// 

// take a number and pass that number into a loop. loop starts at 1 will run to the number specified in our paramater. 
// take the number and check if its multiple 5 and 3! and then if its a multiple of 3, then 5. 
//push to an empty array. 

// function fizzbuzz(n) {
//     const returnArr = []

//     for (let i = 1; i <= n; i++) {
//         if(i % 5 == 0 && i % 3 == 0) {
//             returnArr.push('FizzBuzz')
//         } else if (i % 3 == 0) {
//             returnArr.push('Buzz')
//         } else if (i % 5 == 0) {
//             returnArr.push('Fizz')
//         } else {
//             returnArr.push(i)
//         }
//     }
//     return returnArr
// }

//6kyu: Find the unique number

//given an array with nuymbers, all numbers are equal except for one. Find it. 
//will always be 3 numbers minimum, no floats, all positive. Can change order. return single number. 

// after creating the function, I will then sort the array to align all the numbers. At which point I would compare the first number [0] to the second, [1], if they are different, grab the first num, as the first one is the unique. If they are the same, I would grab the last index as it will be sorted out as the highest number and be the unique. 

function findUniq(arr) {
    const sortedArr = arr.sort()
    if (sortedAr[0] != sortedAr[1]) return sortedAr[0]
    //in place of the below, with new additions, use .at(-1) method
    else return sortedAr[sortedAr.length - 1]
}