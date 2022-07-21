const today = new Date
console.log(today)

//liking items on social media. 
//takes an array of people who like an item... 
//

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


// take an array. 
//determine how many elements in array (length). 

//save and capture the array.

//depending on length, respond with a string. 

//switch case that responds with a, b, c elemeents in the array depending on the length. 



function likes(name) {
    const nameARR = name.map(item => {
        return item
    })
    const length = nameARR.length
    switch (length) {
        case 0:
            return 'no one likes this'
            break;
        case 1:
            return `${nameARR[0]} likes this`
            break;
        case 2:
            return `${nameARR[0]} and ${nameARR[1]} like this`
            break;
        case 3:
            return `${nameARR[0]}, ${nameARR[1]} and ${nameARR[2]} like this`
            break;
        default:
            return `${nameARR[0]}, ${nameARR[1]} and ${nameARR.length - 2} others like this`
            break;
    }
}

likes(names)