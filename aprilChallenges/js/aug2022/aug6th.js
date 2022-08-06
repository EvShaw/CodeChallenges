const today = new Date
console.log(today)

function findNextSquare(sq) { //create function that takes single argument
    if (Math.sqrt(sq) % 1 !== 0) return -1 //check is the paramater passed is sq. 
    let n = Math.floor(Math.sqrt(sq)) + 1 //create binding, flooring the number passed and adding one after getting the squared numbers. 
    return n * n //multiply n by n to get the next squared number
}

//refactor:

// const findNextSquare = sq => Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq)+1, 2)

