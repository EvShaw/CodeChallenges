const today = new Date
console.log(today)

//lvl 6kyu: Sort the Odd: 

//given an array of NUMBERS, sort the odd numbers in ascending order while leaving the even numbers at their original positions. 

//  ex: 
//[7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  => [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//question and will try: could I filter out and leave in place '' just the odd numbers.

// create a function that accepts a paramater that contains an array
// filter, map, and or iterate to extract all my odd numbers from the array. 
//create an empty array to store and sort the odd numbers. 
//then either create a new array or iterate over the old array and replace the odd numbers with the sorted odd numbers. 
//return the array with the odd numbers sorted. 

function sortArray(array) {
    if(!array) return []
    const oddNums = array.filter(el => el % 2 !== 0).sort((a, b) => a - b)
    const newArr = []
    console.log(oddNums)

    array.forEach(el => {
        if(el % 2 == 0) newArr.push(el)       
        else newArr.push(oddNums.shift())
    })

    return newArr
}

console.log(sortArray([5, 3, 2, 8, 1, 4, 11]))

// /refactor with map and filter method: 

// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
//   }



