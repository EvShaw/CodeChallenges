const today = new Date
console.log(today)


// 6kyu Duplicate encoder: 

//Taking a string, return a new string with each character converted to either a '(' if the character is unique or ')' if the character repeats itsself. 

function duplicateEncode(word) {
    const newArr = []
    const testArr = []

    const wordArr = word.split('')

    wordArr.forEach(letter => {
        console.log(letter)
        if (letter) //is unique push '(' onto the array otherwise push ')'    
   })
}

console.log(duplicateEncode('balloon'))

// removesDupes = n => [...str].filter((a, i) => a !== str[i - 1])



// function count(str, find) {
//     return (str.split(find)).length - 1;
// }


// How do you check if a character has more than one instance of it or not. Does the character repeat any where in the string?

function duplicateEncode(str) {
    var word = str.toLowerCase();
    var unique = '';
    //loop through all letters in string
    for (var i = 0; i < word.length; i++) {
        //check for any characters that repeat
        console.log(word[i])
        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {

            //for each character that never dupes, place (
            unique += '(';
        } else
            //for each character that IS a dupe, place )
            unique += ')';
    }
    //return the full string value where '(' are non duped and all')' are duped
    return unique;
}

duplicateEncode('ear')

