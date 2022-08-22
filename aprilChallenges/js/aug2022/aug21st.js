const today = new Date
console.log(today)


//@ 307/ 389 => Count by X


// create a function that takes two arguments that returns an array of the first (n) miltiples of (x)
//numbers always greater than zero. no negatives, no floats, no other edgecases

//create a funciton that accpets two arguments. 
// x and n
// x is what we are counting by and n is what we are counting to. 

// using a loop, start at x and count up to x*n in increments of x

// const countBy = (x, n) => {
//     const ans = []

//     for (let i = x; i <= x * n; i += x) {
//         ans.push(i)
//     }
//     return ans
// }

// console.log(countBy(2, 5))


//@bonus challenge (7kyu)

const orderedCount = function (text) {
    const splitStr = text.split('');
      const str = [...new Set(splitStr)];
      
      let resultArr = [];
      
      for (let i = 0; i <= str.length-1; i += 1) {
        resultArr.push([str[i], splitStr.filter((s) => s === str[i]).length]);
      }
      
      return resultArr;
    }

// console.log(orderedCount("abracadabra"))


