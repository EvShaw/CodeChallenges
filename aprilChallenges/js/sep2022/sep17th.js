
//***************************************************************
// multiply word in string: 

//take a string as the first parameter, this string will consist of a string. 
//use decond parameter, an integer, to find corressponding word in the given string. 
// use third parameter to multuple the word in the string, including a hyphen between each word. 

//inside the function, split the string into an array with the split method. 
//use the second paramater as the index, to get the correct word. 
//create an empty array to capture these stringed inputs. 
//repeat the words placed in the array. 
//use the join method with - to merge them into a singe string. 

// function modifyMultiply(str, loc, num) {
//     const strArr = str.split(' ')
//     const newArr = []

//     for (let i = 0; i < num; i++) {
//         newArr.push(strArr[loc])
//     }

//     return newArr.join('-')

// }

// with fill method: 
// function modifyMultiply(str,i,n) {
//     return Array(n).fill(str.split(' ')[i]).join('-');
//   } 

//one liner: 
// const modifyMultiply = (s, loc, num) => new Array(num).fill(s.split(' ')[loc]).join('-')

// console.log(modifyMultiply("This is a string", 3, 5))