const today = new Date
console.log(today)

// Check Same Case: 

// Write a function that will check if two given characters are the same case.
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1

// function sameCasing(a, b) {
//     const key = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     const alpha = a
//     const beta = b
//     if(!key.includes(a.toLowerCase()) || !key.includes(b.toLowerCase())) return -1

//     const checkCase = x => {
//         if(x === x.toLowerCase()) return 'lower'
//         if(x === x.toUpperCasE()) return 'upper'

//         return checkCase(a) === checkCase(b) ? 1 : 0
//     }

//     for (let i = 0; i < key.length; i++) {

//     }


// }

// console.log(sameCasing('a', 'g'))

//6kyu : Build Tower

//PREP:
//P:
// given a number, build a tower with that amount of floors. 
// always a positive number given. Do I need to worry about spaces as margin for the tower?
//R:
//return an astrik for level one and +2 for each additional level. lvl 2 = 4, lvl 3 = 5...etc.
//return as an array 
//E:
// 3 floors = : 
//      *
//     ***
//    *****
//P:
//I am going to run two loops, one for each floor and another for the width of the floor, expanding with two additional *s per level. If I need to take spaces and perfectly align, then the width for each floor will be the same all the way dowm and just need to get the spacing right for each level. 

// for every loop, I will concat an additonal 2 astriks ot the floor. 

function towerBuilder(nFloors) {
    tower = []
    for (let i = 0; i < nFloors; i++) {
        tower.push(' '.repeat(nFloors - i - 1)
                + '*'.repeat((i * 2)+1)
                + ' '.repeat(nFloors - i -1))
    }
    return tower
}

console.log(towerBuilder(3))
