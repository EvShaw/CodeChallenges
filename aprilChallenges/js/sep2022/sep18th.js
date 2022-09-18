
const today = new Date
console.log(today)
//***************************************************************
//6kyu: Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

//given two integers, a and b, create a range that will collect the appropriate properties that fulfill the requriements: 89 = 8^1 + 9^2

//given two arguments, that can be any whole and positive NUMBER. Find the integers within the range that have the property of seperating the number into single digits and when raised to the consectuvie power of its index, equals the whole number. 
//89 = 8^1 + 9^2

// return a list/ array containing all the integers that meet the criteria or an empty array if no numbers in the range meet the criterea. 


//create an empty arr inside the loop to store return integers. 
// create a loop, starting at a, and running to (inclusive) b. 
//convert integers to string and split into arrays. 

//create a new array to temporarily store integers from a nested loop. 
//loop over the array, pushing the num raised to the index. 

//use the reduce method to reduce the array into a single number. 
//if this number is equal to i, push into the first arry. 

//return the first arr. 

function sumDigPow(a, b) {
    let aArr = []

    for(let i = a; i <= b; i++) {
        let iString = i.toString().split('')
        
        let bArr = []

        iString.forEach((num, i) => {
            bArr.push(num**(i+1))            
        })
        
        let bArrSum = bArr.reduce((pre, cur) => pre+cur)
        
        if(bArrSum == i) {
            aArr.push(i)
        }
    }
    return aArr
}

console.log(sumDigPow(90, 150))


//helper functions: 

function filterFunc(n) {
    return `${n}`.split("").map((x, i) => x ** (i+1)).reduce((a, b) => a+b) == n;
  }
  
  function *range(a, b) {
    for (var i = a; i <= b; ++i) yield i;
  }
  
  function sumDigPow(a, b) {
    return Array.from(range(a, b)).filter(filterFunc);
  }
