function mainFun(callFun)
{
    console.log("Main function")
    //console.log(callBack())
    callFun()
}
function callBack()
{
    console.log("Callback function")
}
//mainFun()
mainFun(callBack)