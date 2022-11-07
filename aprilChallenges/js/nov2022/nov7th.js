const today = new Date;
console.log(today.toLocaleString())

// random 7kyu: 

// given a string, figure out when < > cross paths, with each - counting as a space. 

//inside the function, split the string into an array. 
// determine where the first person moving right is >
// determin where the first person movign left is <
// if they have not crossed paths: --<--->-- (-1) then determin how many steps they will take before they connect. 


function contact(hallway) {
    let start = null;
  const distances = [];

  for (let i = 0; i < hallway.length; i++) {
    const symbol = hallway[i];

    if (symbol === '>') {
      start = i;
    }

    if (symbol === '<' && start != null) {
      distances.push(i - 1 - start);
      start = null;
    }
  }

  const min = Math.min(...distances);

  return distances.length ? Math.floor(min / 2) + 1 : -1;
}





console.log(contact('---->---<')) //2
console.log(contact('----<--->')) //0
console.log(contact("----><-----")) // 1
console.log(contact('>>>>--<<<<<<<<<<<<<<<<<<<<')) // 2
console.log (contact('>---------------<--------------------------<-------->---------<------->----------<----<---->>----------<------->>>---------------<<------>')) // 5




//     //convert to array and find the last > from forward loop, and the last < from backward loop. This approach is linear/O(2n) => O(N)

//     const strArr = hallway.split('')

//     let goingRight = ''
   
//    //traverse right 
//     for(let i = 0; i < strArr.length; i++) {
//         if(strArr[i] == '>') {
//             goingRight = i
//             // goingRight = strArr.indexOf(strArr[i])
//         } 
//     }

//     // console.log(goingRight)


//     let goingLeft = ''
//     //traverse left
//     for(let i = strArr.length; i > 0; i--) {
//         if(strArr[i] == '<') {
//             goingLeft = i
//             // goingLeft = strArr.indexOf(strArr[i])
//         } 
//     }
//     // console.log(goingLeft)


//     //how many steps between the two?
//     let totalSteps = (goingRight - goingLeft) / 2

//     return(totalSteps)