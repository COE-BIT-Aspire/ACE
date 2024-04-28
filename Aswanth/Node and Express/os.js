const os = require('os')
const user = os.userInfo()

console.log(user);

console.log(`The system uptime is: ${os.uptime()}`)

const check = {
    name: os.type(),
    version: os.release(),
    storageused: os.totalmem(),
    remainingused: os.freemem()
}

console.log(check);