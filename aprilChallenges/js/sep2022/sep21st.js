//using Array.prototype.reverse 

//inside the prototype, create a variable that will capture 'this'. 
//inside the arr variable, use the splice method, passing in only a 0, where the splice will start. Not deleting anything or inserting, only a sinlge argument is needed. 
//open a loop that will run for the duration of the length of arr. 
    //we will ensure we're not running an infinite loop by pushing into this, the end element with  the  pop method. 

//return this. 

Array.prototype.reverse = function () {
    const arr = this.splice(0)

    while (arr.length) {
        this.push(arr.pop())
    }

    return this
};


console.log(reverse([1, 2, 3, 4]))