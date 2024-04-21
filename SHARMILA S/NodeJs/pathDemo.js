var path=require('path');
var filename = {dir: "\\dir2\\dir3\\",base:"text.txt"}
var exactpath = path.format(filename);
console.log(exactpath)

var xpath= path.join("test","dummy","basefile.txt")
console.log(xpath)