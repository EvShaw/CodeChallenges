const today = new Date
console.log(today)


//Factorial: 

//given a non-negative number (n), is the product of all positive intergers less than or equal to n?
    //for ex: 5! = 5 * 4 * 3 * 2 * 1 = 120
    // 0 = 1

    //create function that accepts a single argument (called n). 
        //if input is bleow 0 or above 12, throw an exception of type: ArgumentOutOfRangeException
        //rangeError
        
    //return the number. 

    //inside the function -> create a range that checks that n is between 0 and 12, otherwise throw a rangeError.
    //creat an empty array(numArr) that will store all the numbers from 1 to n in it with a for loop, allowing me to then use the reduce method to multiply those numbers and get my value

function factorial(n) {
    if(n < 0 || n > 12) return 'rangeError'
    else if(n === 0) return 1

    const numArr = []

    for(let i = 1; i <= n; i++) {
        numArr.push(i)
       
    }

    let returnNum = numArr.reduce((acc, c) => acc * +c, 1)
    return returnNum
}


console.log(factorial(3))