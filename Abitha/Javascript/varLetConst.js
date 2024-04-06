// let and const declarations are hoisted and they are in the temporal deadzone
// in js, all the variables with var declarations will create its memory in global scope before initialization, 
// but the let and const creates its memory separately so it can be used only after initialization.
// undefined here is a placeholder that holds memory, which is replaced by value on initialization.
// var - global scope
// let and const - block scope

console.log(a);  //undefined
var a;           //it holds the value undefied until a value is assignrd to a.

if (a===undefined)
console.log("a is undefined");
else
console.log("a is not defined");

//console.log(x);  //not defined - which is allocated any memory

// console.log(b);  //reference error - cannot access before initialization
var a=10;
let b=20;

console.log(b);
// const c;  // syntax error - Missing initializer in const declaration

const c=30;
console.log(c);

// c=40; // type error - Assignment to constant variable

//js variables accepts all assignments
var x=100;
console.log(x);
x="abc";
console.log(x);