//***************************************************************
//@282
//Count of positive and negatives

//Given an array of integers. 
//whole integers only. No other characters. 
//return an array, first element is the count of positves and the second element is sum of negative numbers. 0 is 0. 

//if NAN, null, empty, return empty

// check that input is truthy, if not, return []
// open a loop that will check and count how many integers are positive. NOT SUM THEM.
// create a binding to capture the SUM of the negative integers. 
// filter over the input, extracting out the neg numbers then use reduce method to sum them. 

//check if pos and neg value == 0, if so, return [] else return the count of pos and the sum of neg.

// function countPositivesSumNegatives(input) {
//     if (!input) return []

//     let positive = 0
//     let positiveCount = input.map(el => el > 0).forEach(el => {
//         if (el > 0) positive++
//     })

//     let negative = input.filter(el => el < 0).reduce((pre, cur) => pre + cur, 0)

//     if(positive == 0 && negative == 0) return []
//     else return [positive, negative]
// }


// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

// console.log(countPositivesSumNegatives([0, 0]))

//***************************************************************
//@281
//get nth even number. 

// given a number, what would be the positive integer of that? 
// 
// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466

//create an array to capture the count of positives. 
//create a loop that will continue to add those positive nubmers into the array. 
//this loop will contineu until the length of the array == the number passed. 

// use a while loop.....nope, nope, nope....


//SOMETIMES THE EASIEST WAY IS THE BEST WAY
// function nthEven(n) {
//     return n*2 - 2
// }

//***************************************************************
//@280
//
