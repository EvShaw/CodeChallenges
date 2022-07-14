const today = new Date
console.log(today)

// 7 kyu: Complementary DNA:

//DNA strings, symbols A and T are complements of each others, as C and G. 
//my function recieves one side of the DNA, I need to return the other side. DNA strand is never empyty or there is no DNA at all. 

// ATTGC --> TAACD
// GTAT --> CATA

// creat an object that contains the pairs. when iterating over the string given, compare to the object pairs and change as required. 
//accept the string, splitting it into an array that will allow us to map over, looking at the individual elements in the array and if 



// function DNAStrand(dna) {
//     const pairs = {'A' : 'T', 'T' : 'A', 'C' : 'G', 'G' : 'C'}

//     return dna.split('').map(function(v){ return pairs[v] }).join('');
// }

// console.log(DNAStrand('AAAA'))

// 6 kyu: Replace with Alphabet position:

// given a string, replace every letter with its position in the alphabet. If the string contains anything not in the alphabet, ignore it and don't return it. 

//return only the string of numbers, nothing else. No capitilization matters either. 

//a = 1, z = 26. 

// create a function that accepts the string. Splitting it so that I can iterate over it as needed. From there I will create a local variable to help me convert from its place in the alphabet to a numeric value. I will then push that number onto a new array and return the full number string. 

// function alphabetPosition(text) {
//     const key = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     const strArr = text.toLowerCase().split('')
//     const newArr = []

//     strArr.forEach(letter => {
//         if(key.indexOf(letter) >= 0) {
//             newArr.push(key.indexOf(letter) + 1)
//         }
//     })

//     return newArr.join(' ')

// }

// console.log(alphabetPosition("The narwhal bacons at midnight."))