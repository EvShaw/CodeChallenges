const today = new Date
console.log(today)

// take an argument -> sequence, remove adjacent elements. Can be a string or an array, can contain numbers as well as letters. 

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// preserve each character and return as an array

// create function, that a single argument. 
    //array - string 
        //if string, break into an array. 
        //if array, move onwards... 

        //filter
            // bindingNAmeHere.filter((el, i) => el !== bindingNAmeHere[i - 1] )
                    //

    // return binding 


var uniqueInOrder = function(iterable){
   
    newArr = [...iterable].filter((a, i) => a !== iterable[i- 1])

    return newArr
  }

  console.log(uniqueInOrder('AAAABBBCCDAABBB'))
  console.log(uniqueInOrder([1,2,2,3,3])) 


//challenge 2: 

// const number = busStops => {
//     let num;
  
//     for (let i = 0; i < busStops.length; i++) {
//       num += busStops[i][0];
//       num -= busStops[i][1];
//     };
  
//     return num;
//   };

// const removeDupes = str => [...str].filter((a, i) => a !== str[i- 1])

// console.log(removeDupes('AAAABBBCCDAABBB'))