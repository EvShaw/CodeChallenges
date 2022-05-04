console.log('May 4th')

// Given an array of integers, return a new array with each value doubled.

// For example:

//PREP:
// P: Take an array,
// R: return new array with values doubles
// E: map and double if value is num
// P: Pseudo -
// Set up function that accepts arr as its paramater.
//map will loop through eleements na dcheck if nubmer, if so return it doubled.


// function maps(x){
//     return x.map( num => num * 2)
// }

//console.log(maps([1, 2, 3]))


// const heights = characters.map(character => character.height)

// PREP: 
//p: function that takes two params. using the second arg to map over the first one
//I can expect numbers and strings to be passed in. 
//R: they want me to return an array nested inside another array
//E: 

//   function gridMap(fn,a) {
//     return a.map(x=>x.map(fn))
//   }

//   const gridMap = ((fn, a) => a.map(x => x.map(fn)))

//----------------------------------------------------------Holiday VI - Shark Pontoon:

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".

//PREP: 
//P: A function with 5 variables that change the outcome. 
//R: return a string statement based on a condiditional. 
//E: 4 numbers, one boolean. 
//P: 

//check pontoon distance and shark distance. What is closer?

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//     dolphin ? sharkSpeed = sharkSpeed / 2 : sharkSpeed

//     if (sharkDistance /sharkSpeed > pontoonDistance / youSpeed) {
//        return "Alive!"
//     } else {
//         return "Shark Bait!"
//     }
// }

