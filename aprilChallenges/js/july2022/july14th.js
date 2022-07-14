const today = new Date
console.log(today)

//take arr of strings, return sorted array ordered by length (ascending)
// can be an empty string => at the beginning of the sort. 
//return -> as an array
// ["Beg", "Life", "I", "To"]) => ["I", "To", "Beg", "Life"]

// function => accept the array. 
// create variable locally in function
// string -> sort with function comparing the lengths and 



// function sortByLength(array) {
//     // Return an array containing the same strings, ordered from shortest to longest
//     let myArr = array.sort((a, b) => a.length - +b.length)
//     return myArr
// };

// // 7kyu: First-Class Function Factory

// function factory(x){
//     return array => array.map( a => a*x );
// }



// function index(array, n) {
//     if(array[n]) return array[n] ** n
//     else return -1
// }

// const index = (array, n) => array[n] ? array[n]**n : -1
// console.log(index([1, 2, 3, 4], 2))

// const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;

// function hero(bullets, dragons){
//     if(dragons*2 <= bullets) return true;
//     else return false
// }

// function hexToDec(hexString) {
//     const hexa = { 'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15 }

//     if (!hexString < 10) {
//         return hexa[hexString]
//     } else {
//         return +hexString
//     }
// }

// console.log(hexToDec(''))

function hexToDec(hexString){
    return  parseInt(hexString, 16);
   }