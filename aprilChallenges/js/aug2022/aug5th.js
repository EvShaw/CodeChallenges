const today = new Date
console.log(today)

//given a list of integers, take that list and find an index of N, where the sum of the integers on the left of N is equal to the sum of the integers of the right of N. 
//always a number, can be negative as well as zero. 

//return n, which is the integer where the left is equal to that on the right. 
//ex: 1, 2, 3, 4, 3, 2, 1, => 3(index)
//the third index element: 4, as 1, 2, 3 is the same as 3, 2, 1

//create a function that accepts an array. 
//create two bindings, one called left and one called right. 
// these will be for push elements, iterating over, and comparting to each other. 

//create another binding, called mid. This will be the index we are returning

//take in a number, storing the entire arr in the binding called left. From here, we will remove one element to the right binding and compare, if not the same, remove one more. continue removing and adding these elements until both left and right are the same. if not possible, then return -1. If given an empty array, return 0. if multiple answers are given, return the lowest correct index. 


function findEvenIndex(arr) { //create function that accepts array. 
    let left = 0; //create variable, start at 0, will hold sum of left side
    let right = 0;//create variable, start at 0, will hold sum of right side
    const reducer = (accumulator, currentValue) => accumulator + currentValue; //create function that simplifies the call back on a reduce method. Use reduce to get the sum of each side. 

    if (arr.length == 0) { //create conditional, checking if array is empty
        return -1; //if so, return -1
    } //close conditional

    for (let i = 0; i < arr.length; i++) { //create for loop, starting at 0, running for each element in the array by check the length, and incrementing by one with each iteration. 
        if (i == 0) { //create nested conditional that starts with the first index of the array
            right = arr.slice(1).reduce(reducer, 0); //use slice method th extract numbers to the right of the first nubmer, using reduce method and call back the reducer method created to sum all the numbers, starting at 0. 
            if (right === i) { //check is the sum of right equals i, if so
                return i; //return i
            } //close if statement
        } else { //else conditional to the if block
            left = arr.slice(0, i).reduce(reducer, 0); //use slice moethod, starting at index of 0 and ending with index of i(loop) and sum the numbers, capturing it in the left variable. 
            right = arr.slice(i + 1).reduce(reducer, 0); //use slice moethod, starting at index of i, adding 1, and then sum the numbers, capturing it in the left variable. 
            if (left == right) { //if left equals right...
                return i; //return i
            } //close the if statement
        } //close the else statement
    } //close the loop

    return -1; //return -1 if we didn't return anything else. 
} // close the function. 

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))

