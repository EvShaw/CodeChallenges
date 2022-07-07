const today = new Date
console.log(today)

// 7 kyu getDivisors

// function getDivisorsCnt(n) {
//     let div = 0;
//     for(let i = 1; i <= n; i++) if(n % i == 0) div++;
//     return div;
//   }

// 6kyu: The Parity Outlier

// PREP
//P:
// given an array with a minimum length of 3. Each element in the array will either be odd or positive with the exception of one. Find and return that numbers. 
//R:
// return the odd or even number and leave the rest alone. 
//E:
// [2, 4, 0, 100, 4, 11, 2602, 36] => 11 is the only odd 
// [160, 3, 1719, 19, 11, 13, -21] => 160 is the only even
//note, integers can be negative.  
//P:
// create two local variables inside a function that will keep count of positive integers and negative. 
// Iterate over the array, if its positive we will add to the positive count and the same for an element that is negative. 
// we will then compare the two. The variable with the value of 1 is what we will be looking for, there fore we can search again and extract that number by filtering out odds/evens. 

// function findOutlier(integers) {
//     let even = []
//     let odd = []
   

//     integers.forEach(num => {
//         if (num % 2 === 0) {
//             even.push(num)
//         }
//         if (num % 2 !== 0) {
//             odd.push(num)
//         }
//     })

//     if (even.length < odd.length) {
//         return even[0]
//     } else {
//         return odd[0]
//     }
// }

// console.log(findOutlier([0, 1, 2]))

// another way: 

// function findOutlier(integers){
//     const even = integers.filter(int => int % 2 === 0);
//     const odd  = integers.filter(int => int % 2 !== 0);
//     return even.length === 1 ? even[0] : odd[0];
//   }