const Path=require('path');
console.log(Path.sep);


const filepath=Path.join('content','subfolder','test.txt');
console.log(filepath);

console.log(Path.basename(filepath));


const directory=Path.resolve(__dirname,'content','subfolder','test.txt');
console.log(directory);
