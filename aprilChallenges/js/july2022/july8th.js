const today = new Date
console.log(today)

//6kyu: Delete occurrences of an element if it occurs more than n times

//given a list and a number, remove duplicates from the list if it exceeds the amount the number specifies. 
//all numbers, no floats, strings, or symbols to be passes. return an array with the list only containing duplicates at or less than the number specified without reordering the list.
// ([20,37,20,21], 1) => [20,37,21] 
// ([1,1,3,3,7,2,2,2,2], 3) => [1, 1, 3, 3, 7, 2, 2, 2])



// take the array and...
//create a new list and iterate over it. Check if the current count is less than the given number. Adjust array as needed depening on the number the n repeats.


function deleteNth(arr, n) {
    const count = {}
    const ans = []

    for (let el of arr) {
        if (count[el]) count[el] = count[el] + 1
        else count[el] = 1
        if (count[el] <= n) ans.push(el)
    }
    return ans
}


//filter way:
// function deleteNth(arr, x) {
//     var cache = {};
//     return arr.filter(function (n) {
//         cache[n] = (cache[n] || 0) + 1;
//         return cache[n] <= x;
//     });
// }

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2))
