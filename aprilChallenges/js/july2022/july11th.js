const today = new Date
console.log(today)

// 8kyu: Convert Boolean to strings: y || n

// given a string, return a boolean value (yes or no) based on what was passed.
// create a function: 
// ternary that will return yes if true and no if false

// function boolToWord( bool ) {
//     bool === true ? "Yes" : 'No'
// }

//7 kyu: Numbers with this digit inside: 

// seach all numbers from inclusive 1 to inclusive a given number x, that give the digit d in it.

// the value of d will always be 0 - 9
// the value of x will always be greater than 0

//return as an array: 
//the count of the numbers
// the sum
// their product. 



// x = 11
// d = 1
// numbers: 1, 10, 11   
// -> 3, 22, 110

// (44,4), [ 9, 286, 5955146588160 ])
// 0 -> x //44
// 4 -> 

// the count && the sum && their product

// after creating the function, using a for loop, run through each number. If it is divisible by iteself, increase a count


// const numbersWithDigitInside = (x, d) => {
//     let count = 0
//     let sum = 0
//     let product = 1
//     for (let i = 1; i <= x; i++) {
//         if (`${i}`.includes(d)) {
//             count++
//             sum += i
//             product *= i
//         }
//     }
//     return count === 0 ? [0, 0, 0] : [count, sum, product]
// }

// const numbersWithDigitInside = (x, d) => {
//     const nums = []

//     dStr = d.toString()

//     for (let i = 1; i <= x; i++) {
//         if (i.toString().includes(dStr)) {
//             nums.push(i)
//         }
//     }

//     let sum = nums.reduce((acc, value) => acc + +value, 0)
//     let product = nums.length > 0 ? nums.reduce((acc, value) => acc * +value, 1) : 0
//     return[nums.length, sum, product]
// }

// console.log(numbersWithDigitInside(20, 0))
// console.log(numbersWithDigitInside(44, 4))


// let nums = [],
// dStr = d.toString();
// for (let i = 1; i <= x; i++) {
// if (i.toString().includes(dStr)) {
//     nums.push(i);
// }
// }
// let sum = nums.reduce((ac, val) => ac + val, 0),
// product = nums.length > 0 ? nums.reduce((ac, val) => ac * val, 1) : 0;
// return [nums.length, sum, product];

// 5kyu: Rot13

// Given a string, go through the str and replace each letter with the letter 13 places after it. Letters only. Any numbers or symbols should remain as is. 

// taking in the string, split it so that we can then use the CharAt method and one, check that its a letter and two find the letter that comes 13 places after it. iterating over each letter in the array. If not a letter, than return it as is. Also, keep character format in place for how we receive the string(uppercase and lowercase)


// function rot13(message) {
//     let strArr = message.split('')

//     //convert from letter to character code and push to new array

//     const newArr = []
//     strArr.forEach(letter => {
//         newArr.push(letter.toString().charCodeAt())
//     })

//     console.log(newArr)
//     //iterate over newArr and add 13 to each total. If it goes above 122, cycle back down to 97 if lower case or down to 65 for uppercase. 

//     const numArr = []

//     newArr.forEach(num => {
//         let totalNum = num + 13

//         //lowerCase -
//         if (totalNum > 122) {
//             let newTotal = (totalNum - 122) + 97
//             numArr.push(newTotal)
//         } else {
//             numArr.push(num)
//         }
//     })

//     const newStr = []

//     numArr.forEach(num => {
//         newStr.push(String.fromCharCode(num))
//     })

//     console.log(newStr)
// }

// rot13("test")


// //lowercase = 97-122
// // uppercase = 65 - 90

// function rot13(message) {
//     let newStr = message.split('').map(char => String.fromCharCode(
//         char.charCodeAt(0) + (char.toLowerCase() < 'n' ? 13 : -13))).join('')
//     return newStr
// }

const rot13 = str => str.split('')
    .map(char => String.fromCharCode(
        char.charCodeAt(0) + (char.toLowerCase() < 'n' ? 13 : -13)))
    .join('');
console.log(rot13("test"))