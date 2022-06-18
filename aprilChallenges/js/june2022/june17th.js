const today = new Date
console.log(today)


// 8 kyu: Abbreviate a Two Word Name

// PREP: 
    //P:
        //given a combination of two names, always a stinrg. Lower case and upper. Can be one letter in first name or second. 
    //R:
        // return the first initial fo both names seperated by a .
    //E:
        //Evan Shaw => E.S
        //Bruce Wayne => Batman
    //P:
        // passing the string into a variable and splitting it into an array, then itterating over the array with a loop (for of, forEach) return the first letter of each name. Pushing these letters into a new array I can then splice the period in before returning it with upperCase method. 


// function abbrevName(name){
//     const nameArr = name.split(' ')
//     const newArr = []
//     nameArr.forEach(name => {
//       newArr.push(name[0])
//     })
//     newArr.splice(1, 0, '.')
//     return newArr.join('').toUpperCase() 
//   }

//refactor to one line: 

// const abbrevName = name => name.split(' ').map(i => i[0].toUpperCasE().join('.'))

