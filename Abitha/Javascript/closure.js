// function along with its lexical scope bundled together forms a closure

function outer()
{
    var a=10;
    function inner()
    {
        console.log(a);
    }
    // inner();
    a=100;
    return inner; //here the function along with its lexical scope is returned 
                  //so later down in the code inner() can access a even thoung it is out of where it is defined.
}
var x = outer();
console.log(x);
x();

// both are same , here the function is directly returned
// function outer()
// {
//     var a=10;
//     return function inner()
//     {
//         console.log(a);
//     }
// }


function outer_parent()
{
    var num1=20;
    function inner1()
    {
        var num2=30;
        function inner2()
        {
            console.log(num1,num2);
        }
        num2=100;
        inner2(); 
    }
    inner1();
}
outer_parent();