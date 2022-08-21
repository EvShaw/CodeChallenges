const today = new Date
console.log(today)

// 1 of 389 => Completed
// Opposites Attract

function lovefunc(flower1, flower2) {
    if (flower1 % 2 == 0 && flower2 % 2 != 0 || flower1 % 2 != 0 && flower2 % 2 == 0) {
        return true
    } else return false

}