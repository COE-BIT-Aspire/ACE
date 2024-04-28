const path = require('path')

const resol = path.resolve(__dirname, 'Modules and Require', 'util.js');
console.log(resol)

const base = path.basename(resol);
console.log(base)

const join = path.join('Modules and Require', 'util.js');
console.log(join)

console.log(path.sep)