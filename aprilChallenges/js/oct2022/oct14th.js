
// given an array of integers, determine if the numbers are in ascending order. 
// no two adjacent interfers where the left exceeds the right. 

// all inputs are valid. no edge cases. 
// return true or false only. 

// 0 and 1 are considered to be true

// loop over the array. 
// checking that the prev number is in fact less than the next number and traversing through the array. 
// reasign a binding with each iteration to capture the integer for comparison in the next. 
  //how would I use linked list/doubly linked list in this instance?

// return false if not, otherwise true. 



function inAscOrder(arr) {
  // let prevInt = arr[0]
  // let isItSorted = true

  // arr.forEach(num => {

  //   if(prevInt > num) {
  //     console.log(num)
  //     isItSorted = false
      
  //   } else {
  //     prevInt = num
  //   }
  // })
  // return isItSorted

  //refactored with every method: 

  return arr.every((_,i)=>i==0||arr[i]>arr[i-1]);
}

console.log(inAscOrder([1, 2, 4, 77, 19]))