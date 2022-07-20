const today = new Date
console.log(today)


// take a positive number as an argument and return its multiplicative persistence. 

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)


//taking the original number, split it into an array, then multiply each number. Take the total of that number, and repeat, splitting it and multiplying it. Continue this process untill reching a single digit number. 

//take the number, convert it to a string. Then split it into an array. From there I am going to iterate over each string number, converting it back to a number and then multiplying it with reduce, returning the number and repeating the process if greater lengththan 1. 
// Test with a recurrsive approach, to minimize code. checking the length with each pass. 

function persistence(num) {
    let times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }

console.log(persistence(39))


