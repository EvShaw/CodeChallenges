//***************************************************************
//@275 -
// Beginner Series #2 clock
//given three paramaters :hour, minute, and seconds, determine what time it is since midnight is in milliseconds


//inside the function, create a binding to store the total milliseconds. 
// break the paramaters down respectively converting each hour into a total of 360000 miliseconds, minute to 60000 milliseconds and second to 1000 milliseconds.  
//afte summing all the time breakpoints into a single value, return the total milliseconds. 

function past(h, m, s) {

    let totalMilliseconds = 0

    let hour = 3600000
    let minute = 60000
    let second = 1000

    totalMilliseconds = h * hour + m * minute + s * second

    return totalMilliseconds
}

// console.log(past(0, 1, 0))



//***************************************************************
//@274 - Take the Derivative
// takw two parameters, the coefficent and the exponent
//multiply the two numbers and subtract 1 from the exponent. 
//print out an expression:  '28x^7
// ^1 should not be truncated when exponent = 2

//derive(7, 8) --> this should output "56x^7" 
//derive(5, 9) --> this should output "45x^8"

// mutliply the two numbers and return a print out of that expression ^ -1 from the exponent. 

//create a function with two paramaters (coefficient, exponent)
//multiply the two numbers and store as a value. 
//return the value inside a string template literal as the first part and the exponent - 1 as the second part:

function derive(coefficient, exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`
}


//***************************************************************
//@273 - Simple validation of a username with regex

//using regex, validate a username with only lowercase letters, numbers, and underscores. Length should be no less than 4 and no greater than 16

//inside the function, check the length and ensure it passes the min and max length allowed. Then google the regex needed and return it!

const validateUsr = username => {
    return username.length >= 4 &&
        username.length <= 16 &&
        (username.match(/[a-z]|_|\d/g).length === username.length);
}

//***************************************************************
//@272: Get character from ASCII value

//given a number, return the correspond ASCII char for that value. 

//inside the function, use the STRING fromCharCode method to convert the character to its UTF-16 value.

function getChar(c) {
    return String.fromCharCode(c)
}

//***************************************************************
// random 7kyu: Remove all the marked elements of a list.

//Define a method that removes from a given array of integers all the values contained in a second array. 
// // [1, 1, 2 ,3 ,1 ,2 ,3 ,4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

// given two arrays, the first an integer_list and the second a values list, remove from the integer list all the numbers contained in the values_list so that the returned array only return numbers not on the value list. 


// inside the function, 
//create a variable that will capture the second argument and later used in the filter when extracting numbers.    
//return map() 
// map over the integer list, returning a new array
// filter out any integers not on the values list. 
// and return those values. 

Array.prototype.remove_ = function (integer_list, values_list) {
    return integer_list.filter( el => !values_list.includes(el))
}

console.log(Array.prototype.remove_([1, 1, 2 ,3 ,1 ,2 ,3 ,4,], [1, 3]))