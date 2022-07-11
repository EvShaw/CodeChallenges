const today = new Date
console.log(today)

// 8kyu: Convert Boolean to strings: y || n

// given a string, return a boolean value (yes or no) based on what was passed.
// create a function: 
// ternary that will return yes if true and no if false

// function boolToWord( bool ) {
//     bool === true ? "Yes" : 'No'
// }

//7 kyu: Numbers with this digit inside: 

// seach all numbers from inclusive 1 to inclusive a given number x, that give the digit d in it.

// the value of d will always be 0 - 9
// the value of x will always be greater than 0

//return as an array: 
//the count of the numbers
// the sum
// their product. 



// x = 11
// d = 1
// numbers: 1, 10, 11   
// -> 3, 22, 110

// (44,4), [ 9, 286, 5955146588160 ])
// 0 -> x //44
// 4 -> 

// the count && the sum && their product

// after creating the function, using a for loop, run through each number. If it is divisible by iteself, increase a count


const numbersWithDigitInside = (x, d) => {
    let count = 0
    let sum = 0
    let product = 1
    for (let i = 1; i <= x; i++) {
        if (`${i}`.includes(d)) {
            count++
            sum += i
            product *= i
        }
    }
    return count === 0 ? [0, 0, 0] : [count, sum, product]
}

console.log(numbersWithDigitInside(20, 0))
console.log(numbersWithDigitInside(44, 4))


