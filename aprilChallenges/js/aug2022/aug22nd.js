const today = new Date
console.log(today)

//Clear all 8's
//@ 1 of 13 - 306

//create a function that checks if the string is all uppercase or not, return a boolean. 
// split the string, allowing one to iterate over it. 
// with a loop, check if the element passed is uppercase or lower case. 
// could be done with charCodeAt method as well as with triple equals. 
//if any of the letters are lowercase, return false, otherwise return true.

// String.prototype.isUpperCase = function () {
//     // this.split('').forEach(el => {
//     //     if(el === el.toLowerCase()) return false
//     //     else return true
//     // }) 
//     return String(this) === this.toUpperCase();
// }

// console.log('EVAN'.isUpperCase())

// String.prototype.isUpperCase = function () {
//     return String(this) === this.toUpperCase()
// }

//@ 2 of 13 - 305
//create a function that takes two arguments and returns all numbers (array - first argument) which are dividsile by the divisor(2nd argument). 

//create a function that accepts two arguments, one an array and another a divisor. Return an array with all the numbers that are divisible by the divisor. 
// looping over numbers, check if the element % divisor == 0. If true push into a new arr

// function divisibleBy(numbers, divisor) {
//     const arr = []

//     numbers.forEach(el => {
//         if (el % divisor == 0) {
//             arr.push(el)
//         }
//     })
//     return arr
// }
// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))

//refactor with filter

// const divisibleBy = (num, div) => num.filter(n => n % div == 0)
// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))

//@ 3 of 13 - 304
//create a function that accepts two arguments, name and price. Price has a default value of 30 
//find the costs of the ad based on the number of characters. 
// break the name argument into an array with the split() method. 
//iterate over that array, calculating the cost of each letter without using the * operator. 

// function billboard(name, price = 30) {
//     const arr = name.split('')
//     sum = 0
//     arr.forEach(el => {
//         sum += price
//     })
//     return sum
// // } 
// console.log(billboard([]))

//refactor: 

// const billboard = (name, price) => {
//     sum = 0
//     name.split('').forEach(el => {
//         sum += price
//     })
// }
// console.log(billboard([]))

//@ 4 of 13 - 303


//****************************************************************
//Total daily goal: 13.
//Currently completed: 3/13