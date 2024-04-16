//require is used to access all the modules

let names = require('./names') 
let Printer = require('./utils')
let items = require('./alternate')
let sample = require('./alternate')
require('./other alternatives')

console.log(names);
console.log(Printer);

setTimeout(() => {
    console.log(items);
},1000);

Printer('Sanji');
Printer(names.a);
Printer(names.b);