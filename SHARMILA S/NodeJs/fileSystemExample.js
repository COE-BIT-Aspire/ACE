var fs=require('fs');
var data="Hi this is Sharmila";
console.log("File is started")
//fs.writeFileSync("sample1.txt",data);
fs.writeFile("sample2.txt",data,() => {
    console.log("File is ended");
})
console.log("Program is finished");
