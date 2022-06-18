const today = new Date
console.log(today)


// 8 kyu: Abbreviate a Two Word Name

// PREP: 
//P:
//given a combination of two names, always a stinrg. Lower case and upper. Can be one letter in first name or second. 
//R:
// return the first initial fo both names seperated by a .
//E:
//Evan Shaw => E.S
//Bruce Wayne => Batman
//P:
// passing the string into a variable and splitting it into an array, then itterating over the array with a loop (for of, forEach) return the first letter of each name. Pushing these letters into a new array I can then splice the period in before returning it with upperCase method. 


// function abbrevName(name){
//     const nameArr = name.split(' ')
//     const newArr = []
//     nameArr.forEach(name => {
//       newArr.push(name[0])
//     })
//     newArr.splice(1, 0, '.')
//     return newArr.join('').toUpperCase() 
//   }

//refactor to one line: 

// const abbrevName = name => name.split(' ').map(i => i[0].toUpperCasE().join('.'))

// 7 kyu: get the middle character: 

//PREP: 
// P:
//Given a word, take it and return the middle character of the word If the legth of the word is odd, return the middle character, if even return the middle two characters. only strings.  
// R:
// return as a single string, one letter for odd words, two letters for even words. 
// E:
// test => es
// return => tu
// P:
// check the length of the string to determine whether odd or even. if odd, extract one letter in them middle. 
//how to extract middle?
//if even, get the two middle letters..

//split in half by slicing until length == 2?

// function getMiddle(s) {
//     const sArray = s.split('')
//     if (sArray.length % 2 === 0) {
//         while (sArray.length > 2) {
//             sArray.pop()
//             sArray.shift()
//         }
//     } else if (sArray.length % 1 === 0) {

//         while (sArray.length > 1) {
//             sArray.pop()
//             sArray.shift()
//         }
//     }
//     return sArray.join('')
// }

// getMiddle('testing')

//refactor: 

// const getMiddle = s => s.slice((s.length-1)/2, s.length/2+1)

// console.log(getMiddle('testing'))

// 6 kyu: Sum of Digits/Digital Root: 

// const squared = n => Math.sqrt(n) % 1 === 0 ? 'yes' : 'no'

// console.log(squared(5))

//PREP:
//P:
// given an integer, if that value has more than 1 digit, reduce it intil its asingle digit. 
//always a number, always positive. 
//R:
//return the single number
//E:
// 16 => 7 
// 456 => 6
// 942 => 9+4+2 = 15 => 1+5 = (6) 
// 16 = > 1 + 7
//P:
//goign to take in a number and break it down until its a sinlge number.
//explicitly converting it from a number to a string then breaking that string into an array, then converting the individual strings back into numbers and reducing it to a single value. 

// function digital_root(n) {
//     const nStr = String(n).split('')
//     // console.log(nStr.length)
//     if(nStr.length > 1) {
//         const newNums = nStr.reduce((acc, c) => acc + +c, 0)
//         console.log(newNums)
//         return digital_root(newNums)
//     } else if (nStr.length == 1) {
//         return +nStr.join('')
//     }
// }
// digital_root(942)

//refactor: 

// const digital_root = n => (n - 1) % 9 + 1

// console.log(digital_root(942))
