const today = new Date
console.log(today)


// 8 kyu
// look to see if the array given contains any missing sheep. 

// create a function, that accepts a single array as an argument. 
// create a sheepCount variable to store the count from the loop
//inside this function, I am going to loop over the array with a conditional, checking each index for the correct boolean. If true, count++ otherside ignorre. 

// Return a the total sheep

// function countSheeps(arrayOfSheep) {
//     let sheepCount = 0

//     arrayOfSheep.forEach(sheep => {
//         if (sheep == true) sheepCount++
//     })

//     return sheepCount
// }

//refactor with filter: 

// const countSheeps = arr => arr.filter(Boolean).length

// 7 kyu

// taking in a string array, put a '|' into the middle of each element. 
// if the length of the string is an even number, use the insert method to place the '|' in the middle. 
// if the string length is odd, use the replacement method and replace the middle character with a '|'
//do not change the original array, returning a new array //map method negates this aspect. 

//      isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
//      isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
//      isolateIt(["1234","56789"]) should return ["12|34","56|89"]

// create the function, accepting a sigle argument. 
// checking the length of the array passed in, determine if its even or odd. 
//using the map method;
//if odd, replace the middle letter with |

// if even, insert a | into the middle. 


// function isolateIt(arr) {
//     let oldArr = arr
//     let newArr = oldArr
//     return newArr.map(v => {
//         if (v.length % 2 == 0) { return v.slice(0, v.length / 2) + '|' + v.slice(v.length / 2) };
//         if (v.length % 2 !== 0) { return v.slice(0, v.length / 2) + '|' + v.slice((v.length / 2) + 1) };
//     })
// }

// function isolateIt(arr){
//     return arr.map(s=>s.slice(0,s.length/2)+"|"+s.slice(-s.length/2));
//   }

// console.log(isolateIt(["abcd", "efgh"]))
// console.log(isolateIt(["abcde","fghij"]))
// console.log(isolateIt(["1234","56789"]))



