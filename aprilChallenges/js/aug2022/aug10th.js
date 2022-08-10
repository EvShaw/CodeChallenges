const today = new Date
console.log(today)

// 6 kyu: Tribonacci Sequence
//given a list passed as an argument called signature and a second argument called number, return an array that is as long as n. If n contains 0, return an empty array. Signature will always contain a minimum of 3, non-negative whole integers. 

// Only numbers (whole and floats) passed. No outside edge cases. 
// Only return an array, no outside edge cases. 

// create function that accepts two arguments: signature and n
// if signature == 0, return []
// create a binding that will hold the list(signature) and store the additional numbers that we will add to it.


// add the fourth index(3) which contains the sum the first three nums in the array. Continue to loop through the array, summing the last three digits and adding their sum to the array. 
// continue looping and adding to the array until the array.length == n

function tribonacci(signature, n) {
    if (n == 0) return []
    if (n == 1) return [signature[0]]
    if (n == 2) return [signature[0], signature[1]]

    const arr = signature

    for (let i = 0; i < n - 3; i++) {
        let x = arr[arr.length - 3] //2
        let y = arr[arr.length - 2] //1
        let z = arr[arr.length - 1] //0
 
        let lastThreeSum = x + y + z

        arr.push(lastThreeSum)
    }
    return arr
}

console.log(tribonacci([13, 4, 1], 2))




