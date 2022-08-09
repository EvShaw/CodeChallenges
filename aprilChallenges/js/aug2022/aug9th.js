const today = new Date
console.log(today)

// Cesar is the best that ever was. Like no Cesar ever was. To be on the top like the Cesar he is... 

// 7 Kyu:

// Descending Order
    //make a function, take non negative int, whole, no string, as argument and return it with its digits in descending order...
    //return as a number. 

    // ex: 

    // Input: 42145 Output: 54421

    // Input: 145263 Output: 654321

    // Input: 123456789 Output: 987654321


    // create a function that accepts a number. 
        // take the argument and capture as a variable, converting to a string. 
            //so I can iterate over it. For loop, for each, map, filter. 
                //sort method with call back to get the numbers reorganized in a descending order. 
                    // join the array and return as a sinlge number, convert number. 

function descendingOrder(n) {
    let strArr = Number(n.split('').sort((a, b) => b - a).join(''))
    
    return strArr
}

// refactor: 

const descendingOrder = n => Number(n.toString().split('').sort((a, b) => b - a).join(''))



