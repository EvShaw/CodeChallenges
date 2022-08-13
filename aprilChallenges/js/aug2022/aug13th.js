const today = new Date
console.log(today)

// 6 KYU:
// write a method that takes an array of consecutuve letters as input and the returns the missing letter in the array. 

//always a valid array. can be lower or upper case. Always containing one missing letters. length will always be at least 2. If lower, all will be lower, if upper, all will be uppercase

//['a','b','c','d','f'] -> 'e' 
//['O','Q','R','S'] -> 'P'

//Create a function that takes a single argument that is an array.

//create a variable that captures our starting point: arr[0].charCodeAt

//iterate over the array, looking for the missing letter by using a loop and the charCodeAt method, comparing to the starting point. 

function findMissingLetter(array) {
    let startPoint = array[0].charCodeAt()

    array.forEach(letter => {
      
        if (letter.charCodeAt() === startPoint) {
            startPoint++
        }
    })
    return String.fromCharCode(startPoint)
}


console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
console.log(findMissingLetter(['O', 'Q', 'R', 'S']))

