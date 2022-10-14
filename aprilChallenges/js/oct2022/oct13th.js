const today = new Date;
console.log(today.toLocaleString())


//take the input from a string and return a new string with each character multiplied by the index its placed in with the first instance of each character being capitalized. 

// accum("abcd") -> "A-Bb-Ccc-Dddd"

// return it has a single string. 

// turn the string into an array
//** convert to lower casing in order to avoid the characters passed as already being uppercase to all be uppercased.
// use the map method, with the element and index as arguments.combined with the repeat method 
// return the element times the index + 1. 
// capitalize the first instance of every 'word' in that string.
//** chain on a second map that will take the first letter of each element and captilize it, then join it with the rest of the string using the slice method with a starting index of 1 to remove the lowercased first character. 
// join with a hyphen and return as a single string. 

function accum(s) {
    const sArr = s.toLowerCase().split('').map((el, i) => {
        return el.repeat(i + 1)
    }).map(el => el[0].toUpperCase() + el.slice(1))
   
    return sArr.join('-')

}

console.log(accum("abcd"))
console.log(accum("ZpglnRxqenU"))