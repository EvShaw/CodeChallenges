//***************************************************************
// @289
//  Filling an array

// create an array with content: starting with number 0, and up to N-1. 
//only given an integer, no outside cases, return an array with an index of 0 to n

//create a function that accepts a number. 
//inside the function, use the spread syntax, with Array key word, passing in the number to create an index for each number up to the given. 

// const arr = N => N != 0 ? [...Array(N)].map((_, i) => i) : []

// console.log(arr(0))

//***************************************************************
// @288
//  Grasshopper - Check for factor:

// test if the factor is a factor of base
// return true if it is or false if not

// inside a function, run base % factor == 0 
// return true 

// function checkForFactor(base, factor) {
//     return base % factor == 0
// }

//***************************************************************
// @287
// Century From Year:

//given the year, return the century. 
//number can range from 1 to current
//return a number

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//Use the static Math.ceil method, dividing the year passed by 100

// function century(year) {
//     return Math.ceil(year/100)
// }

// console.log(century(1705))
// console.log(century(1900))
// console.log(century(1601))
// console.log(century(2000))

//***************************************************************
// @286
// 5 Without Numbers!!

// write a function that always returns 5 without using 0123456789*+-/
//return a string a string that is 5 characters long with the length property appended by dot notation.  

// const unusualFive = _ => 'count'.length


//***************************************************************
//BONUS CHALLENGES BECAUSE WHY NOT.... 

//FizzBuzz
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

//create a function, that accepts a number which defaults to 100. 
//inside the function, create a loop. starting at 1 => num. 
//within the loop, check if the number is a multiple of 3&5 first. This will need to go first before checking in the loop if its just a multiple of 3 or 5, so we don't skip anything. 
// print fizz if the i = 3, buzz if i = 5, fizzbuzz if i = 3 & 5

// const fizzBuzz = (num = 100) => {
//     for(let i = 1; i <= num; i++) {
//         if(i % 3 == 0 && i % 5 == 0) console.log('FizzBuzz')
//         else if (i % 3 == 0) console.log('Fizz')
//         else if (i % 5 == 0) console.log('Buzz')
//         else console.log(i)
//     }
// }


// fizzBuzz()

//***************************************************************
//7 - inspiring strings

// function longestWord(stringOfWords) {
//     let longestWord = ''

//     let strArr = stringOfWords.split(' ')

//     strArr.forEach(word => {
//         if (word.length >= longestWord.length) longestWord = word
//     })

//     return longestWord
// }

//***************************************************************
//7 kyu Convert an array of strings to array of numbers
// function toNumberArray(stringarray) {
//     return stringarray.map(el => +el)
// }

// const toNumberArray = stringarray => stringarray.map(el => +el)


// console.log(toNumberArray(["1.1", "2.2", "3.3"]))

//***************************************************************
// @285 const binToDec = bin => parseInt(bin, 2)

//***************************************************************
//@284 
    //If you can't sleep, just count sheep:
    
//const countSheep = num => num > 0 ? [...Array(num)].map((_, i) => `${i+1} sheep...`).join('') : '';


//***************************************************************
//@283
// CSV representation of array

// Create a function that retruns the CSV representation of a two-dimensional numeric array. 


// function toCsvText(array) {
//     const newArr = []

//     array.forEach(el => {
//         newArr.push(el)       
//     })
//     return newArr.join("\n")
//  }


//  console.log(toCsvText([
//     [ 0, 1, 2, 3, 45 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]
//    ] ))

    // '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34', 
    // ' 0,1,2,3,45\'\n\'  10,11,12,13,14\'\n\'  20,21,22,23,24\'\n\'  30,31,32,33,34\'\n\' '