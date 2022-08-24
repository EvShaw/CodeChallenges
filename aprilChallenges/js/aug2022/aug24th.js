
//***************************************************************

// @298: 
    // reverse list order. 
    

    // take an array, and reverse it. could easily be done with .reverse method. but, stepping it up, map would be more fun. 
    //create a function that accepts an array. 
        // map the array with all of the methods callbacks. look at the array with an index of length, minus the index being mapped, minus 1 for zero based counting: 

        function reverseList(list) {
            return list.map((el, ind, arr) => arr[arr.length - ind - 1])
        }

        console.log(reverseList([1,2,3,4]))