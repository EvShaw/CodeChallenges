


//7 kyu: categorize new member: 

//senior - 55+
//  handicap > 7

//handicap range: -2 - 26 (lower = better player)

//given pairs, each pair contians informaiton for  a sinlge potentoal member. 
//age and then handicap: 

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//return a list of string values, stating the placement of open or centior category. 

//given a list, with a two element order per item, determine if the player is old enough to be in the senior category. Also needs to have a handicap of 7 or greater

// as the list will be a nested array, loop through it, and then nest another loop so that we can get to the individual numbers to determine if the player is open or senior based of of age being greater than or equal to 55 as well as a handicap of 7 or greater. 
//the first number will be age and the second number will be the handicap. As the minimum total between the two needs to be 57, anything over 57 would place them in senior?

function openOrSenior(data) {
    let total = []

    data.forEach(arr => {
        let age = 0
        let handicap = 0

        arr.forEach((el, i) => {
            if(i == 0) {
                age = el
            } else {
                handicap = el
            }

        })

        if(age >= 55 && handicap >= 7) {
            total.push('Senior')
        } else {
            total.push('Open')
        }
        
    })
    return total
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]))

//refactor: 

function openOrSenior(data) {
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
}