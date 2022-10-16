console.log('Happy Sunday!')

// given a sequence of integers from 1 to n, find the number that MIGHT have one deleted from it
// take the second argument give and find what number was/ is missing. 
// if both arrays are the same, return the int 0

// check if the arrays are the same legnth, if so return 0
// sort the second array for comparrison purposes.
// inside the array, run a loop comparing each number in the first array to the second SORTED array. 
// this can scale disproportionatly due to O(N^2). How would I best return the code I want?

// if the loop is the same, return 0 otherwise return the number that is missing. 

function findDeletedNumber(arr, mixArr) {
    // if(arr.length == mixArr.length) return 0

    // mixArrSorted = mixArr.sort((a, b) => a - b)

    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i] != mixArrSorted[i]) return arr[i]
    // }

    //refactor with filter method: 

    return arr.filter(el => mixArr.indexOf(el) == - 1)[0] || 0
}

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]))
console.log(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8])) //5

