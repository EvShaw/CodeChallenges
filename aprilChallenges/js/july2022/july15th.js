const today = new Date
console.log(today)


//6 kyu: Count characters in your string: 

// count all the characters in a string and if duplicates occur, increase the count for that character: 
// 'aba' => {'a': 2, 'b': 1}
//if empty, return an empty object literal.


//create the function, accepting a paramater that will be a string. 
// create an empty object literal that will return as is if the string is empty or will hold the values from the string.
//iterate over the string using the split method, putting each character into the object if its not in there yet, or adding to the nubmer of times it appears.
//return the obj. 



function count(string) {
    const obj = {}
    const strArr = string.split('')

    if(string) {
        string.split('').forEach(char => {
            if(char in obj) {
                obj[char]++
            } else {
                obj[char] = 1
            }
        })
        return obj
    } return {}
    
}

console.log(count('aba'))