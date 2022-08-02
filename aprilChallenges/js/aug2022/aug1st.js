const today = new Date
console.log(today)

// two arguments (n, p). both positive integers. 

// take n, break it into a string => iterate over the numbers (for Each) with each number being multiplied by the power of p., then how many times does the base number need to be multiplied by itself to get the number stated?
// 89, 1 => 8^1 + 9^2 = 89 - 89 * 1
// 92, 1 => 9^1 + 9^2 = -1 // 9^1 (9) + 2^2 (4) = 14 != 92

// If the number (k) is not divisible by itesslf, return -1, else return the quotient number. 

// create a function, with two paramaters. 
// convert that number to a string. 
//iterate over that string. 

//* convert to number in the loop. 

//set the power of to the second argument passed (p). 
// increment with each loop. 

//capture the reduced total. 

// check if the number is dvisible by itself or not, return -1 if not, return number if it is.


//look at the newArr and reduce that to a single value ()
//what is the total? 
// is it divisible by itself? 
//if no, return -1
// if yes...
// return the number.

function digPow(n, p) {
    const numStr = n.toString().split('')
    let power = p
    const newArr = []

    numStr.forEach((num) => {
        newArr.push(Number(num) ** power)
        power++
    })
    //reduce and capture
    const total = newArr.reduce((acc, c) => acc + c)

    if (total / n % 1 !== 0) {
        return -1
    } else {
        return total / n
    }
}

console.log(digPow(89, 1))
console.log(digPow(695, 2))
console.log(digPow(92, 1))

//refactor: 

function digPow(n, p) { //create function and accept arguments
    let x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0) // capture n, converting to string. Split by characters, reduce to single value, looking at the item, the index, and the array with each iteration (total number of elements in the array), arrow function to s(element) + math method power to, d(index of the reduce), second arguemnt, the exponent being p (second argument) + i(the array)
    
    return x % n ? -1 : x / n // return x(the variable modulus n) ternary -1 if true, otherwise return x/n
}

