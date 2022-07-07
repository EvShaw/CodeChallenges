console.log('May 9th')

// function noGeese(arr) {
//     const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
//     console.log(arr.filter( item => !geese.includes(item)))
// }
// noGeese(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])

// Array.prototype.filter = function( ruleCondition ) {
//     const arr = []
//     this.forEach( function(currentValue) {
//         if (ruleCondition(currentValue)) {
//             arr.push(currentValue) 
//         } else {
//             return arr
//         }
//     })
// }

// Array.prototype.filter = function(fn) {
//     return this.reduce((s, a) => fn(a) ? (s.push(a), s, []))
// }

// const arr = [1, 2, 3]

// // const newArr = arr.map(ele => ele*2)
// const newArr = arr.map(x => x*2)
// console.log(newArr)



// Write a function which maps a function over the lists in a list:
// function gridMap(fn,xss) { return [[]]; }
// Example 1:
// const xss = [ [1,2,3]
//             , [4,5,6]
//             ];

// gridMap( x => x+1 , xss )  =>  [[2,3,4],[5,6,7]]
// gridMap( x => x**2 , xss )  =>  [[1,4,9],[16,25,36]]
// Example 2
// const xss = [['h','E','l','l','O'],['w','O','r','L','d']];

// gridMap( x => x.toUpperCase() , xss )  =>  [['H','E','L','L','O'],['W','O','R','L','D']]

// function gridMap(fn, a) {
//     return a.map(x => x.map(fn))
// }

// const gridMap2 = ((fn, a) => a.map(x => x.map(fn)))