const today = new Date
console.log(today)

// printer err
// ----- a -> m letters only
// colors used by printer (cmyk?)
// control string, ex: 'aaabbbbhaijjjm'
// aaa bbbb a i jjj m 
// lack of colors...malfunctions cause errors and bad strings... 
// bad example => 'aaaxbbbbyyhwawiwjjjww' (any thing above m is bad)

// given a string, a good example will only include letters a through m
    // anything above m, n+ through z... are bad. 
        // return 

    // s="aaabbbbhaijjjm"
        // printer_error(s) => "0/14"

    // s="aaaxbbbbyyhwawiwjjjwwm"
        // printer_error(s) => "8/22"  


    // return: num1(errors) + '/' + 'string length'

// create a function that accepts a single argument (str) 
    // create variable to capture the error when loop
    // take the string, and split into an array with the split method. // consider lowercase, convert the string to lowercase()
        // forEach, for, for of, while, do... but I can loop 
            // with each loop, check if the letter being passed is with the range of a - m (codeCharAt()) <---utf 16 value. a/ 97 z/97+26
                
            // inside the loop => if the letter is n - z, error count++
        // return the number of errors with string template liters: `${errorCount}/${str.length}`
        


// function printerError(s) {
//     let strArr = s.split('').toLowerCase()
//     let errorCount = 0
//     strArr.forEach(letter => {
//         if(letter.codeCharAt() > 110) { 
//             errorCount++
//         }
//     })
//     return `${errCount}/${s.length}`
// }

// function printerError(s) {
//     let strArr = s.toLowerCase().split('')
//     let alphaCount = {
//         'a': 0,
//         'b': 0,
//         'c': 0,
//         'd': 0,
//         'e': 0,
//         'f': 0,
//         'g': 0, 
//         'h': 0, 
//         'i': 0, 
//         'j': 0, 
//         'k': 0, 
//         'l': 0, 
//         'm': 0, 
//         'n': 0, 
//         'o': 0, 
//         'p': 0, 
//         'q': 0, 
//         'r': 0, 
//         's': 0, 
//         't': 0, 
//         'u': 0, 
//         'v': 0, 
//         'w': 0, 
//         'x': 0, 
//         'y': 0, 
//         'z': 0, 
//     }
   
//     for (let el of strArr) {
//         if(strArr[el]) strArr[el] = strArr[el] + 1
//         else strArr[el] = 1
//     }
   
//     return alphaCount
// }

// console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'))


const abc = s => {
    const alphaCount = {}
    let errCount = 0

    for(let el of s.toLowerCase().split('')) {
        if(alphaCount[el]) alphaCount[el] = alphaCount[el] + 1
        else alphaCount[el] = 1
    }

    for (let letter in alphaCount) {
       if(letter > 'm') {
        errCount += alphaCount[letter]
       }
    }

    return `${errCount}/${s.length}`
}


// console.log(abc('aaabbbbhaijjjm'))
console.log(abc('aaaxbbbbyyhwawiwjjjwwm')) //should be 8 not 3
// console.log(abc('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'))

