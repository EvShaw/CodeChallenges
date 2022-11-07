const today = new Date
console.log(today.toLocaleString())
const c = str => console.log(str)

// using the Luhn algorithm return true or false if the number is valid. 

// given a positive integer up to 15 digits, always numbers, always positive. 
// return a boolean. 

// inside the array check whether the array length is even or odd. 
// if even, start at 0 and double every other number. If odd, start at index of 1 and double every other number. 
//if the number is greater than 9, replace it with the sum of its own digits (the number - 9)
// then sum all the numbers.
// last, divide the summed numbers by 10. If the remainder == 0, then the number is valid and return true, otherwise false.

function validate(n) {
    //as n is a number, convert to string and turn to an array of single digits.
    const nStringArray = n.toString().split('')
    let newArr = []
    //check of n is odd or even
    for (let i = 0; i < nStringArray.length; i++) {
        if (nStringArray.length % 2 == 0) {
            //every even number is doubled if the array is even in length
            if (i % 2 == 0) {
                let num = +nStringArray[i] * 2
                if (num > 9) num = num - 9
                newArr.push(num)
            } else {
                newArr.push(+nStringArray[i])
            }
        } else {
            //every odd number is doubled if the array is even in length
            if (i % 2 != 0) {
                let num = +nStringArray[i] * 2
                if (num > 9) num = num - 9
                newArr.push(num)
            } else {
                newArr.push(+nStringArray[i])
            }
        }
    }
    const sumNewArr = newArr.reduce((a, b) => a + b, 0)
    const sumModTen = sumNewArr % 10 == 0
    return sumModTen 
}

console.log(validate(2121))
console.log(validate(891))