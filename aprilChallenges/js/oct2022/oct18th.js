const today = new Date
console.log(today.toLocaleString())

//given a string of zeroes and ones, choose any two adjacent positions in the string. If one of the is 0 and the other is 1, remove them from the string. 
//return the length of the resulting(smallest) string that I can get after applying this operation multiple times. 

// "01010"  -->  "  010"  -->  "    0"

// "110100"  -->  "1  100"  -->  "1    0"

//input string, output integer

// take in the string and with the replace method, look for any 01 AND 10, replacing them with ''. Return with the .length property to get the value.  


function zeroAndOne(s) {
    return s.replace(/01/g, '').replace(/10/g, '').length
}

console.log(zeroAndOne("01010"))