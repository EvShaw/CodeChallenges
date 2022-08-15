const today = new Date
console.log(today)

// 6 Kyu: Count the smiley faces!

// given an array as an argument that contains symbols and letters, return the total number of smiley faces in the list
// each smile face must have eyes, : or ;
// can have a nose, but does not have to. noses are: - or ~
// every smile face must have a smile that is marked with ) or D

//valid smiles examples: 
// :) :D ;-D :~)
// invalid examples: 
// ;( :> :} :]

//  create a function that accepts a single argument (array)
// create a variable to store smile count
// take the array and break each smile into its own array. 
// iterate over that array checking that it meets the paramaters set. 
// use conditional to check for eyes and smile
// : || ; && ) || D
// if it does, increase smile count by one

// retunn smile count. 


function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
