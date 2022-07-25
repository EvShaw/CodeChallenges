const today = new Date
console.log(today)

// create a ternaray operator that gives pricing based of of qty. 
// accepting a single paramater, return the price based on the qty. 

//3 price points: 100, 95, 90

//use ternary operator: 

// function saleHotdogs(n) {
//     return n >= 10 ? n*90 : n >= 5 && n < 10 ? n * 95 : n * 100
// }
// console.log(saleHotdogs(4))

// 6kyu: Bit Counting: 
// take an int as an input and return the number of bits that are equal to one in the binary representation of that number: always positive numbers
// 1234 = 10011010010, so the return = 5

//take the number, convert to string, split it at zero, join back together and get the length


countBits = n => n.toString(2).split('0').join('').length;

console.log(countBits(10011010010))
console.log(countBits(110011))
console.log(countBits(100))
console.log(countBits(0))

