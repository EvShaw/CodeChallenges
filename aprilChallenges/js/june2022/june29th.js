const today = new Date
console.log(today)

// 8kyu: returning strings: 

// create a function that returns a greeting that uses an input. 
// I'm going to create a function that accepts a string input as its paramater. Passing that input into a string literal that outputs the same string but changes the name based on the input passed in. 

// const greet = n => `Hello, ${n} how are you doing today?`

// 6kyu: your order, please: 

// Given a string, sort each word in that string by the number that it contains. no outside edges with the exception of an empty string returning an empty string. Numbers can be from 1 to 9 (not starting at 0). Numbers will be valid. 

// return the string with the words ordered by the number it contains. 

// is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//After creating the function I will then split the string into an array. From here I can then loop through each word in the array, searching for the numbers contained and sorting based on that number. 



// function order(words) {
//     if (!words) return ''
//     newWordsArr = []
//     wordsArr = words.split(' ')

//     wordsArr.forEach(word => {
//         let extractNum = word.split('')
//         extractNum.forEach(letter => {
//             if (letter % 1 === 0) {
//                 let number = letter
//                 newWordsArr[number-1] = extractNum.join('')
//             }
//         })
//     })
//     return newWordsArr.join(' ')
// }

// console.log(order('is2 Thi1s T4est 3a'))



// function order(words) {
//     if (!words) return ''
//     newWordsArr = []
//     wordsArr = words.split(' ')
//     wordsArr.forEach(word => {
//         let extractNum = word.split('').sort()
//         newWordsArr.push(extractNum.sort().join(''))
//     })

//     return newWordsArr.sort().join(' ')
// }

// console.log(order('is2 Thi1s T4est 3a'))