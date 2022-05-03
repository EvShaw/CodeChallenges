// console.log('hi')

// function arrayDiff(a, b) {
//     myArr = []
//     for (let i = 0; i <= a.length; i++) {
//         for (let j = 0; j <= b.length; j++) {

//             if (a[i] === b[j]) {
//                 myArr.push(a[i])
//                 console.log(`pushed ${b[j]}`)
//             } else {
//                 console.log(a[i])
//             }


//         }
//     }
//     // console.log(myArr)
// }

// arrayDiff([1, 2], [1])
//--------------------------------



// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function twoXmore(obj) {
//       for (let key in obj) {
//           obj[key] *= 2
//       }
//   }

// twoXmore(menu)
// twoXmore(menu)
// console.log(menu)


// function isEmpty(schedule) {
//     for (let key in schedule) {
//         if (obj[key] === undefined) {
//             console.log(true)
//         } else {
//             console.log(false)
//         }

//     }
// }

// let schedule = {};
// alert( isEmpty(schedule) ); // true
//  schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// function isEmpty(obj) {
//     for (let key in obj) {
// // if the loop has started, there is a property return false;
//     }
//     return true;
// }

// function thereWeGo(str) {
//     if (str === undefined) {
//         return false
//     } return true
// }

// const thereWeGo = text => text == undefined ? console.log('nothin') : console.log(text)
// thereWeGo()

// const mingit  = ( (a, b) => a < b ? a : b)

// let number = mingit(22, 3)
// // console.log(number)
// function CoffeeMachine(brand, style, type, color) {
//     this.brand = brand
//     this.style = style
//     this.type = type
//     this.color = color
//     this.powerOn = function() {
//         //code here
//     }
// }


// class CofMachine{
//     constructor(brand, style, type, color) {
//         this.brand = brand
//         this.style = style
//         this.type = type
//         this.color = color
//     }
//     powerOn() {
//         console.log('on now')
//     }
//     powerOff() {
//         console.log('Powered Off')
//     }
//     steamIt() {
//         console.log('steaming')
//     }
// // }
// let arr = [1, 15, 2]
// // let user = users.find((item) => item.id === 2)
// arr.sort((a, b) => a - b)
// arr.forEach( ele => console.log(ele))
// arr.splice(1, 0, 22)
// console.log(arr)
// const todos = todo.map((ele => return ele))

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove","Keep", ...] --> ["Keep", "Keep","Keep", ...]

// const newArr = []

// function removeEvery2nd(myArr) {

//     myArr.forEach( (ele, i) => {
//         if (i % 2 === 0) {
//             newArr.push(ele)
//         }
//         console.log(ele, i)
//     })

// }


// removeEvery2nd(["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"])


// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// function howMuchILoveYou(nbPetals) {
//     const petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
//     return petals[(nbPetals - 1) % petals.length]
// }

function howMuchILoveYou(nbPetals) {
    const petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    console.log(petals[(nbPetals - 1) % petals.length])
}

howMuchILoveYou(26)