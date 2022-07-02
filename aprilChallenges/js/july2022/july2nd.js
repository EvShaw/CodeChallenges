const today = new Date
console.log(today)

// 6 kyu: Convert string to camel case

//PREP: 
//P:
// given a string, convert any and all hyphens and underscores to camelcasing. Only capitalize the first word if it already is. 
//R:
//reutrn as a string. empyty string as an empty string. 
//E:    
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//P:
// return an empty string if given an empty string. 
// check for hyphens, replacing the following letter with the same letter but upperCase. Do the same for underScores

function toCamelCase(str) {
    if(!str) return ''

    const strArr = str.split('')

    strArr[0] = strArr[0].toUpperCase()

    for(let i = 0; i < str.length; i++) {
        
        if(strArr[i] === '-') {
            strArr[i] = ' '
            let num = i + 1
            strArr[num] = strArr[num].toUpperCase()            
            
        } else if (strArr[i] === '_') {
            strArr[i] = ' '
            let num = i + 1
            strArr[num] = strArr[num].toUpperCase()
        }
    }

    // return strArr.join('').replaceAll('-', ' ').replaceAll('_', ' ')
    
    // let returnStr = strArr.join('').replaceAll('-', ' ').replaceAll('_', ' ')
    
    return strArr.join('')
}

console.log(toCamelCase('the-stealth-warrior'))
// console.log(toCamelCase('the-stealth_warrior'))