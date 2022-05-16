console.log('May 16th Code Challenge')

//Unique In Order (6kyu)

var uniqueInOrder = function (iterable) {
    //take in the sequence. 
    //compare each element with the following element and if the same, remove it from the sequence. 
    //return it, preserving the order in which it comes in as.
    const result = []
    let last
    
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== last) {
            result.push(last = iterable[i])
        }
    }
    return result
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))


//OR......................

const uniqueOrder = function (it) {
    return [...it].filter((a, i) => a !== it[i - 1])
}

console.log(uniqueOrder('AAAABBBCCDAABBB'))

const removeDupes(it) {
    const result = []
    let last
    for (let i = 0; i < it.length, i++) {
        if (it[i] !== last) {
            result.push(last = it[i])
        }
    }
    return result
}

const removeDupesPlus = (arr) => [...arr].filter((a, i) => a !== arr[i - 1])