/*  Practice Problem
Create a Stoplight object that has the following functions a a part of its prototype:

Stoplight(color)
- change() convert from red to gree, green to yellow, or yellow to red 
*/

//1.  create a Stoplight constructor...//prototypes typically only drawn from constructors
//2.  create prototypes:
        //- Red, Yellow, green
        //- change

        //red - returns boolean
        //yellow - returns boolean
        //green - returns boolean
        //change - green --> yellow, yellow --> red, red --> green


function Stoplight(color) {
    this.color = color;

    return this;    //return the new object
};

//prototypes here
Stoplight.prototype.red = function() {
    return (this.color === 'red');
};

Stoplight.prototype.green = function () {
    return (this.color === 'green');
}

Stoplight.prototype.yellow = function() {
    return (this.color === 'yellow');
}

Stoplight.prototype.change = function() { //the function that changes their color can be shared
    if (this.yellow()) { //if the yellow function is true
        this.color = 'red';
    } else if (this.red()) { //same as if (this.red() === true)
        this.color = 'green';
    } else {                //final else is read as otherwise
        this.color = 'yellow';  //use else to say ONLY one of these things can happen, an exclusive or
    }
};

let stoplight = new Stoplight('red');
console.log(stoplight.red());