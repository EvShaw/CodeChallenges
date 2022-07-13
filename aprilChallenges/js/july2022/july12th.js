const today = new Date
console.log(today)


// 6kyu Duplicate encoder: 

//Taking a string, return a new string with each character converted to either a '(' if the character is unique or ')' if the character repeats its self. 


// How do you check if a character has more than one instance of it or not. Does the character repeat any where in the string?

// function duplicateEncode(str) {
//     var word = str.toLowerCase();
//     var unique = '';s
//     //loop through all letters in string
//     for (var i = 0; i < word.length; i++) {
//         //check for any characters that repeat
//         console.log(word[i])
//         if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {

//             //for each character that never dupes, place (
//             unique += '(';
//         } else
//             //for each character that IS a dupe, place )
//             unique += ')';
//     }
//     //return the full string value where '(' are non duped and all')' are duped
//     return unique;
// }

// duplicateEncode('ear')

// 7 kyu: 
//write a function that finds the sum: 
    // up to and including N
        // return the sum of all multiples of 3 || 5
            // ^^^

//expample: 
    // 5 -> 3 + 5 = 8
    // 10 -> 3, 5, 6, 9, 10 = 33

// establish function
    // create a binding called sum that will hold the value of the numbers we add
    // create for loop...
        // ...start -> count to n (10)
            //inside the for loop if statement. 
                // check if the number is a multiple of 3 or 5 -> 
                    // if n % 3 == 0|| n % 5 == 0 {
                            // sum += n
                    // }
                    //add it my sum variable 

        // return sum            

// function findSum(n) {
//     let sum = 0
//     for(let i = 0; i <= n; i++) {
//         if (i % 3 == 0 || i % 5 == 0) {
//             sum += i
//         }
//     }
// }



