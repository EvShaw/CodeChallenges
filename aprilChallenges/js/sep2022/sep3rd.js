//***************************************************************
//@246:  

//given an array.

//create a function
//create a variable to contain the total score
//open a for of loop, iterating over each score of the games
//inside the loop, split the score into a string, seperated by a colon. (":")
//open a conditional checking if the first element is greater than the second element. 
// Convert to a number 
// if index 0 > index 1, add 3 to record. 
// if they are the same, add 1 to record
//return record.


const points = games => {
    let record = 0
    for (const score of games) {
        const scoreArr = score.split(":")
        if (Number(scoreArr[0]) > Number(scoreArr[1])) {
            record += 3
        } else if (Number(scoreArr[0]) == Number(scoreArr[1])) {
            record += 1
        }
    }

    return record
}