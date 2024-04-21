var fs=require('fs');

fs.readFile("sample1.txt",(err,data) => {
    if(err)
    {
        console.log("File is in error");
    }
    else
    {
        console.log(data.toString());
    }
})