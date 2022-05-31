console.log('May 31st, 2022')

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//PREP: 
// P: giving me a string
// R: return a string  with all the vowels removed
// E: 
// P:
//take the string, turn into an array. Itterate over the array, use replace method to extract the vowels in the vowel array that I created. Join the string back into a sigle sentence and return it.


const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}


console.log(disemvowel("This website is for losers LOL!"))