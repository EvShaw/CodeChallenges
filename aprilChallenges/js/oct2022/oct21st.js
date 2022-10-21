const today = new Date
console.log(today.toLocaleString())

// given two arrays (a, b), check wheterh the two arrays have the same 'elements', with the same multiplicities
//same as in: Elements b are the same as elements squared, regardless of the order. 

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// a returns ture becasue Array a contains the squared value of all the integers of the array b. 

//if a or b are null, [], or undefined, return false. 

//the two arrays have the same sice. 

// *****************

//create the function. 
// first pass: 
//sort each array in ascending order with the sort method. 
//then run a loop, comparing a[0] with Math.sqrt to b[0]. walk all the way throught he array. 
//this linear approach is better than the quadratic way, but is it possible to convert to constant time?

// function comp(array1, array2) {
//     if (array1[0] == undefined || array2[0] == undefined) return false
//     if (array1.length != array2.length) return false

//     const aSorted = array1.sort((a, b) => a - b)
//     const bSorted = array2.sort((a, b) => a - b)

//     for (let i = 0; i < aSorted.length; i++) {
//         if (aSorted[i] != Math.sqrt(bSorted[i])) {
//             return false
//         } else return true
//     }
// }

// //with map method: 

// function comp(array1, array2) {
//     //square every element in array 1
//     array1 = array1.map(v => v * v)

//     //using a ternary, check for array2 being truthy. If so, reduce all of arr1 to a single integer. Does this number which we squared every element above and then summed together === array 2 when reduced to a single value? If so true returns, otherwise return false. 
//     return array2 ? array1.reduce((a, b) => a + b, 0) === array2.reduce((a, b) => a + b, 0) : false
// }

// console.log(comp([3, 10, 2, 3, 8, 3, 9, 6, 9, 9, 8, 4, 4, 9, 7, 5], [4, 36, 9, 25, 16, 49, 16, 9, 100, 10, 81, 81, 81, 81, 64, 64]))
// // console.log(comp([[0, 8, 0, 8, 5, 8, 10, 0, 9, 0, 6, 2, 5, 7, 5, 2, 2, 10, 2, 3, 5, 10, 4, 2]], [100, 64, 100, 25, 81, 100, 0, 0, 4, 4, 10, 64, 25, 0, 49, 4, 4, 36, 25, 64, 16, 0, 25, 4]))

// getting errors on both examples above, the below does work

function comp(array1, array2) {
    debugger;
    if(array1 === null || array2 === null) {
      return false;
    }  
    if(!array1.length) {
      return true;
    }

    for(var i = 0; i < array2.length; i++) {
      if(array2[i] === Math.pow(array1[0],2)) {
        array1.shift();
        array2.splice(i, 1);
        return comp(array1, array2);
      }
    }
    return false;  
  }