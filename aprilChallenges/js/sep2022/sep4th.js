//***************************************************************
//lvl5 kata: Moving zeroes to the end: 

//inside the function: 
//filter over the array, looking at each element and filtering out if it does not equal 0. 
//concat that with another filter on the same array that looks at each element and filters the element that does equal 0
//the first filter removes all the non zeroes and places them in the front whereas the second filter than removes all the zeroes and places them at the end.
//I also learned that zeros and zeroes are both correct... the more you know. 
//return the filtered array for the result. 

const moveZeros = data => {
    return data.filter(a => a !== 0).concat(data.filter(a => a === 0))
}
