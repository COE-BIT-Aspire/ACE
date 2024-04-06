// functions can be assigned to variables in js , also it can be given as arguments for functions, we can return a function from a function

//anonymous function - function without a name (it can be used where functions are used as values)
// function (){}  // invalid syntax - requires a function name)
var f1 = function (){
    console.log("anonymous function , where funcction treated as variable");
}
f1();

//named function 
var f2 = function xyz(){
    console.log("named function");
    console.log(xyz);
}
f2();
//xyz(); // throws an error , here xyz is not created in global , so if we want use that means we can use it inside the function intself.

//call back function - when we a pass a function inside another function , then the passing function is called call back function
function x(y)
{
    console.log(y);
    y();
}
x(function y(){
   console.log("this is a call back function, now it can be accessed inside x whenever needed,we give the resposibility of y() to x()");
})

//higher order function

//arrow function

//pure function

//first class function - the ability to use functions as values,passed as arguments to another funtions,or returned from functions
var fc = function (param1){
    console.log(param1);
    return function xyz(){
    };
}
function demo(){}
console.log(fc(demo));


//function statement vs function expression 
a();
// b(); //type error

//diff btn these is hoisting
function a()
{
    console.log("This is a function statement/declaration");
}

var b = function () {
    console.log("This is a function expression");
}
// b();



