//***************************************************************
//@253: Capitalization and mutability. 
// inside the function, extract the first letter by calling 0 index and appending toUpperCase method. With the same return, concatnate the argument with the slice method, passing in 1 to remove the lowercased character at index[0]

// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.slice(1)
// }

//***************************************************************
//@252: Distance between points in 2D
// using the Math.hypot static method, pass in a.x - b.x, a.y - b.y


// function distanceBetweenPoints(a, b) {
//     return Math.hypot(a.x - a.y, a.y - b.y)
//    }
// console.log(distanceBetweenPoints((3, 3), (3, 3)))


//***************************************************************
//@251: Count the Monkeys:
//starting a count from 1, count all the way up to n. populate an array with all the numbers upto and including that number, excluding 0. 

//inside the function, create an empty array.
//to be used capture the count as increment from 1 to the number passed. 
//taking the number passed in, determine how many times we need to count up by 1. 
//return the array with all the numbers passed into it. 


// const monkeyCount = n => [...Array(n)].map((_, i) => i + 1)
// console.log(monkeyCount(5))