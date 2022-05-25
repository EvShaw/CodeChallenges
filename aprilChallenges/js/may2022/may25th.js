console.log('May 25th, 2022')

// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced.

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

//PREP:
//P: a string, can be empty. always lowercase and no symbols
//R: return an array that iterates over each letter in the string and returns the word with each letter uppercased per element in the array. 
//E: 
// "Hello", "hEllo", "heLlo", "helLo", "hellO"
// "Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"
//P :
// I am going to take the string and convert it to an array with the split method, making each individal character its own element within the array. 

//Then I am going to iterate over each element, using toUpperCasE() with each pass. to convert the given index for the given pass
//I'll need to then return it. 

// function wave(str) {

//     const newArr = []
//     for (let i = 0; i < str.length; i++) {
//         let copy = str.split('')
//         if (copy[i] !== ' ') {
//             copy[i] = copy[i].toUpperCase()
//             newArr.push(copy.join(''))
//         }
//     }
//     return newArr
// }

// console.log(wave('hello'))


// function wave(str) {
//     let newArr = [];
//     for (let i = 0; i < str.length; i++) {
//         let copy = str.split('');
//         if (copy[i] !== ' ') {
//             copy[i] = copy[i].toUpperCase()
//             newArr.push(copy.join(''))
//         }
//     }
//     return newArr
// }

//--------------------------------------------


// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).


//PREP: 
// P: two numbers that are always numbers. no edgecases
// R: return the difference bettwen the nums and at what point is one num double that of the second num... 
// E: 
// (36,7) , 22 <--- 36 + 22 = 58/2 =  
// (36,7) , 22 <---  7 + 22 = 29 

// (55,30) , 5) >--- 55-5 = 50
// (55,30) , 5) >--- 30-5 = 25

// 
// P:
// take dads years and compare to sons. If sons years are 1/2 of dads, return as is. Otherwise I need to take sons years and double them, then adjust to find the difference. 





// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     let d = dadYearsOld
//     let s = sonYearsOld

//     if (dadYearsOld / 2 == sonYearsOld) {
//        return 0
//     } else {
//        s = s *= 2
//     }
//     return Math.abs(d-s)    
// }

// twiceAsOld(36, 7)
// twiceAsOld(22,1)
// console.log(twiceAsOld(55,30))

// const alpha = 'abcdefghijklmnopqrstuvwxyz'

// alpha.split('').forEach( ele => {
// console.log(ele.charCodeAt())
// console.log(ele.toUpperCase().charCodeAt()) //65-90
// console.log(ele)

//charcterAt > 97 insert space ' ' 
// })
// const alpha = 'abcdefghijklmnopqrstuvwxyz'

// function solution(string) {

//     newArr = []

//     string.split('').forEach(ele => {
//         // console.log(ele)

//         if(ele.charCodeAt() < 97) {
//             newArr.push(' ')
//             newArr.push(ele)
//         } else {
//             newArr.push(ele)
//         }
       
//     })
//     // console.log(newArr.join(''))
//     return newArr.join('')
// }
// solution('camelCasing')



// console.log(alpha.split(''))


// console.log('a'.charCodeAt())
// console.log('Z'.charCodeAt())