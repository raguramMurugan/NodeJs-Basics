const EventEmitter=require('events');
const { emit } = require('process');
const emitter=new EventEmitter();

emitter.on('Office Updates',function(){
console.log("Weekly 3 Days Work From Home Allowed");
});

emitter.on('Office Updates',function(){
    console.log("Only 150 Members are allowed for 1st Shift");
});
emitter.emit('Office Updates');