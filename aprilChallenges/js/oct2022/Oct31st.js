// given a string return 0's and 1's. 1's for any vowel and 0's for any other character. all characters included. return a string of 1's and 0's. 

//inside the funciton, create a binding that contains vowels: aeiou. 
// open a loop that runs for the length of the string, checking each character. 
// if the character is a vowel, push a 1 to a new array, otherwise push a 0 to that same array. 
//use includes method to decide if its a vowel

function vowelOne(s) {
    const vowels = 'aeiou'
    // const returnArr = []

    // s.toLowerCase().split('').forEach(char => {
    //     char.includes(vowels)
    //     if((vowels.includes(char))) {
    //         returnArr.push('1')
    //     } else returnArr.push('0')
        
    // })
    // return returnArr.join('')

    //with map method: 

    return s.split('').map(el => 'aeiou'.includes(el.toLowerCase()) ? 1: 0).join('')
}

console.log(vowelOne( "vowelOne" ))
// console.log(vowelOne( "abceios" ))