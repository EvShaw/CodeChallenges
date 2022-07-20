const today = new Date
console.log(today)

//7kyu Remove anchor from URL: 

// 

// function removeUrlAnchor(url){
//     return url.split('#').shift()
//    }



// 7 kyu: 
    //given a triagle of consecutive odd numbers, calc the numbers, starting at index of 1

        // 1
//     3     5
//     7     9    11
// 13    15    17    19
// 21    23    25    27    29

// 31 - 33 - 35 - 37 - 39 - 41 

// 1 -->  1
// 2 --> 3 + 5 = 8

//whole, positive numbers. 

// create function, within function, I need to be able to iterate over nth -row, summing the odd numbers per row. 

// loop - based on n, params being passed into the funtion. 
    // always starting at one, add two additional numbers per row, per count of n

        //nth -> 1 = 1
        //nth -> 2 = 8
        //nth -> 3 = 27
        //nth -> 4 = 64
        //nth -> 5 = 125
        //nth -> 6 = 216

        //n cubed

    //every loop, add a new number that counts/adds the next odd number. sum them all/ per row, and return a number





function rowSumOddNumbers(n) { //3 
    let sum = 0

    for(let i = 0; i < n; i++) {
        for(let i = 1; i <= n; i += 2) {
            sum += i
        }
    }
    return sum
}