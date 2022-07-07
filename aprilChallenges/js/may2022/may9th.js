console.log('May 9th')



//p:
//r:
//e:
//p:


// function stringClean(s){
//     const alpha = 'abcdefghijklmnopqrstuvwxyz~#$%^&!@*():;\"\'.,?'   
//     const key = alpha.split('')

//     let arr = []
//     for (let i = 0; i < key.length; i++) {
//         if (key[i] !== s[i]) {
//             arr.push(s[i])
//         } else {
//             console.log('no')
//         }

//     }
//     console.log(arr.join(''))

//   }




// function stringClean(s) {
//     const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     const arr = s.split('')
//     const newArr = []
    
//     for(let i = 0; i < nums.length; i++){
//         for (let j = 0; j < newArr.length; j++) {
//             if (i === j) {
//                 console.log(newArr[j])
//             }
//         }
//     }

// }




// stringClean('E3at m2e2!!')
// // stringClean("123456789")

// function stringClean(s){
//     while(s.indexOf(0) >= 0) {s = s.replace(0, '')}
//       while(s.indexOf(1) >= 0) {s = s.replace(1, '')}
//         while(s.indexOf(2) >= 0)  {s = s.replace(2, '')}
//           while(s.indexOf(3) >= 0)  {s = s.replace(3, '')}
//              while(s.indexOf(4) >= 0)  {s = s.replace(4, '')}
//                 while(s.indexOf(5) >= 0)  {s = s.replace(5, '')}
//                    while (s.indexOf(6) >= 0)  {s = s.replace(6, '')}
//                       while (s.indexOf(7) >= 0)  {s = s.replace(7, '')}
//                          while (s.indexOf(8) >= 0)  {s = s.replace(8, '')}
//                             while (s.indexOf(9) >= 0)  {s = s.replace(9, '')}
//     return s
//    }

//    function stringClean(s){
//     // Function will return the cleaned string
//   var result = '';
//   for(var i=0;i<s.length;i++) {
//     if(isNaN(s[i])||s[i]==' ') result+=s[i]; 
//     }
//   return result;
//   }

//   function stringClean(s){
//     return s.split('').filter((n) => n != parseInt(n)).join('');
//   }

//   function stringClean(s){
//     var isNumber = {
//       '0': true,
//       '1': true,
//       '2': true,
//       '3': true,
//       '4': true,
//       '5': true,
//       '6': true,
//       '7': true,
//       '8': true,
//       '9': true,
//     };
    
//     var finalString = '';
//     for (var i = 0; i < s.length; i++) {
//       if (!isNumber[s[i]]) {
//         finalString += s[i];
//       }
//     }
    
//     return finalString;
//   }

function reverseUno(s) {
   const arr = s.split(' ').reverse().join(' ')
   console.log(arr)
}
reverseUno('john McClane')