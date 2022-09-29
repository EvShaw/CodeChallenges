const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase()


//create a function that converts an argument to an operator and does arithmetic. 

//inside the function, create a switch case that will accept the argument 'operator', checking it and matching it to the correct operator that will spit out the correct arithemetic. 
// return a string literal, passing in the first two arguments and the switch case. 


function arithmetic(a, b, operator) {
    switch (operator) {
        case 'add':
            return a + b
            break;
        case 'subtract':
            return a - b
            break;
        case 'multiply':
            return a * b
            break;
        case 'divide':
            return a / b
            break;
    }
}