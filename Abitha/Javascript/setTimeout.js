function x()
{
    var i=1;
    setTimeout(function()       //here this function forms a closure, the setTimeout will take the call back function and
    {                           //stores it somewhere and attaches timer to it, and the js proceeds with work as js don't wait for anything
                                //once the timer expires ,it takes that function and puts it in call stacks and runs    
        console.log(i);
    },8000);
    console.log("It will print before i, which is waiting for timer to complete");
}
x();

//print 1 to 5 like it should have time gap 1s for 1,2s for 2 ...5s for 5.
// for (var i=1;i<=5;i++)
// {
//     setTimeout(function()
//     {
//         console.log(i);
//     },i*1000);
// } 
// but here we don't get the expected result :(  ,the loop will run continuously again and again as it waits for none.
// because when the function is taken out and stored somewhere , it comes after timer expires , it points or remembers the referece of i..so it has 6.
//this can be resolved by using let instead of var..as it has block scope , each time it will be like a new copy of i in the scope

//what if don't use let, should use var - we solve this by using closure
for (var i=1;i<=5;i++)
{
    function close(i)
    {
        setTimeout(function()
        {
            console.log(i);
        },i*3000);
    }
    close(i);  // everytime settimeout was invoked a new copy of i is created
}


//don't believe in setTimeout


console.log("Start");
setTimeout(function callback()
{
    console.log("call back");
},5000);
console.log("End");
//...some million lines of code executes

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000)
{
    endDate = new Date().getTime();
}
console.log("While expires");

//here the setTimeout is taken out and stored somewhere like call stack queue until its timer expires, on the same time the other works will be carried out so that may take more time,
//after the completion of the current work in the call stack only, the work completed in call stack queue will be put into call stack.
//so setTimeout will wait for the given time , but some times the waiting duration may exceed based on the other work.
//why only one call stack, why should it wait? :)
//because js is sync ..single threaded language - it has one main thread


//why this?
console.log("Start");
setTimeout(function callback()
{
    console.log("call back");
},0);
console.log("End");
//sometimes we need something to be executed at last or something not much important..i.e., after global execution context