console.log('June 11th, 2022')

// 6kyu: Detect Pangram

//279

// PREP
// P:
// given a string, check if its a pangram. Ignore numbers and symbols. 
// R:
// return boolean 
// E:
// "The quick brown fox jumps over the lazy dog." -> true
// "This is not a pangram." -> false
// P:
// create a function -> accept a string as my argument. 
// inside that function, I am going to create a 'key' to compare the string against by using the includes method while iterating through the string. 
// the loop will run true until it enounters a missed letter and then return false if reaching that state.
// it would be worth exploring the use of charAt method as well, to create a range of values that we could use to compare instead of the alphabet key. 

// function isPangram(string) {
//     const key = "abcdefghijklmnopqrstuvwxyz".split('')
//     let strArray = string.toLowerCase()

//     for (let i = 0; i < key.length; i++) {
//         if (strArray.indexOf(key[i]) < 0) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog."))

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

countBy(1, 10)
countBy(2, 5)