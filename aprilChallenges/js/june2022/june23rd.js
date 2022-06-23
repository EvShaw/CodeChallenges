const today = new Date
console.log(today)


// 7kyu: shortest word: 

function findShort(s) {
    let strArr = s.split(' ').sort((a, b) => a.length - b.length)
    return strArr[0].length
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

//refactor one liner: 

// const findShort(s) = s => s.split(' ').sort((a, b) => a.length - b.length).shift()

//7kyu: 

// PREP: 
//P:
//make profit, buy and sale. 
// buys for lowest price and sell at the highest
//task: return both the lowest(min) and max
//only whole nums. always at least one element **
//no null, or etc. 
//R:
// if a single element array, return twice. 
//E:
// [1,2,3,4,5] => [1,5]
//P:
// take in an array. Confirm if its more than a single element.. if so, sort is ascending order, returning both the lowest and the highest numbers. if sinlge then I will return twice. 

//take array. sort it -> return [0] return array[array.length-1]

//if statement = if single = push the single element twice. 

// function midMax(arr) {
//     const newArr = []

//     if (arr.length > 1) {
//         newArr.push(arr[0], arr[0])
//     } else {
//         const sortedArr = arr.sort((a, b) => a - b)
//         newArr.push(sortedArr[0], sortedArr.at(-1))
//         // newArr.push(sortedArr[0], sortedArr[sortedArr.length-1]
//     }
//     return newArr
// }

// refactor: 
  //
//   function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)];
//   }