// using a string template literal, take in three arguments, one of which is an array containing a string, followed by arguments 2 and 3 being strings as well. Combine them and return them in a sentance. 

// inside the array, open up a string template literal and pass in the first argument. As this is an array, use the join method seperating by work ('<space>'). 
// combine with arguments two and three. 

function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
  }