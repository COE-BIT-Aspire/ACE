const OS=require('os');
//user info
console.log(OS.userInfo());
//system uptime
console.log( OS.uptime());
const currentOS=
{
    name:OS.type(),
    TotMem:OS.totalmem(),
    FreeMem:OS.freemem(),

}
console.log(currentOS);
