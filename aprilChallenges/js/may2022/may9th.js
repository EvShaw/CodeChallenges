console.log('May 9th')



//p:
//r:
//e:
//p:


// function stringClean(s){
//     const alpha = 'abcdefghijklmnopqrstuvwxyz~#$%^&!@*():;\"\'.,?'   
//     const key = alpha.split('')

//     let arr = []
//     for (let i = 0; i < key.length; i++) {
//         if (key[i] !== s[i]) {
//             arr.push(s[i])
//         } else {
//             console.log('no')
//         }

//     }
//     console.log(arr.join(''))

//   }




function stringClean(s) {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const arr = s.split('')
    const newArr = []
    
    for(let i = 0; i < nums.length; i++){
        for (let j = 0; j < newArr.length; j++) {
            if (i === j) {
                console.log(newArr[j])
            }
        }
    }

}




stringClean('E3at m2e2!!')
// stringClean("123456789")