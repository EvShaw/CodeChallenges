const today = new Date
console.log(today)


//creat a fucntion that filters and returns a list of only words that are exactly 4 letters in it. 
//with in the funciton, use the filter method and return any arguments that have a length of 4. 


function friend(friends) {
    return friends.filter(name => name.length == 4)
}

//   case 'january':
//     case 'february':
//     case 'march':
//       return first quarter;
//     break;
//     case 'april'

const quarterOf = (month) => {
    switch (month) {
        case 1 : 
        case 2 :
        case 3 :
            return 1;
            break;
        case 4:
        case 5:
        case 6:
            return 2;
            break;
        case 7:
        case 8:
        case 9:
            return 3;
            break;
        case 10:
        case 11:
        case 12:
            return 4;
            break;
    }

}

// 
// const quarterOf = (month) => {
//     // Your code here
//     return Math.ceil(month / 3);
//   }

// const isReallyNaN = (val) => Number.isNaN(val) ? true: false

