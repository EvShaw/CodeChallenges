// given an array as the first argument, and a number as the second. return an array with only the first N elements inside it. 

//array is always whole, integers. second argument is always a number. no edgecases
//retrun the array with N elements inside it. 

//create a function
// create an empty array 
//create a loop that will run N (2nd argument) number of times. 
// pushing elements into the new array from the old array. 
//return the new arr. 


function take(arr, n) {
    if (!arr) return []
    const newArr = []

    for (let i = 0; i < n; i++) {
        if (arr[i] != undefined) {
            newArr.push(arr[i])
        }
    }

    return newArr
}
