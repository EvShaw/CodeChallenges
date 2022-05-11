console.log('May 11th')


// function defineSuit(card) {
//     let suit = card[card.length-1]
//     console.log(suit)
//     switch (suit) {
//       case '♣':
//           return 'clubs'
//           break;
//       case '♦':
//           return 'diamonds'
//           break;
//       case '♥':
//           return 'hearts'
//           break;
//       case '♠':
//           return 'spades'
//           break;
//   }

//   }

// defineSuit('Q♠')



//-------------------------  6kyu - Who Likes It?  ----------------------------------|| 

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// // Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"




// function likes(name) {

//     const nameARR = name.map(item => {
//         return item
//     })

//     if (nameARR.length === 0) {
//         return 'no one likes this'

//     } else if (nameARR.length === 1) {
//         return `${nameARR[0]} likes this`

//     } else if (nameARR.length === 2) {
//         return `${nameARR[0]} and ${nameARR[1]} like this`
//     } else if (nameARR.length === 3) {
//         return `${nameARR[0]}, ${nameARR[1]} and ${nameARR[2]} like this`
//     } else {
//         return `${nameARR[0]}, ${nameARR[1]} and ${nameARR.length - 2} others like this`
//     }
// }

// likes([])
// likes(['Sev'])
// likes(['Jacob', 'Alex'])
// likes(['Alex', 'Jacob', 'Mark', 'Max'])


// function likes(name) {
//     const nameARR = name.map(item => {
//         return item
//     })
//     const length = nameARR.length
//     switch (length) {
//         case 0:
//             return 'no one likes this'
//             break;
//         case 1:
//             return `${nameARR[0]} likes this`
//             break;
//         case 2:
//             return `${nameARR[0]} and ${nameARR[1]} like this`
//             break;
//         case 3:
//             return `${nameARR[0]}, ${nameARR[1]} and ${nameARR[2]} like this`
//             break;
//         case 3:
//             return `${nameARR[0]}, ${nameARR[1]} and ${nameARR.length - 2} others like this`
//             break;
//     }
// }
