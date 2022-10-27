console.log('hi')

//create simple passowrd validaiton. 
//1 uppercase, 1 lower
// 1 number
// minimum 8 characters long. 

//only given strings. 
// any character can be inlucded
// any length accepted. must be at lease 8 characters. 

//linear apprach: O(n)

// using the split method, covert string to array. 
// loop over the array. 
// check for the paramaters need to validate the password. 
// create a binding that holds booleans for upper, lower, and number. all being false that convert to true when met. 
// use charCodeAt method for upp and lower and typeof to check for a number. if the loop finds one fo these, flip the boolean, once all booleans are true, then return true. Otherwise, return false if any are missing. 
// a through z = 97 through 122
// A through Z = 65 through 90


// a = 97
// z = 122
// A = 65
// Z = 90

// console.log(String.fromCharCode('97'))

function password(str) {
     // O(N)/ linear approach:
    const strSplit = str.split('')
    const strArr = strSplit.map(el => el.charCodeAt())

    let hasLower = false
    let hasUpper = false
    let hasNumber = false

    // With regEx, check if the string has a number. 
    if (/\d/.test(str)) hasNumber = true

   
    for (let i = 0; i < strArr.length; i++) {
        //check for uppercase
        if (strArr[i] >= 65 && strArr[i] <= 90) hasUpper = true
        //check for lowercase
        if (strArr[i] >= 97 && strArr[i] <= 122) hasLower = true
        //check for number
    }

    if (hasLower == true && hasUpper == true && hasNumber == true && str.length >= 8) return true
    else return false
}

console.log(password("Abcd1234"))