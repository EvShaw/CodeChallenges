
//***************************************************************

// @298:
// reverse list order.

// take an array, and reverse it. could easily be done with .reverse method. but, stepping it up, map would be more fun.
//create a function that accepts an array.
// map the array with all of the methods callbacks. look at the array with an index of length, minus the index being mapped, minus 1 for zero based counting:

// function reverseList(list) {
//     return list.map((el, ind, arr) => arr[arr.length - ind - 1])
// }

// console.log(reverseList([1, 2, 3, 4]))

//***************************************************************
// @297
//Multiplication table for number

// return a multiplication table for number argument passed into the function.
// create a function that accepts a number from 1 to 10, return the multiplication table for that number.

//ex:
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

// within the function, open a loop that iterates the amount passed in. With each iteration, push to an array a string that lists out the multiplication table.

// function multiTable(number) {
//     let numArr = []

//       for(let i = 1; i <= 10; i++) {
//         if(i < 10) numArr.push(`${i} * ${number} = ${i*number}\n`)
//            else numArr.push(`${i} * ${number} = ${i*number}`)

//       }

//       return numArr.join('')
//   }

//***************************************************************
// @296
// invert values

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// PARAMETERS:
// given a number, positive or negative, retrun the inverted number. No other inputs other than numbers. No decimals, can be 0.
//return an array.
// inside the function, check if the number is positive or negative.
// could use Math.sign, conditional range,
// if the number is positive, push its invert to a new array, once done
//if using a loop, return the arr after completed. otherwise, with map mathod, it is returned.

// function invert(array) {
//     return array.map( num => num*-1)
// }

// //const invert = array => array.map( num => num*-1)
// //const invert = array => array.map( num => -num)

// console.log(invert([1,2,3,4,5]))
// console.log(invert([1,-2,3,-4,5]))
// console.log(invert([]))

//***************************************************************
// @295
// Pythagorean Triple:

// given an array of 3, non-negative integers, a, b, and c, determine if they form a pythagorean triple.
// c^2 = a^2 + b^2
//whereas C is the largest value of a, b, and c.
// a = 3(9), b = 4(16), c = 5(25) => 25 = 16 + 9

//if a, b, and c form a pythagorean triple return true, of not return false.

// inside the function, determine the highest number by capturing and sorting the array passed in with a callback to ensure we sort in descending order and not have to worry about lexicographical sorting.. grab the highest array, numArr[0], and set as a.
//if a squared = b(2) + c(2) return true. else return false.
//

// function isPythagoreanTriple(integers) {
//     let sortedArr = integers.sort((a, b) => b - a)

//     let a = Math.pow(sortedArr[0], 2)
//     let b = Math.pow(sortedArr[1], 2)
//     let c = Math.pow(sortedArr[2], 2)

//     if (c + b == a) return true
//     else return false
// }

// console.log(isPythagoreanTriple([3, 4, 5]))