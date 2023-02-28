const os=require('os');

const freeMemory=os.freemem(); //free memory in OS
const totalMemory=os.totalmem(); //Total Memory in OS

console.log(`Free Memory: ${freeMemory}`);
console.log(`Total Memory: ${totalMemory}`);
