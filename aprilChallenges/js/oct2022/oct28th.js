console.log('hi')

function sumStrings(a, b) {
    //due to the numbers being too large, we split them into an array and reverse so we can carry to the next number. 
    let aTotal = a.split('').reverse()
    let bTotal = b.split('').reverse()

    // checking lengths of each string and adding zero's if not the same to bring to the same length.
    let totalDiff = 0

    if (a.length < b.length) {
        totalDiff = b.length - a.length
        for (let i = 0; i < totalDiff; i++) {
            aTotal.push('0')
        }
    } else if (b.length < a.length) {
        totalDiff = a.length - b.length
        for (let i = 0; i < totalDiff; i++) {
            bTotal.push('0')
        }
    }

    //run a loop and sum each index, if over 9, we'll carry to the next iteration of the loop and add in there. 

    const totalArr = []
    let carry = 0

    for (let i = 0; i < aTotal.length; i++) {
        //convert a and b and sum together
        const total = +aTotal[i] + +bTotal[i] + carry

        if (total > 9 && i + 1 == aTotal.length) {
            console.log('last')
            totalArr.push((total).toString())
        } else if (total > 9) {
            totalArr.push((total - 10).toString())
            carry = 1

        } else if (total <= 9) {
            totalArr.push(total.toString())
            carry = 0
        }
    }
    //code wars is not able to use at method, but checking if the start of our array (once reversed, begins with zero, that we remove it.)
    // if(totalArr.at(-1) == 0) {
    //     totalArr.pop()
    // }
    if(totalArr[totalArr.length - 1] == 0) {
        totalArr.pop()
    }

    return totalArr.reverse().join('')
}



// console.log(sumStrings('123', '456'))
// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
// console.log(sumStrings('800', '9567')) //10367
// console.log(sumStrings('8797', '45')) // 8842
console.log(sumStrings('00103', '08567')) // 8670


//this method contains intergers that are too long for JS and unable to use BigInt method.
// function sumStrings(a, b) {
//     //take the string, convert to a number, and combine into a single integer.
//     const aArr = a.split('').map(el => +el).join('')
//     const bArr = b.split('').map(el => +el).join('')

//    return (+aArr + +bArr).toString()
// }




// // 1146 -> 1178