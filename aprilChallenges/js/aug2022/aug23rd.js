//****************************************************************

// @302: Sort and Star

// given a list of strings, sort is a;phabetically, case sensitive, based on the ASCII value and the return the first value.
//input *** between each character.

// create a function that accepts an array as an argument.
// sort the array with sort(). then iterate over the arrays first element with a loop, adding *** between each letter, exluding the last. which can be trimmed with slice. join the looped over array back into a single word and return.

// function twoSort(s) {
//     const sortedArr = s.sort()
//     let returnArr = []

//    sortedArr[0].split('').forEach(letter => {
//         returnArr.push(letter + '***')
//     })

//     console.log(returnArr.join('').slice(0, -3))
//     return(returnArr.join('').slice(0, -3))

// }

// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))

//****************************************************************

// @301: Safen USer Input Part 1 - htmlspecialchars

//convert the following characters to their html special codes
//  < => &lt;
//  > => &gt;
//  " => &quot;
//  & => &amp;

// Create function that accepts a single string argument.
// check if the string contains the following special characters above, and if it does, replace it with the HTML special code. 
//.... switch case work here 
// create an object that will exchange the special characters as needed. 

// function htmlspecialchars(formData) {
//     // the coded out replaceAll works in the browser but not in Codewars testing environment. I could replace with regEx:
//     // formData.replaceAll(/&/g, '&amp;'
//         // but that seems like cheating. 
//     // return formData.replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll('&', '&amp;')
//     const arr = []

//     formData.split('').forEach(letter => {
//         switch (letter) {
//             case '<':
//                 arr.push('&lt;')
//                 break;
//             case '>':
//                 arr.push('&gt;')
//                 break;
//             case '"':
//                 arr.push('&quot;')
//                 break;
//             case '&':
//                 arr.push('&amp;')
//                 break;
//             default:
//                 arr.push(letter)
//         }
//     })
//     return arr.join('')

// }
// console.log(htmlspecialchars('<h2>Hello World</h2>'))
// console.log(htmlspecialchars('Hello, how would you & I fare?'))


//****************************************************************

// @300: Contamination #1 String

// if empty, return empty. 
//creat a function that accepts two arguments:
// a string and a char. 
//replace all characters of the string with the second arguments char. 

// pad start method will be great here. I could use regEx and/or replaceAll methods as well as map?

// function contamination(text, char) {
//     if(!text || !char) return ''

//     return char.padStart(text.length, `${char}`)

// }

// console.log(contamination("abc","z"))
// console.log(contamination("abcz",""))

//map method with spread syntax
// function contamination(text, char) {
//     if(!text || !char) return ''

//     return [...text].map(letter => char).join('')

// }

// console.log(contamination("abc","z"))
// console.log(contamination("abcz",""))

//****************************************************************

// @299: Powers of 2

//create a function that accepts a non negative number. Return a list of all the powers of 2, thit the exponent ranging from 0 to n

// use a loop to push i into an empty array with each itteration, where i = 2**n || Math.pow(2, i)
//return the arr that captures i. 

// function powersOfTwo(n) {
//     const arr = []
//     for (let i = 0; i <= n; i++) {
//         // console.log(i)
//         arr.push((2 ** i))
//     }
//     return arr
// }

// console.log(powersOfTwo(4))