console.log('May 28th, 2022')

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

//PREP:
//P:
//- giving me an array of nums. and a target number. two arguments. Search array for two items that === the target value. 
//R: 
// - return the indices of these itesm in a list like (index1, index2)
//E:
// - Example: 
// [1, 2, 3] 4 === (0, 2)
// [1234,5678,9012], 14690 === (1, 2)
//P:
// I could run for loop with an accumulator(reduce method)?
// Loop through the array comparing index 0 + index[i] === value? then move onto the next one till its found. 






function twoSum(numbers, target) {
    const numArr = [0, 1]
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target && numbers[i] !== numbers[j]) {
                numArr[0] = j
                numArr[1] = i
                break;
            }
        }
    }
    return numArr
}

// console.log(twoSum([1, 2, 3], 4))
// twoSum([1234,5678,9012], 14690)
console.log(twoSum([1234,5678,9012], 14690))