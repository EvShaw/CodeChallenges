const today = new Date
console.log(today.toLocaleDateString())
console.log(today.toLocaleTimeString())

// ************************************************************************
// backspaces in strings: 

// take in a string. For every '#', backspace one character in the string: 

// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// inside the function, take the string and... 

// convert the string into an array. 
// create an empty arr to push elements into 
// loop over it. 
// if not hash, push to new arr, if hash pop off an element from new arr. 
// join and return



// function cleanString(s) {
// const strArr = s.split('')
// let returnArr = []

// strArr.forEach(char => {
//    if(char !== '#') {
//     returnArr.push(char)

//    } else if (char === '#') {

//     returnArr.pop()
//    }
// })
// return returnArr.join('')
// }

//with map method: 

function cleanString(s) {
    let result = []

   s.split('').map(el => el === '#' ? result.pop() : result.push(el))

    return result.join('')
}

console.log(cleanString("abc#d##c"))