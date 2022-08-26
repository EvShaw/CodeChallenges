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

// @294
//  Grasshopper - summation

// write a program that finds the summation of everynumber from 1 to num/ 
//num alwyas positive. No special or ather characters. 
// return single integer

// create a binding that will keep track of our total as we open a loop starting with 1 and adding to sum every iteration of loop. Return the number.


const summation = num => {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i
    }

    return sum
}


console.log(summation(8))
