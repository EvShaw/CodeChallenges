const today = new Date
console.log(today)

//@ 01/309 => Completed
// Opposites Attract

function lovefunc(flower1, flower2) {
    if (flower1 % 2 == 0 && flower2 % 2 != 0 || flower1 % 2 != 0 && flower2 % 2 == 0) {
        return true
    } else return false

}

//@ 02/308 => 
// 

function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) return true
    else return false
}