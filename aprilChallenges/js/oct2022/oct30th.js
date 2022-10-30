console.log('let the games begin!')

// create a class
// when instantiated, Ball objects should accept on arguyment for ball type.
// default to regular if no arguments are passed.  
// add a get function to protect the ball type from being overridden.  

class Ball {
    constructor(ballType = 'regular') {
        this._ballType = ballType || 'regular';
    }
    get ballType() {
        return this._ballType
    }
}

ball1 = new Ball()

console.log(ball1.ballType)

