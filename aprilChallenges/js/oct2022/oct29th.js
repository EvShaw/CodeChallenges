console.log('Another day, another opportunity')

// given an Array, return the co-ordinates of x
// if x is not inside the Array, or if x appears multiple TimeRanges, return []

//find the x. 
// return an array with two indexes, the first integer for the the index of x, and the second for its place in the array. 

//inside the array, create three brindings: count, x, and y. 
// map over the input, passing el and index. if el (nested array) includes an x, map over, with a second element (x) and another index (i). if the element equals 'x', return y = the index of that element. otherwise, el). 
// uptick count
// x = i
//otherwise return the original element. 

//if count is 0, return [] othwise open another ternaty, if count is greater than 1, return [], otherwise return x and y in an array.



const xMarksTheSpot = (input) => {
    let count = 0
    let x = 0
    let y = 0

    input.map((el, i) => {
        if (el.includes('x')) {
            el.map((x, i) => x === 'x' ? y = i : el)
            count++;
            x = i;
        }
        else return el
    })
    return count === 0 ? [] : count > 1 ? [] : [x, y]
}


console.log(
    xMarksTheSpot(
        [
            ['x', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
        ]
    )
)