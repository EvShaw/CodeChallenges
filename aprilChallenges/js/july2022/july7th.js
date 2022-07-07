const today = new Date
console.log(today)


// 6kyu: Does my number lok big in this
const narcissistic = (value) => {
    let arr = String(value).split('')
    let valLength = arr.length
    let sum = arr.map(e => Number(e) ** valLength).reduce((a,b) => a + b, 0)
    return sum === value
}