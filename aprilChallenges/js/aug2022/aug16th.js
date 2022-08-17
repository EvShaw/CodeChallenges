const today = new Date
console.log(today)

// 7kyu:

// create a function, accepts a single argument and retruns the sum of the absolute value of each of the numvers decimal digits.
//

function sumDigits(number) {
    let i = 0;
    let sum = 0;
    number = Math.abs(number)
    while (number != 0) {
        sum += number % 10
        number = Math.floor(number / 10)
    }
    return sum
}

// 8 kyu


function squareSum(numbers) {
    let arr = []
    numbers.forEach(num => {
        arr.push(Math.pow(num, 2))
    })
    return arr.reduce((a, c) => a + c)
}

// console.log(squareSum([1, 2]))

// 7 kyu

//return a new array with each value squared. 

// create the function that accepts the array. 
// map over the array, passing a single argument that will use double the value of each digit within the array.

function double(array) {
    return array.map(el => el * el)
}

console.log(double([1, 2, 10, 57]))

// 7 kyu

Array.prototype.map = function (callback/*, thisArg*/) {

    var T, A, k;

    if (this == null) {
        throw new TypeError('this is null or not defined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    if (arguments.length > 1) {
        T = arguments[1];
    }
    A = new Array(len);
    k = 0;
    while (k < len) {
        var kValue, mappedValue;
        if (k in O) {
            kValue = O[k];
            mappedValue = callback.call(T, kValue, k, O);
            A[k] = mappedValue;
        }
        k++;
    }
    return A;
};

