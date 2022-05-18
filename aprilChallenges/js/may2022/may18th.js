// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// prep: 

// p - 2 numbers, can be negatives. first always lower than second num. 
// r - return all nums except nums with a 5 in it
// e - thorugh the examples gives, return a count, not an array of nums. 
// p: 
// take start and end, create a range. 
// iterate over the range, extracting any and all nums that contain 5 (not % 5)/ 
// count the iteration as it goes through 
// return the total count of nums in the range. 


// function dontGiveMeFive(start, end){
//     let res = [];
//     for (let i = start; i <= end; i++) {
//       if (!i.toString().includes('5')) res.push(i);
//     }
//     return res.length;
//   }