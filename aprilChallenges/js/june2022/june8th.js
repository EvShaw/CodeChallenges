console.log('June 8th, 2022')

//8kyu: Keep up the hoop

//PREP
//P:
//write a program that accepts a number. If the number is less than 10 return one phrase. If greater than 10 return another phrase. 
//only once, not per 10. 
//R:
//return as a string. 
//E:
// 3 = ecnourage
//10+ = congratulations. 
//P:
//okay, so I am going to take a number, run a quick conditional on it. If its 10 or more return a congrats sating, if less than ten, ecourage. A simple one liner would look like this... ,

// const hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"


//6kyu: Find the odd init: 

//PREP:
//P:
//given an array of integers. Always a number, can be negatives, can be zero. No strings. 
// Need to find which integer appears an odd amount of times, includeding once. 
//always one to be had.  
//R:
//Will always be one that appears. Return as a number. 
//E:
// 1, 1, 2 => return 2 because it occurs 1 tume which is odd. 
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
//P:
//already an array so...
// sort the array in ascending order so we can iterate over it. //redundant? check on refactor
// grab the first index and every additional one in the array. test it with the every method, and compare it to itself with modulus. If odd, return it. 
//If not, move on to the next index and do the same thing. Continue for the length of the loop. 

// function findOdd(A) {
//     var obj = {};
//     A.forEach(function(el){
//       obj[el] ? obj[el]++ : obj[el] = 1;
//     });
    
//     for(prop in obj) {
//       if(obj[prop] % 2 !== 0) return Number(prop);
//     }
//   }

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);