//***************************************************************
//@256:

//GCAT 
//U

// Create a function which translates a given DNA into RNA. 
    // T -> U
    // with in the function, convert all T's to U's. using the replace method and regext. 
    
function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }
  
  //***************************************************************
//@255: Will you make it?

// fuel is running out, nearest pump is 50 miles aways. On average, you get 25 miles per gallon, with 2 gallons left 
  //given three arguments: 
            // distanceToPump
            //mpg
            // and fuel left,
            //determine if you will make it to the pump. 

    // inputs will always be numbers. positive, no edge cases. 
        // return BOOLEAN

    // inside the function, set an equation within a conditional: if mpg*fuel >= distance return true, else it would be false. 

    const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
        if(mpg*fuelLeft >= distanceToPump) return true
        else return false
    };

    console.log(zeroFuel(100, 50, 1))
    console.log(zeroFuel(50, 25, 2))
    console.log(zeroFuel(0))

  //***************************************************************
//@254: Grasshopper - Messi Goals 
//return the total number of goals from all the leagues. 
    //given a function that accepts three prams, sum them all and return the value. 

    const goals = (a,b,c) =>(a+b+c)


  //***************************************************************
//@253: