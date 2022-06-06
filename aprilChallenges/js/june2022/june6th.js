console.log('June 6th, 2022')

//6 kyu: 

//Create Phone Number

//PREP:
//P:
//given 10 integers, all between 0 and 9. no edgecases. No floats, strings, etc. 
//R:
// return a string of those numbers in a phone number format. 
//E:
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 => (123) 456-7890
// 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 => (111) 111-1111
//P:
//  take the numbers, explicitly convert to strings and store.
// insert paranthesis before the first number and after the third numbers. 
//use splice?
// insert space between the parenthesis (area code numbers) and next set of three. place a hyphen into the index of -5 spot.


// function createPhoneNumber(numbers) {
//     const stringNums = numbers

//     stringNums.splice(0, 0, '(')
//     stringNums.splice(4, 0, ')')
//     stringNums.splice(5, 0, ' ')

//     stringNums.splice(9, 0, '-')
//     return String(stringNums.join(''))
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

//refactor: 

// function phoneNum(n) {
//     let format = '(xxx) xxx-xxxx'

//     for (let i = 0; i < n.length; i++) {
//         format = format.replace('x', n[i])
//     }
//     return format
// }

// console.log(phoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))