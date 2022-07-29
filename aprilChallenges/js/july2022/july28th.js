const today = new Date
console.log(today)

//code wars:



//Paramaters (Inputs):
// string with a varying number of words in it. words can contian punctuation, special symbols can have space before and after:
// elloHay orldway !
//Results (Outputs): 
// a string of multiple words separated by spaces with 'ay' appended to the end of each word UNLESS that word is a punctuation mark.  
//Examples:
// Pig latin is cool' => 'igPay atinlay siay oolcay'
// This is my string' => 'hisTay siay ymay tringsay'
//PseudoCode:
// split the string into individual words, then split each word into two parts - the first letter, and the rest of the string . Reverse the order of these parts, and concatinate them back together. Check if a word is actually a punctuation mark and if it is NOT, the add 'ay' to the end. Concatenate the individual words back into a single string and return.



function pigIt(string) {
    let marks = ['.', '!', '?', '"', ',']
    results = string.split(' ').map(word => word.slice(1) + word[0] + (marks.includes(word) ? '' : 'ay')).join(' ')

    console.log(results)
}

pigIt('Pig latin is cool')