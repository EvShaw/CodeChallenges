const today = new Date
console.log(today.toLocaleDateString())
console.log(today.toLocaleTimeString())

//Traverse an array with a for loop. 
// always integers, no special characters. 
// push to odd array if odd, even array is even. 
//use an ternary, checking if the input is even by comparing it with % 2
// return the array



function pickIt(arr) {
    let odd = [], even = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 == 0 ? even.push(arr[i]) : odd.push(arr[i]) 
    }
    return [odd, even];
}

console.log(pickIt([1,2]))

