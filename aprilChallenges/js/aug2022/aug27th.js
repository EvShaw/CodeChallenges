//***************************************************************
//@282
//Count of positive and negatives

//Given an array of integers. 
//whole integers only. No other characters. 
//return an array, first element is the count of positves and the second element is sum of negative numbers. 0 is 0. 

//if NAN, null, empty, return empty

// check that input is truthy, if not, return []
// open a loop that will check and count how many integers are positive. NOT SUM THEM.
// create a binding to capture the SUM of the negative integers. 
// filter over the input, extracting out the neg numbers then use reduce method to sum them. 

//check if pos and neg value == 0, if so, return [] else return the count of pos and the sum of neg.

// function countPositivesSumNegatives(input) {
//     if (!input) return []

//     let positive = 0
//     let positiveCount = input.map(el => el > 0).forEach(el => {
//         if (el > 0) positive++
//     })

//     let negative = input.filter(el => el < 0).reduce((pre, cur) => pre + cur, 0)

//     if(positive == 0 && negative == 0) return []
//     else return [positive, negative]
// }


// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

// console.log(countPositivesSumNegatives([0, 0]))

//***************************************************************
//@281
//get nth even number. 

// given a number, what would be the positive integer of that? 
// 
// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466

//create an array to capture the count of positives. 
//create a loop that will continue to add those positive nubmers into the array. 
//this loop will contineu until the length of the array == the number passed. 

// use a while loop.....nope, nope, nope....


//SOMETIMES THE EASIEST WAY IS THE BEST WAY
// function nthEven(n) {
//     return n*2 - 2
// }

//***************************************************************
//@280
//Keep hydrated:
    //.5 liters of water per hr of cycling. 
    //given a time in hours, return the numnber of liters (.5) will drink, rounded to the smalles value. 

    //take the number, divide it by 2, use the floor method to round down to the smallest number. 

    // function litres(time) {
    //     return Math.floor(time/2);
    //   }

//***************************************************************
//@279
      //You Can't Code Under Pressure #1 //double integer => return i*2 
//***************************************************************
//@278
      //Fake binary
    // given a sting of digits, replace any digit below 5 with 0 and above with 1. return the string.

    //split the string into an array, forEach over the array, pushing to an empty array 0 if the element is <= 5, and 1 if > 5. return the arr. 

    function fakeBin(x){
        let arr = []
        x.split('').forEach(el => {
            if(el <= 0) arr.push('0')
            else arr.push('1')
        })
        return arr
    }