console.log('May 24th, 2022')


// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

//PREP: 
    //P: giving me an array of numbers that can contain negatives as well as be an empty array. 
    //R: I will return 0 if empty, otherwise I will return the sum of the nums. 
    //e: they are using simple math. 
    //p:

    //take the array, and first check if it is empty. If so, return 0. Otherwise use the reduce methods to iterate over the array and return a single value. 

// function sum (numbers) {
//     "use strict";
//     if (!(numbers)) {
//         return 0
//     } else {
//       return numbers.reduce((acc, c) => acc + +c, 0)
//     }
    
// };

// //single line?

// const sum = n => (!(n)) ? n.reduce((acc, c) => acc + +c, 0) : 0

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.



// PREP:
    // P: given an array and a value. can contain both nums and strings
    // R: check and return if the value of x is in the array. 
    // E: in looking at the examples given, includes method should serve and work fine. could also loop over both, comparing the value to each element of the array (overkill). 
    // P:
        // take x and check with includes method if a contains it. I could also use find method or filter too. 

// function check(a, x) {
//    a.includes(x)
//   }

// //single line version: 

// const check = (a, x) => a.includes(x)