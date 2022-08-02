const today = new Date
console.log(today)


function longest(s1, s2) {
    const str = s1.split('').concat(s2.split(''))
    console.log(str.sort())

    const returnSTR = str.filter((a, i) => a !== str[i - 1])
    return returnSTR
}

console.log(longest("aretheyhere", "yestheyarehere"))


const removeDupes = s => s.sort().filter((a, i) => a !== s[i - 1])

console.log(removeDupes(['a', 'a','a','b', 'b']))

//challenge time... 


// power of two -> complete the function, determine, non neg-integer, is it a power of two. 
// base ** exponent

// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false

function isPowerOfTwo(n) { // create the function, sinle param accepted. 
    let result = 0; // binding created, starts at 0.
    if (n === 0) return false; // if n triple equalt (type and value) zero, return false.
    if (n === 1 || n === 2) return true; // if n equals 1 OR 2, return truw. 
    for (let i = 2; i < n; i *= 2) { // start for loop, starting i at 2, running as long as i is less than n, with each iteration(loop), i increements by a factor of two.
        result = i * 2; // result is i multiplied by 2.
    } // close loop.
    return n === result; // return n as true if it is triple equal to n, otherwise return false.
}


// function isPowerOfTwo(n) {
    //return n === 0 ? false : (n & (n - 1)) == 0
//} 