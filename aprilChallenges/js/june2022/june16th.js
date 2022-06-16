const today = new Date
console.log(today)

// Check Same Case: 

// Write a function that will check if two given characters are the same case.
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1

// function sameCasing(a, b) {
//     const key = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     const alpha = a
//     const beta = b
//     if(!key.includes(a.toLowerCase()) || !key.includes(b.toLowerCase())) return -1

//     const checkCase = x => {
//         if(x === x.toLowerCase()) return 'lower'
//         if(x === x.toUpperCasE()) return 'upper'

//         return checkCase(a) === checkCase(b) ? 1 : 0
//     }

//     for (let i = 0; i < key.length; i++) {
        
//     }


// }

// console.log(sameCasing('a', 'g'))