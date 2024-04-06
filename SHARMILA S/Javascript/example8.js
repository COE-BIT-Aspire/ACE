function demo()
{
    console.log("This is first statement")
    setTimeout(()=>{
        console.log("This is set timeout method")
    },7000);

    console.log("This is last statement")
}
demo();