console.log('June 3rd, 2022')

//6 Kyu: Multiples of 3 or 5: 

// PREP
//P:
// list all natural numbers below x that are multiples of  3 or 5. Sum those up. 
//R:
// return the sum of all the multiples of 3 or 5 below x. If numb is negative, return 0
//if both 3 and 5, only count it once. 
//E:
// 10 -> 3, 5, 6, 9 = 23

//P:
//list out every num from 1 to x
//then I am going to compare those nums with modulus (%) to determine whether its a multiple of 3 or 5. 
//if it is, I am going to add it to an array. 
//once completed going over every num, I will take my array and use the reduce method to sum up the counts. 
// I will need to take negatives into consideration with an if statement and will start my code block off with that.... 
//lastly, I will return the reduce sum in a return. 

function solution(number) {
    const numArr = []
    const newNumArr = []

    if (number <= 0) {
        numArr.push(0)
    } else {
        for (let i = 0; i < number; i++) {
            numArr.push(i)
        }
    }
    //map, filter, forEach?
    numArr.forEach(n => {
        if (n % 3 === 0 || n % 5 === 0) {
            newNumArr.push(n)
        }
    })
    const returnNum = newNumArr.reduce((acc, c) => acc + +c, 0)
    return returnNum
}

console.log(solution(10))

//refactor: 

function solutionPlus(num) {
    let sum = 0
    for (let i = 1; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum;
}

console.log(solutionPlus(10))