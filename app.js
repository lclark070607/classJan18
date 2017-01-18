/*  
"Modern JS", circa 2016

- arrow functions
- default parameters
- template literals
- shortand function properties
- destructuring
- es6 modules

*/

/* Arrow functions
* Shorthand for writing anonymous functions.
* . if there's only one param, you cand rop the parentheses.
* . if there's only one line in your function body, you can drop the squiggles
* . the only difference between an arrow function and a normal function is that
* . arrow functions DO NOT CHANGE THE VALUE OF THIS.
*/
//ES5
let nums = [4, 6, 2];
nums.maps(function (num) {
    return num * num
});
//ES6   parameter => return
nums.map(num => num * num);
//could also do 
let

    //arrow function w/ no parameters and a longer body.
    window.addEventListener('load', () => { //could use function ()
        console.log('hi');
    });

/* Template literals


*/

function greet(tidings, name) {
    console.log(tidings + ', fair' + name);
}

greet('Good morrow', 'Jacqueline');

//ES6
console.log(`${tidings}, fair ${name}`);

//ES6
let greet = (tidings, name) => {
    console.log(`${tidings}, fair ${name}`); //backtics instead of quotes
}

/* Default parameters

*/

function greet(tidings, name = 'Jeb') {
    console.log(`${tidings}, fair ${name}`);
}

let greet = (tidings, name = 'Jeb') => `${tidings}, fair ${name}`; //same as above, one line function

greet('Good morrow');  //returns Good morrow, fair Jeb
greet('Good morrow', 'Lucretia');

//Shorthand functions

//ES5
let stoplight = {
    color: 'red',
    red: function red() {  //only works for properties that are functions
        return this.color === 'red';
    }
}

//ES6
let stoplight = {
    color: 'red',
    red() {  //only works for properties that are functions
        return this.color === 'red';
    }
}

//Const
//const is an alternative to let/var
//'const' makes a variable 'constant', i.e. unable to be reassigned.
//It does NOT make a variable unchangeable.  It makes it un-reassignable.
//useful if you want to create a variable that you don't want to change.

const user = 'Luke';
user = 'house' . //not going to works

const roster = [];
roster.push('fred');

//anytime you querySelect an element is going to be const

//Destructuring

const phone = '944 671 4919';
//const parts = phone.split('');
const [area, first, last] = phone.split('');  //naming elements inside the array
console.log(area);

// function showPerson(subject) {

// }

function showPerson({ name, age, hometown }) { . //don't have to include all the object properties
    console.log(name);
}
const person = {
    name: 'Jan',
    age: 11,
    hometown: 'Greenbow, AL',
};

showPerson(person);