//split the string into an array and then map over each element. 
// Within the map, split each element into its own array, use the repeat method to extend it accordingly and rejoin with the join method. 
//now map over this and with in each element, concat a whitespace then repeat again, map again, and trim off the white space. 
//use the replace method with regex and then join once more with each item on its own line.

const scale = (str, k, n) => {
    const arr = strng.split('\n').map(v => v.split('').map(v => (v).repeat(k)).join(''))
        .map(v => (v + ' ').repeat(n)).map(v => v.trim().replace(/ /g, '\n')).join('\n')
    
    
    return arr
}
