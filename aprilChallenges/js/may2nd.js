




function arrayDiff(a, b) {
    myArr = []
    for (let i = 0; i < a.length; i ++) {
        for (let j = 0; j < b.length; j++) {
            if (b[j] === a[i]) {
                myArr.push(a[i])
            }
        }
        return myArr
    }
  }