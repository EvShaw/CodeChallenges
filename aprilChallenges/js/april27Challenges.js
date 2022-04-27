console.log('hi')

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x) {
    // console.log(x.reduce((acc, c) => +acc+ +c, 0))
    return x.reduce((acc, c) => +acc + +c, 0)
}

sumMix([9, 3, '7', '3'])
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])


// Map version:
function sumMix2(x) {
    return x.map(a => +a).reduce((a, b) => a + b);
}



// -----------------------------Switch it Up!

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.
//127

function switchItUp(number) {
    switch (number) {
        case 1:
            return 'One'
            break;
        case 2:
            return 'Two'
            break;
        case 3:
            return 'Three'
            break;
        case 4:
            return 'Four'
            break;
        case 5:
            return 'Five'
            break;
        case 6:
            return 'Six'
            break;
        case 7:
            return 'Seven'
            break;
        case 8:
            return "Eight"
            break;
        case 9:
            return 'Nine'
            break;
        default: 
            return undefined
            break;
    }
}

switchItUp(1)
switchItUp(6)
switchItUp(9)