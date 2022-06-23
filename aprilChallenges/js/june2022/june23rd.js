const today = new Date
console.log(today)


// 7kyu: shortest word: 

function findShort(s){
    let strArr = s.split(' ').sort((a, b) => a.length - b.length)
    return strArr[0].length
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))