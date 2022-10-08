const os = require('os')

const user = os.userInfo();
/*
console.log(user.username);
console.log(`the system uptime is ${os.uptime()} seconds`);*/

const  osStuff = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(osStuff);
