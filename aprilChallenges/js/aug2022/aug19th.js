const today = new Date
console.log(today)


//heads - tails swapped, switch them back. 
// given an array, containing three values, arrange the array so that the animal is correctly oriented. 

// create a function that accepts the argument (the array)
// from there I am going to loop over the array with a forEach loop, looking at all the possible arguemnts to manipulate as needed. . 
// with each iteration, we will use a BOOLEAN (conditional) to check what each item is and where it should be. 
//reasign the body parts as needed : top, mid, bottom. 

function fixTheMeerkat(arr) {
   return arr = [arr[2], arr[1], arr[0]]

}



console.log(fixTheMeerkat(["tail", "body", "head"])) // ["head", "body", "tail"]);
console.log(fixTheMeerkat(["tails", "body", "heads"])) // ["heads", "body", "tails"]);
console.log(fixTheMeerkat(["bottom", "middle", "top"])) // ["top", "middle","bottom"]);
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"])) // ["upper legs", "torso", "lower legs"]);
console.log(fixTheMeerkat(["ground", "rainbow", "sky"])) // ["sky", "rainbow", "ground"]);