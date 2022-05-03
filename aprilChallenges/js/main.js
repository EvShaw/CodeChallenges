














console.log('hi')





function arrayDiff(a, b) {
    myArr = []
    for (let i = 0; i <= a.length; i++) {
        for (let j = 0; j <= b.length; j++) {

            if (a[i] === b[j]) {
                myArr.push(a[i])
                console.log(`pushed ${b[j]}`)
            } else {
                console.log(a[i])
            }


        }
    }
    // console.log(myArr)
}

arrayDiff([1, 2], [1])