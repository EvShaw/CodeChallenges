console.log('June 9th, 2022')

//8Kyu: 

//PREP:
//P:
// two lists of integers, a and b. 
//each list contains 3 intefers greater than 0
//these represent the dimentions of cuboids a and b. 
//find the difference of the volumes. 
//which is greater?
//R:
//cube each variable, subtract the difference and return that value. 
//E:
//3, 2, 5 (30), 1, 4, 4, (16) => 14
//P:
//create the function that accepts the two values. 
//cube each value and then subtract them from eachother
// return the difference

function findDifference(a, b) {
    const aSum = a.reduce((acc, c) => acc *= +c, 1) 
    const bSum = b.reduce((acc, c) => acc *= +c, 1)
    
    const total = Math.abs(aSum-bSum) 
    return total
  }
findDifference([3, 2, 5], [1, 4, 4]) //14

// refactor to oneline: 

const findDifference = (a, b) => Math.abs(a.reduce((acc, c) => acc *= +c, 1) - b.reduce((acc, c) => acc *= +c, 1))