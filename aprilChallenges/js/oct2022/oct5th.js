const newDate = new Date
console.log(newDate.getFullYear())

//********************************************* */
//8 kyu:
//given two strings, sum the the total and return as a string. 

// always strings. Can contain emtpy strings. No numbers or other characters will be passed. Two arguments passed. 
//retrun as a string. 
// inside the function, convert both arguments into numbers, sum them and then return as a sting. 
// convert from string to number with the Number method, then sum them with basic arthimetic operator, then return with the .toString method. 

// function sumStr(a, b) {
//     return ((Number(a) + Number(b)).toString())
// }

//refactored as a one liner:
// const sumStr = (a,b) => (Number(a) + Number(b)).toString()
//refactored as to the shortest one liner I can:
// const sumStr = (a,b) => (+a + +b).toString()

// console.log(sumStr('3', '6'))

//********************************************* */
//7 kyu:
//given two arguments, return a string that replaces the * with the correct letter, passed from the second argument.
// inputs can be any character, in any form, including empty white space. 
// return as a single string. 

// inside the function, I am going to capture and convert the first argument to an array. 
// Then, capture and convert the second string to an array as well. 
// loop over the first array with a conditional, checking if i === *. 
// when the loop finds an *, replace that with the first element in the second array. 

// function uncensor(infected, discovered) {
//     const infectedArr = infected.split('')
//     const discoveredArr = discovered.split('')

//     const newArr = []

//     infectedArr.forEach((letter, i) => {
//         if(letter === '*') {
//             newArr.push(discoveredArr.shift())
//         } else {
//             newArr.push(letter)
//         }
//     })
//     return newArr.join('')
// }

// console.log(uncensor("A**Z*N*", "MAIG"))

// with spread syntax, ternary, and map method: 

// const uncensor2 = (infected, discovered) => {
//     //spread the discovered argument: 
//     const arr = [...discovered]

//     return [...infected].map(el => el === '*' ? arr.shift() : el).join('')
// }

// console.log(uncensor2("A**Z*N*", "MAIG"))

// with  replace method: 

// const uncensor2 = (infected, discovered) => {
//    let uncensored = ''

//    uncensored = infected

//    for(let i = 0; i < discovered.length; i++) {
//      uncensored = uncensored.replace('*', discovered[i])
//    }

//    return uncensored
// }

// console.log(uncensor2("A**Z*N*", "MAIG"))

//********************************************* */
//6 kyu:

// given a string, take the inside letters and move them to the outside. 
// if the word is even, turn inside out. if odd, leave the middle letter as is. 

// taxi => atix
// taxis => atxsi

// function insideOut(x) {
//     let sentence = x.split(' ')

//     let returnArr = []

//     sentence.forEach(word => {
//         console.log(word)

//         const firstHalf = []
//         const secondHalf = []

//         if (word.length % 2 == 0) {
//             const evenStr = word.split('')
          
//             const evenNum = evenStr.length / 2

//             //first half
//             for (let i = 0; i < evenNum; i++) {
//                 firstHalf.push(evenStr[i])
//             }
//             //second half
//             for (let i = evenNum; i < evenNum * 2; i++) {
//                 secondHalf.push(evenStr[i])
//             }

//             firstHalf.reverse()
//             secondHalf.reverse()

//             returnArr.push(firstHalf.concat(secondHalf).join(''))

//         } else {

//             const oddArr = word.split('')

//             const oddNum = ((oddArr.length - 1) / 2)
//             const getMiddle = oddArr[oddNum]

//             //first half
//             for (let i = 0; i < oddNum; i++) {
//                 firstHalf.push(oddArr[i])
//             }
//             //second half
//             for (let i = oddNum + 1; i <= oddNum * 2; i++) {
//                 secondHalf.push(oddArr[i])
//             }

//             firstHalf.reverse()
//             secondHalf.reverse()

//             returnArr.push(firstHalf.concat(getMiddle, secondHalf).join(''))
//         }
//     })
//     return returnArr.join(' ')
// }

// console.log(insideOut('man i need a taxi up to ubud'))

