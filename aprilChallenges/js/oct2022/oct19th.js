// given three integers, length, minimum, maximum. 
//return a string that starts at the minimum, ascends one at a time unitl reaching the maximum and then descends one at a time until reaching the minimum.Repeat this process until the string is the appropriate length
//length always non-negative
// negative nums can appear for min/max. 
// hyphens/ dashs do not count for length of the string. 
// return an empty string if maximum < minimum or length == 0

// length: 5, minimum: 1, maximum: 3   ==>  "12321"

// create an empty string to capture i from loop 1 and loop 2 (not nested). 
// loop 1: start from min and loop until max, concat i onto result. 
    //this loop is linear as we aren't nesting anything. 
// loop 2: start from max - 1 to not have repeating numbers. loop from max to min, concatenating i onto result. 
    // this 2nd loop would bring the time complexity to O(2N). dropping the constant its still O(n) and remains linear vs. quadratic. 

//reassign result, adding the repeat method passing in length amound of times. 
// return with the slice method, starting from 0, and slicing off at the index of length. 


function ascendDescend(length, minimum, maximum) {
    //O(N) solution
    let result = ''

    for(let i = minimum; i <= maximum; i++) {
        result += i
    }
    for(let i = maximum - 1; i > minimum; i--) {
        result += i
    }

    result = result.repeat(length)
    return result.slice(0, length).length

}
console.log(ascendDescend(5, 1, 3))  // "12321"
console.log(ascendDescend(15, 0, 2)) // "01210121012101"

//find the range and replicate it. 

'01210 012100121'
'01210 121012101'