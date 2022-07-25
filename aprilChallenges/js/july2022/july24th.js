const today = new Date
console.log(today)


//creat a fucntion that filters and returns a list of only words that are exactly 4 letters in it. 
//with in the funciton, use the filter method and return any arguments that have a length of 4. 


function friend(friends){
   return friends.filter(name => name.length == 4)
  }