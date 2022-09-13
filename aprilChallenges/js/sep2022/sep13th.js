const today = new Date
console.log(today)

//Product array 7kyu: 
//given an array of integers, construct an array of the same size. So that prod[i] is == to product of all the integers BUT prod[i]

// always an array, always with length of at least 2. Always positive integers. 

//map over the array
//reduce each elemement in the array, mutliplying a by b and dividing by the elementing in the array


function productArray(numbers) {
    return numbers.map(x => numbers.reduce((a, b) => {
        return ((a * b))
    }) / x)
}


