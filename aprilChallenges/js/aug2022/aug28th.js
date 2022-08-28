//***************************************************************
//@275 -
// Beginner Series #2 clock
//given three paramaters :hour, minute, and seconds, determine what time it is since midnight is in milliseconds


//inside the function, create a binding to store the total milliseconds. 
// break the paramaters down respectively converting each hour into a total of 360000 miliseconds, minute to 60000 milliseconds and second to 1000 milliseconds.  
//afte summing all the time breakpoints into a single value, return the total milliseconds. 

function past(h, m, s) {

    let totalMilliseconds = 0

    let hour = 3600000
    let minute = 60000
    let second = 1000

    totalMilliseconds = h*hour + m*minute + s*second

    return totalMilliseconds
}

console.log(past(0, 1, 0))


//***************************************************************
//***************************************************************
//@274 -