//evenn before the code starts executing memory is allocated for all variables and functions


console.log(getName); //prints the function but if try for var means it is undefined
getName(); // accesing before initializing is possible for functions and var
console.log(x); // undefined

var x=7;

function getName() {
    var x=20;
    console.log(x);
}


// below functions acts as variables
console.log(getCity); //undefined
//getCity(); // i am trying to access the arrow function there comes a type error - getCity is not a function

var getCity = () => {
    var x=20;
    console.log(x);
}

console.log(getAddress);
var getAddress = function (){

}


//call stack working

var x=7;

function getName() {
    var x=20;
    console.log(x);
}
getName();