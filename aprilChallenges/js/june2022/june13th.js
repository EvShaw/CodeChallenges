const today = new Date
console.log(today)

// 8kyu: Grasshopper - Peronalsized Message

//PREP:
//P:
// two arguements, one for the boss and nother for a guest. If boss is passed into funciton, print out one statement, if guest is passed in, pring another. 
//R:
//return as is. 
//E:
// 
//P:
// set up a conditional that checks if boss name was passed, if so return as is. set up additonal statment for strangers. 

const greet = (name, owner) => name === owner ? "Hello boss" : "Hello guest"