const today = new Date
console.log(today)

// 6kyu: Give me adiamond: 

//PREP:
//P:
//given a number, make it a diamond. Using escape \n to create the new lines. can be given negative numbers as even numbers. 
//R:
//return a diamond. If number passed is not odd or positive, return null     
//the number passed will dictate the total size of the diamond. The return will be akin to: 5 = "  *\n ***\n*****\n ***\n  *\n
//E:
// 3: 
//          *
//         ***
//          *

//P:
//First I will set up the logic to check for negative and even numbers returning null if given one. 
//after getting the odd number, I will set up a loop that will run X times. Where x is the number passed into my function. X will determine how big the diamon will get with each iteration creating a new row. 
//I will need to use the proper escaping ('\n') as requested in the prompt and will need to insert spaces on each side of the ascending and desending rows. 



//number will create the total width and height of the diamond. 

function diamond(n) {

    if (n < 0 || n % 2 === 0) return null;

    let numSpace = 0;
    let result = '*'.repeat(n) + '\n'; // middle row

    for (let numStar = n - 2; numStar >= 1; numStar -= 2) {
        let nextRow = ' '.repeat(++numSpace) + '*'.repeat(numStar) + `\n`;
        result = nextRow + result + nextRow;
    }

    return result;

}

console.log(diamond(3))

    // return diam.join('\n')