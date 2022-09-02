//***************************************************************
//@250: For Twins: 1. Types
// taking two paramaters, variable and type, check if type of cariable is matching type. return true if so, false if not. 

//inside the function, open a conditional. 
//using the typeop operator, compare the first argument to the second with ===

// function typeValidation(variable, type) {
//     if(typeof  variable === type) return true
//     return false 
// }

// const typeValidation = (variable, type) => typeof variable === type

//***************************************************************
//@249: convert speeds
//convert km per hour to cm per second
//1 km per hour == 27.7778 (27) cm per second. 
//use floor, 

// function cockroachSpeed(s) {
//     return Math.floor(s * 27.77777778)
// }

//***************************************************************
//@248: 
//find the wolf inside the array, counting in reverse. Whats the index before it?

//search in the array, and return the lastIndexOf() the string 'wolf'. 


function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
  
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  }
