//***************************************************************
//@271: MrFreeze
// -Freeze the object so it can't be modified. 

//use the freeze method, passing in the object that we want to freeze: 

// Object.freeze(MrFreeze)

//***************************************************************
//@270: Is this my tail?
// correct the function to that the second argument is the same as the last letter of the first argument. 
//if correct return true, else return false. 

// function correctTail(body, tail) {
//     let sub = body.substr(body.length - tail.length)

//     if (sub === tail) return true
//     else return false

// }


//***************************************************************
//@269: Coefficients of the Quadratic Equation 

// function quadratic(x1, x2) {
//     return [1, -(x1 + x2), (x1 * x2)]
// }

//***************************************************************
//@268: Merge two sorted arrays into one

//gived two sorted arrays containing integers ONLY, merge them into a single sorted array. 
//no edgecases. 
// return as a sorted array. 

// inside the function: use the concat method to 'glue' the two arrays together.
// append the sort method to rearrange the array in ascending order. 
// remove any duplicates with the filter method passing in two arguemtns to compare against. 

//revise: capture and glue the arrays together with the concat method and sort them with the sort method. (redundant sort here?)
// create an empty object that we will use to 'hash' the value together and count how many times each value appears. 
//open a for of loop that will count the integers and store them. 
//inside the for of loop, open a conditional that will check if its already in the obj, if so, add one, if not start at one. 
// open a second loop, pushing each property into an array and converting to a Number type. 
//sort again (remove first sort) and push to arr binding. 

function mergeArrays(arr1, arr2) {
    let sortedArr = arr1.concat(arr2)
  
    const count = {}
    const arr = []

    for(let el of sortedArr) {
        if(count[el]) count[el] = count[el] + 1
        else count[el] = 1
    }

    for(let prop in count) {
        arr.push(+prop)
    }
    
    return arr.sort((a, b) => a - b)
    // return Object.keys(count)
}

// console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))