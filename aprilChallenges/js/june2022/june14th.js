const today = new Date

console.log(today)

// 8 kyu: String repeat: 

// PREP
//P:
// given a string, repeat it x times
//R:
// return as a string. no outside edgecases to worry about. 
//E:
// 3, * => ***
//P:
// pretty straight forward. After creating the function, call the parameter with the repeat() method. May need to convert with number and string methods. 

// const repeat = (n, s) => n.repeat(s)

// 8 kyu: Calculate BMI

// PREP:
//P:
// take the bmi equation and calculate the body mass index. 
//R:
// depending on the index, return the appropriate value. 

//if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
//E:
// bmi(80, 1.80), 'normal'
//P:
// take in the two argument and run them through the index forumla: 
// bmi = weight / height(sq)
//using PEMDAS, totalHeight = height*height 
// then height / weight = sum
// after breaking down the equation, run through an if or lese statement and spit out the appropriate string. 


// function bmi(weight, height) {
//     let totalHeight = height * height
//     let BMI = weight / totalHeight


//     if (bmi <= 18.5) {
//         return "Underweight"
//     }else if  (bmi <= 25.0){
//         return "Normal"
//     }else if (bmi <= 30.0) {
//         return "Overweight"
//     }  else {
//         return "Obese"
//     }


//     // (bmi > 30) 

// }

// console.log(bmi(80, 1.8))

// 6kyu: Stop gninnipS My sdroW!

//PREP: 
//P:
// given me a string that can contain multiple words. No numbers or random spaces.
// if the word has more than 5 letters, flip it/ reverse it. Spaces only included between words. 
//R:
// return the string with words that have more than 5 letters reverse. Return the entire string as a string.
//E:
// "Welcome"), "emocleW"
//"Hey fellow warriors"), "Hey wollef sroirraw"
//P:
// take in the string, split it into an array by word. iterate over the array looking for and flipping any word with 5 or more letters/ length. then join array together and return. 




// function spinWords(string) {
//     strArray = string.split(' ')


//     strArray.forEach((word, i) => {
//         if (word.length >= 5) {
//         strArray[i] = word.split('').reverse().join('')
//         }
//     })

//     return strArray.join(' ')
// }


// console.log(spinWords("Hey fellow warriors"))
