
// function sumMix(x) {

//     return x.reduce((acc, c) => +acc + +c, 0)
// }

// sumMix([9, 3, '7', '3'])
// sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])


// // Map version:
// function sumMix2(x) {
//     return x.map(a => +a).reduce((a, b) => a + b);
// }



// // -----------------------------Switch it Up!

// function switchItUp(number) {
//     switch (number) {
//         case 1:
//             return 'One'
//             break;
//         case 2:
//             return 'Two'
//             break;
//         case 3:
//             return 'Three'
//             break;
//         case 4:
//             return 'Four'
//             break;
//         case 5:
//             return 'Five'
//             break;
//         case 6:
//             return 'Six'
//             break;
//         case 7:
//             return 'Seven'
//             break;
//         case 8:
//             return "Eight"
//             break;
//         case 9:
//             return 'Nine'
//             break;
//         case 0:
//             return 'Zero'
//             break;
//         default:
//             return undefined
//             break;
//     }
// }

// switchItUp(1)
// switchItUp(6)
// switchItUp(9)

// // -----------------------------Simple Multiplication:


// function simpleMultiplication(number) {
//     if (number % 2 === 0) {
//         return number * 8
//     } else {
//         return number * 9
//     }
// }

// const checkParityAndMultiply = number => number % 2 === 0 ? number * 8 : number * 9

// const checkNums = n => n * (n % 2 ? 8 : 9)

// // console.log(checkNums(3))

// // ----------------------------- You're a square!


// var isSquare = function (n) {

//     if (Math.pow(Math.floor(Math.sqrt(n)), 2) === n || n === 0) {
//         // console.log(true)
//         return true
//     } else {
//         // console.log(false)
//         return false
//     }

//     return Math.sqrt(n) % 1 === 0 //<--- Refactored version

// }

// isSquare(26)


// // ----------------------------- Chain me!
// function chain(v, fns) {
//     return fns.reduce(function (v, fn) { return fn(v) }, v);
// }

// function chain(x, fns) {
//     return fns.reduce(function (x, fn) {
//         return fn(x)
//     }, x)
// }

// // Regex validate PIN code

// // ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// // If the function is passed a valid PIN string, return true, else return false.

// // Examples (Input --> Output)
// // "1234"   -->  true
// // "12345"  -->  false
// // "a234"   -->  false

// // function validatePIN(pin) {


// // }

// // validatePIN('1d1a')

// // //learning regEx: 

// // const re = /ab+c/

// // const re2 = new RegExp('ab+c');

// // // -----------------------------Odd March Bits 8 bits

// function bitMarch (n) {
//     var arr = [ 0, 0, 0, 0, 0, 0, 0, 0 ]
//     var len = arr.length
//     var res = []
//     for (let i = len - n; i >= 0; i--) {
//       let temp = [...arr]
//       for (let j = 0; j < n; j++) {
//         temp[i + j] = 1
//       }
//       res.push(temp)
//     }
//     return res;
//   }

//   function bitMArch(n) {
//       const arr = [ 0, 0, 0, 0, 0, 0, 0, 0 ]
//       const len = arr.length
//       const res = []
//       for(let i = len - n; i >= 0; i--) {
//           let temp = [...arr]
//           for(let j = 0; j < n; j++) {
//               temp[i+j] = 1
//           }
//           res.push(temp)
//       }
//       return res
//   }

// // // ----------------------------- Cat years, Dog years

const humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 15
    let dogYears = 15

   if (humanYears > 2) {
       console.log([humanYears, ((humanYears - 2)*4)+24, ((humanYears - 2)*5)+24])
   }


}

humanYearsCatYearsDogYears(10)
//24?


//   10 64 74

//   10 56 64