//***************************************************************
//@267: reversed words: 
// reverse all the words in the string passed. 

// inside the function, split the str into an array. Use spread syntax, then map, passing in all three of maps arguments, grabbing the array, and then return the array[array.lenght-index-1] to reverse the order of the string. 

// function reverseWords(str) {

//     const mirror = str.split(' ').map((el, i, arr) => {
//         return arr[arr.length - i - 1]
//     })

//     return mirror.join(' ')
// }

// console.log(reverseWords("The greatest victory is that which requires no battle"))

//***************************************************************
//@266: Exclamation marks series #1: Remove an exclamation mark from the end of string

// /split the string into an array so that we can use the pop method and remove the last item from the array if that character == !. Outside the conditional, return the array with the join method, converting back to a string. 

// function remove(str) {
//     let strArr = str.split('')
//     if (str.endsWith('!')) {
//         strArr.pop()
//     }
//     return strArr.join('')
// }

// console.log(remove("Hi!"))

//***************************************************************
//@265: Subtract the sum
// given a number (n)
// convert n into a string, split apart, then reconvert back to a number. 
// sum each individual number to get a total with the reduce method.
//then subtract the sum from n and that is my new 'n'. 
//if the new n value is in the list, return the associated fruit. if n is not on the list, pass the value (RESURCSIVE) into the function again and repeat the process untill I find the first n in the list (n == 0 - 100)


// let fruits = {
//     1:'kiwi',
//     2:'pear',
//     3:'kiwi',
//     4:'banana',
//     5:'melon',
//     6:'banana',
//     7:'melon',
//     8:'pineapple',
//     9:'apple',
//     10:'pineapple',
//     11:'cucumber',
//     12:'pineapple',
//     13:'cucumber',
//     14:'orange',
//     15:'grape',
//     16:'orange',
//     17:'grape',
//     18:'apple',
//     19:'grape',
//     20:'cherry',
//     21:'pear',
//     22:'cherry',
//     23:'pear',
//     24:'kiwi',
//     25:'banana',
//     26:'kiwi',
//     27:'apple',
//     28:'melon',
//     29:'banana',
//     30:'melon',
//     31:'pineapple',
//     32:'melon',
//     33:'pineapple',
//     34:'cucumber',
//     35:'orange',
//     36:'apple',
//     37:'orange',
//     38:'grape',
//     39:'orange',
//     40:'grape',
//     41:'cherry',
//     42:'pear',
//     43:'cherry',
//     44:'pear',
//     45:'apple',
//     46:'pear',
//     47:'kiwi',
//     48:'banana',
//     49:'kiwi',
//     50:'banana',
//     51:'melon',
//     52:'pineapple',
//     53:'melon',
//     54:'apple',
//     55:'cucumber',
//     56:'pineapple',
//     57:'cucumber',
//     58:'orange',
//     59:'cucumber',
//     60:'orange',
//     61:'grape',
//     62:'cherry',
//     63:'apple',
//     64:'cherry',
//     65:'pear',
//     66:'cherry',
//     67:'pear',
//     68:'kiwi',
//     69:'pear',
//     70:'kiwi',
//     71:'banana',
//     72:'apple',
//     73:'banana',
//     74:'melon',
//     75:'pineapple',
//     76:'melon',
//     77:'pineapple',
//     78:'cucumber',
//     79:'pineapple',
//     80:'cucumber',
//     81:'apple',
//     82:'grape',
//     83:'orange',
//     84:'grape',
//     85:'cherry',
//     86:'grape',
//     87:'cherry',
//     88:'pear',
//     89:'cherry',
//     90:'apple',
//     91:'kiwi',
//     92:'banana',
//     93:'kiwi',
//     94:'banana',
//     95:'melon',
//     96:'banana',
//     97:'melon',
//     98:'pineapple',
//     99:'apple',
//     100:'pineapple'
//     };

//     const SubtractSum = n => {
//       let number = n - String(n).split('').reduce((sum, item) => sum += +item, 0);
//       if(number > 100) return SubtractSum(number);
//       else return fruits[number];
//     }

// console.log(SubtractSum(190))

//***************************************************************
//@264: Add item to array: 
// push 'codewars' into the declared array


//***************************************************************
//@263: Count odd Numbers below n
// given a number (n), return the number of positive odd numbers below n

// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

//inside the function, create a binding that will keep count of the odd nubmers. 
//create a for loop that iterate n times. 
//Inside the loop, check if i % 2 != 0 (odd number) if so, increment count by 1. 
// once loop is done, return the count. 

//the above works, but a quicker and more efficient way would be to just use the static floor method and divide n by 2. 

// function oddCount(n) {
//     let total =  Math.floor(n/2)
//     return total
// }

// console.log(oddCount(15))

//***************************************************************
//@262: Alternating Case

    //inside the function, create an array to push to. 
    //use the this keyword to split the string into an array. 
    // map over the array, looking at each element. 
    //check if the element is uppercase, if so, use to lower case method. 
    //other wise convert to uppercase. push to the array. 
    // return the array with the join method to convert back to a string.


// String.prototype.toAlternatingCase = function () {
//     const ans = []

//     this.split('').map(el => {
//         if(el === el.toUpperCase()) ans.push(el.toLocaleLowerCase())
//         else ans.push(el.toUpperCase())
//     })
//     return ans.join('')
// }

// console.log("hello world".toAlternatingCase())

//***************************************************************
//@261: Reduce but grow

    //given an empty array of integers, return the result of multiplying the values together in order: 
        //[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

    //inside the function, use the reduce method to multiply every number down to a single integer: 

    // function grow(x){
    //     return x.reduce((prev, cur) => prev * cur)
    //   }

//***************************************************************
//@260: Well of ideas
    // given an array, check how many elements of that array are bad and how many are good. 
    //if good <= 2, return 'Publish!'
    // if good > 2 , return 'I smell a series!'
    // if the array does not include 'good', return Fail. 

    //inside the function, check if x has any good with the includes method. if not, return Fail. 
    // use filter to determin how many goods there are. combine with a ternary. if filter method == x <= 2; publish, if filter > 2 return i smell a series

    // function well(x){
    //     if(!x.includes('good')) return 'Fail!'

    //     const xFiltered = x.filter(el => el === 'good')
      
    //     return xFiltered.length > 2 ? 'I smell a series!' : 'Publish!'
    // }

    // // console.log(well(['bad', 'bad', 'bad']))
    // // console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
    // console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))

//***************************************************************
//@259: Find Maximum and Minimum Values of a List
    //make two functions, max and min. 
        //receives a list of integers. 
        //returns the largest and lowest numnber in that list. 

        //inside each array, use the spread syntax to spread out the arrays and allow the min and max static methods to be used. 

        // var min = function(list){
    
        //     return Math.min(...list);
        // }
        
        // var max = function(list){
            
        //     return Math.max(...list);
        // }

//***************************************************************
//@258: Get the mean of an array. 
    //given an array, return the average. 

    //inside the function, use the reduce method to sum all the integers, then divide my the length and use the floor method to get the rounded down number. 

    // function getAverage(marks){
    //     let sum = marks.reduce((prev, cur) => prev + cur)
    //     return Math.floor(sum/marks.length)
    // }

//***************************************************************
//@257: Array plus an array
    //given two arrays, sum the total of their elements togeher. 

    //inside the function, concat the arrays into a single array and use the reduce method to sum them into a single integer. 
    //return that value

    // function arrayPlusArray(arr1, arr2) {
    //     return arr1.concat(arr2).reduce((prev, cur) => prev + cur)
    //   }

// 11 total! From 267 -> to 256