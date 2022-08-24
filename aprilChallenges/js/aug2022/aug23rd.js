//****************************************************************
//Total daily goal: 13.
//Currently completed: 3/13

// @302: Sort and Star

// given a list of strings, sort is a;phabetically, case sensitive, based on the ASCII value and the return the first value. 
//input *** between each character. 

// create a function that accepts an array as an argument. 
// sort the array with sort(). then iterate over the arrays first element with a loop, adding *** between each letter, exluding the last. which can be trimmed with slice. join the looped over array back into a single word and return.

// function twoSort(s) {
//     const sortedArr = s.sort()
//     let returnArr = []

//    sortedArr[0].split('').forEach(letter => {
//         returnArr.push(letter + '***')
//     })

//     console.log(returnArr.join('').slice(0, -3))
//     return(returnArr.join('').slice(0, -3))

// }

// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))

// @301: 