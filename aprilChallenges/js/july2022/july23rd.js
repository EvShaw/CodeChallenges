const today = new Date
console.log(today)

// 6kyu:

//given a string, break it down into pairds of two characters. If the string contains an odd number of characters, replace the missing second character with an underscore: 

//* 'abc' =>  ['ab', 'c_']
//* 'abcdef' => ['ab', 'cd', 'ef']

//entire array can be empty, if empty return emptty array. numbers, symbols, erc can exists, don't impacts anything. return the array with the paired characters. 

//create a function that accepts an array as its single paramater. From there, we will check the length of the array, if its not even, we will add an underscore with the push method to the end of the array. 

//Split the str into an array and then we'll loop over it, with a nested loop, pushing characters into a new array that will be returned. The nested loop will run twice, until fully iterating over the original str and joining them together. 



// function solution(str) {
//     // const strArr = str.split('')
//     // if(strArr % 2 != 0) strArr.push('_')

//     // const arrLength = strArr.length  
//     // const returnArr = []

//     // for (let i = 0; i < strArr.length; i++) {
//     //     let pairs = []

//     //     while(pairs.length < 2) {
//     //         pairs.push(strArr[i])
//     //         strArr.shift()
//     //     }
//     //     returnArr.push(pairs.join(''))
//     // }






//     // return returnArr
// }

//round 2: 

//take an string and split the string into pairs of two characters. If the string is odd, add an underscore to it. IF its empty return an empty array.

//break the string into section. How. 
//loop over it, pushing every 2 elements into an array and then pushing that array into the main array?

function solution(str) {
    if (!str) return []

    const strArr = str.split('')
    if (strArr.length % 2 != 0) strArr.push('_')

    const returnArr = []

    while (strArr.length > 0) {
        console.log(strArr.length)
        console.log(strArr)

        let pairs = []

        for (let i = 0; i < 2; i++) {
            pairs.push(strArr.shift())
        }
       returnArr.push(pairs.join(''))
    }
    return returnArr
}



console.log(solution("abcdefg"))


