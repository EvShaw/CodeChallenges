console.log('May 19th, 2022')

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// prep:
// p: three paramters - length, width, height  
// r: return length*width*height
// e: 
// 1) 1, 2, 2 = 4
// 2) 6.3, 2, 5 = 63
// p: 
// 1 - take in my parameters. multiply by each other one after another
// 2 - return the given value


// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//       const vol = length * width * height
//       return vol
//     }
//   }



// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

//PREP: 
// p:
// R: 
// E: 
// P: 

// const stringToNumber = function(str){
//     // put your code here
//     return null;
//   }


// <---- ( ! ) ---->

//PREP: 
// P://prompt: remove spaces from a str, return results as a str. remove every space in a given string, and return a single, long word. 

// R:
// return is as is. 

// E:
// '8 j 8   mBliB8g  imjB8B8  jl  B'


// P:
// set a function => accept a str within, remove all of the white and return the str. 
// const noSpace = str => str.split(' ').join('')



// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output


//PREP: 
//P: given two strings, return a single string in the form of short + long + short with the shortet of the two strings flanking the longer one. 

//R: return a single string, concatanted together. 

//E:
//1) : ('45', '1'), '1451');
//2) : ('13', '200'), '1320013')
//P:
//take the two arguments, determine which one is longer. 
//return a single str in the short + long + short format. 

// function solution(a, b) {
//     const arr = []
//     if (a.length < b.length) {
//         arr[0] = a
//         arr[1] = b
//     } else {
//         arr[0] = b
//         arr[1] = a
//     }
//     return `${arr[0]}${arr[1]}${arr[0]}`
// }

// console.log(solution('13', '200'))