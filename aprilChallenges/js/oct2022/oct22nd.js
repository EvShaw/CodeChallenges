// ********************************************************

//given a string that contains both integers and characters, repeat each character by the integer that came before it in the string. Discard a number if its not followed by a character, only return a string of characters. . 

//create a function that accepts a string argument. 
// seperate the string to an array with the split method. 
// create a variable that will store the current number. if the following item is a number, update the variable to that new number. If not, repeat the character by the nubber. 
//create an array that will store the characters that are pushed as the loop goes. only push characters. 
//return with the join method to convert back a string. 



// function stringExpansion(s) {
//     if (!s) return ''

//     const sArr = s.split('')
//     const returnArr = []
//     let currentNumber = 1   

//     for(let i = 0; i < sArr.length; i++) {
//         +sArr[i] ? currentNumber = sArr[i] : returnArr.push(sArr[i].repeat(currentNumber))
//     }

//     return returnArr.join('')
// }


// with regEx: 

function stringExpansion(s) {
    return s.replace(/\d\D+/g,v=>{
    let digit = v.replace(/[^0-9]/g,'')
    let letters = v.replace(/[0-9]/g,'')
    return letters.split``.map(v=>v.repeat(digit)).join``
  }).replace(/\d/g,'')
}
//   console.log(stringExpansion("3D2a5d2f"))
// console.log(stringExpansion("3abc"))
console.log(stringExpansion('abcde'))
console.log(stringExpansion('0d0a0v0t0y'))
