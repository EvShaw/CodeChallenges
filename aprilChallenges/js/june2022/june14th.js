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


function bmi(weight, height) {
    let totalHeight = height * height
    let BMI = weight / totalHeight


    if (bmi <= 18.5) {
        return "Underweight"
    }else if  (bmi <= 25.0){
        return "Normal"
    }else if (bmi <= 30.0) {
        return "Overweight"
    }  else {
        return "Obese"
    }
     
    
    // (bmi > 30) 

}

console.log(bmi(80, 1.8))