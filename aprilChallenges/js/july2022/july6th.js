const today = new Date
console.log(today)


// 7kyu:  Growth of a population
//PREP:
    //P: given the examples, how many years will it take the town to reach a population of 1200. Starting from 1000, each year the town grows by 2% and 50 new people move there. 


    //R:
        //return the number of years it will take to reach a population of greater than or equal to 1200
    //E:
        //At the end of the first year there will be: 
        // 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

        // At the end of the 2nd year there will be:
        // 1070 + 1070 * 0.02 + 50 => 1141 inhabitants(** number of inhabitants is an integer **)


        // At the end of the 3rd year there will be:
        // 1141 + 1141 * 0.02 + 50 => 1213

        // It will need 3 entire years.


    //P:
        // with the expanded paramaters... Create a function that takes in 4 pramaters: 
            //the first param is our starting population:
            //the second param is our percent of increase 
            // the 3rd param is for our inhabitants (can be positive or negative)
            // the last paramt is for the population thats to be exceeded. 

        //So with this, I am going to set up a funciton called nbYear. And inside the funciton, we will open a for loop, starting with the first param as our initializer, our second param, the percent will be calulated into the equation with each iteration of the loop, as will the aug (3rd param). The loop will run until the last paramater is met (p). 


        function nbYear(p0, percent, aug, p) {
    
            for (var years = 0; p0 < p; years++) {
              p0 = Math.floor(p0 + p0 * percent / 100 + aug);
            }
            return years
          }