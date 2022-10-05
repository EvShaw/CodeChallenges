const date = new Date;
console.log(date.getFullYear())

//love vs friendship


//write a function that calculates the value of a word based off the sum of the alphabet  positions of its characters. 

// always given a single worded string, lowercase.
// return a value based off the string value. 
    // a = 1 ... z = 26

// insdie the funciton, convert a string into an arrray, allowing to run a loop over the arrray (forEach). with each iteration I am going to convert the letter its UTF value and then convert that value into the pattern given (a = 1, b = 2, ...z =26)
// then I will use the reduce method on the array, summing the total that will be returned. 

function wordsToMarks(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let marks = 0;
    string.split('').forEach((char) => {
      marks += alphabet.indexOf(char) + 1;
    });
    return marks;
  }