// //Functions
// function greetings(){
//     console.log("Hello coder!!");
// }
// greetings();//calling the functions

// function greetings1(name){
//     console.log("Hello coder!! "+name);
// }
// greetings1("Thianesh");//parameterized

// function greetings2(name = "Anonymous"){
//     console.log("Hello coder!! "+name);
// }
// greetings2();//whenever no value is provided it will take the default value.

// function ageChecker(age){
//     return age>=18?true:false; //function which returns a value
// }
// console.log(ageChecker(18));
// console.log(ageChecker(16));

// let mark = function(marks){//Anonymous functions
//     return marks>40 ? "Passed" : "Failed";
// }
// console.log(mark(100));
// console.log(mark(30));

// const nameEditor = (fname , lname) => console.log(fname + ' ' + lname);
// nameEditor("Thianesh","Govindasamy");

//call back function
function greet(callback){
    callback();
}
function callback(){
    console.log("greetings!!");
}
greet(callback);

// //function inside a function
// function numInput1(number1){
//     return function numInput2(number2){
//         return number1+number2;
//     }
// }

// let num1 = numInput1(10);
// let num2 = num1(20);
// console.log(num2);

// //Scopes
// var name = "Thianesh";// Global variable
// function greet(){
//     name = "Thianesh Govindasamy";
//     console.log("hello "+ name);
// }
// greet();
// console.log(name);

// //error handling
// let x=10;
// try {
//     x.toPrecision(200);
// } catch (error) {
//     throw "Precision error :"+error;
// } finally{
//     console.log("Coudn't complete");
// }