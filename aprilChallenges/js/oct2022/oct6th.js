const newDate = new Date
console.log(newDate.toLocaleTimeString())

// ******************************************************************
// given a string, remove all but the last exclamation mark from the string. Return as string. 

// given only a string, which can contain special characters, remove all exclamation marks from the sentence. Will never be an empty string or anyhting but a string. 
//always return a string. 

// extract ALL '!' with the replace method and then insert a sinlge '!' at the end and return. 




// function remove(string) {
    //replace All and concat
    // return string.replaceAll('!', '').concat('!')

    //with a loop approach: 
    // let strArr = string.split('')

    // let returnArr = []

    // strArr.forEach(letter => {
    //     if(letter !== '!') {
    //         returnArr.push(letter)
    //     }
    // })

    // return returnArr.join('').concat('!')

    //with a regex approach: 
    // return string.replace(/!+/g, "") + "!"
// }

//refactor one line: 

const remove = s => s.replaceAll('!', '').concat('!')


console.log(remove('H!i!'))

// ******************************************************************
