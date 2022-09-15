//***************************************************************
//8kyu: create function taking two params. 
//return true if first param is true and second param is false. 
//otherwise return false. 

//inside the function, create a conditional checking that the first and second arguement are  truthy. If so, return true, if not, return false. 

function setAlarm(employed, vacation) {
    if (employed && !vacation) return true
    else return false
}

//***************************************************************
// 6kyu: Zero-Plentiful Array
//an array is called zero-plentiful if it contains multiple zeros AND every sequence of zeroes is at least 4 items long. 

//return the number of zero squences if the given array is zero-plentiful, otherwise return 0. 

//inside the function, create a count variable that will store the number of total sequences. 

//create another variable that will count as we loop through the array. 

//create a loop, checking that each element is both zero and its in squences of 4. 
//if so, add 1 to the total count
//return the number or 0 if none. 


// function zeroPlentiful(arr) {
//     if (!arr || arr.length <= 3) return 0
//     if (arr.every(num => num == 0)) return 1

//     let newArr = []
//     let tempArr = [] //throw all zeros here


//     arr.forEach(num => {
//         if (num == 0) {
//             tempArr.push(num)

//         } else if (num != 0 && tempArr.length >= 1) {
//             newArr.push(tempArr)
//             tempArr = []
//         }
//     })

//     newArr.push(tempArr)

 

//     if (newArr.every(arrLength => arrLength.length >= 4)) {
//        return newArr.length
//     } else return 0

// }

// function zeroPlentiful(arr){
//     var sequences = arr.map((x) => !x ? x : ',').join('').split(',').filter((str) => str);
//     return sequences.every((str) => str.length >= 4) ? sequences.length : 0;
//   }

// // console.log(zeroPlentiful([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0])) //0
// // console.log(zeroPlentiful([1000, 0, 1, 0, 0, 0, 0])) //0
// // console.log(zeroPlentiful([0, 0, 0, 0, 0])) //1
// // console.log(zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0])) //2
// // console.log(zeroPlentiful([])) //0
// console.log(zeroPlentiful([3,0,0,0,0,6,9])) //1
// // //                       0, 1,2,3,4 |
// // console.log(zeroPlentiful([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0]))