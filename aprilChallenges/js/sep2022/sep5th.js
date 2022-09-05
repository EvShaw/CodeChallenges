// *****************************************************
// @246:How many lightsabers do you own?
// given a name as an arguemnt, if the name is zach, return 18 else return 0. 


//no additional edge cases. 
//return 18 as an integer. 

function howManyLightsabersDoYouOwn(name) {
    if(name === 'Zach') return 18
    else return 0
}

// *****************************************************
// @245: Grasshopper - Debug

function weatherInfo (temp) {
    let c = convertToCelsius(temp)
    if (c <= 0)
      return (c + " is freezing temperature")
    else
      return (c + " is above freezing temperature")
  }
  
  function convertToCelsius (temperature) {
    let celsius = (temperature - 32) * 5/9
    return celsius
  }