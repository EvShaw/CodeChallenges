//***************************************************************
// @294
//  Grasshopper - Terminal game move function

// moving from left to right, roll a set of dice and move the number of spaces indicated by the dice 2TIMES

// create a function, taking two arguments. 
// a position, and a roll. 
// the position is where we start, and the roll is how many we move. 
// using simple math, we could just add the position and the roll, squared and return the number. 

// function move(position, roll) {
//    return position + roll * 2    
// }


// const move = (position, roll) => position + roll * 2

// console.log(move(3, 6))

//***************************************************************
// @293

//  Grasshopper - summation

// write a program that finds the summation of everynumber from 1 to num/ 
//num alwyas positive. No special or ather characters. 
// return single integer

// create a binding that will keep track of our total as we open a loop starting with 1 and adding to sum every iteration of loop. Return the number.


// const summation = num => {
//     let sum = 0
//     for (let i = 1; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }


// console.log(summation(8))

//***************************************************************
// @292
// expressions matter:

// given 3 integers (a, b, c), return the largest number obtained after inserting the following operators and brackets: +, *, ()

//only given numbers, no outside edgecases, always positive. reptition in numbers may occur

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9

// function expressionMatter(a, b, c) {
//     let a1 = a + b + c
//     let a2 = a * b * c
//     let a3 = a + b * c
//     let a4 = a * b + c
//     let a5 = (a + b) * c
//     let a6 = a * (b + c)

//     let collection = [a1, a2, a3, a4, a5, a6]

//     let highestNum = 0
//     collection.forEach(total => {
//         if(total > highestNum) highestNum = total
//     })

//     return highestNum

// }

// console.log(expressionMatter(1, 1, 1))


//***************************************************************
// @290
//Stringy Strings

//Create a function that takes a size and return a string of alternating 1's and 0's. The string starts with 1. 
// if even, ends with 0. 
//size will always be positive and will only use whole numbers. No other characters or additional esgecases. 
// return as a STRING. 

//within function, run a loop for the length of size. 
    // determin if i is even or odd with each iteration. 
        //if even, push '1', else push '0'. //always starting on 0 which kicks the loop off push '1' first. 
        //return the number with the join method. 


// function stringy(size) {
//     let str = []

//     for (let i = 0; i < size; i++) {
//         if (i % 2 == 0) str.push('1')
//         else str.push('0')
//     }

//     return str.join('')

// }

// // console.log(stringy(3))

// console.log(stringy(3))

// console.log(summation(8))


