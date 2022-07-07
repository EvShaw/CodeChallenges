const today = new Date
console.log(today)

//PREP:
//P:
//  given a string containing numbers and letters (upper and lower) only. Count how mamy times a given letter or number appears in the string. 
// b and B = 2 not one lower and one upper.
//R:
// return the count of distring characters as they appear. 
//E:
//P:
// take the string and break it down into an array so that I can then iterate over it. running a second loop inside the first loop to compare each element with the next. 
// any duplicates will be pushed to a newArr and from there I can break down how many times it occurs, 

function duplicateCount(text) {
    const textArr = text.toLowerCase().split('').sort()
    console.log(textArr)
    let count = 0
    let uniques = []

    for (let i = 0; i < textArr.length; i++) {

        for (let j = 0; j < textArr.length; j++) {
            if (textArr[i] === textArr[j+1]) {
               uniques.push(textArr[i])
               count++
            }

        }

    }
    console.log(textArr)
    console.log(count)
}


console.log(duplicateCount("aabBcde")) //2
console.log(duplicateCount("Indivisibilities")) //2