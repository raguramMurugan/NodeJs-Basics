const EventEmitter=require('events');


const EventArgsModule=require('./eventArgsModule');
const eventModule=new EventArgsModule();

eventModule.on('New User Default Login Credentials',(eventArgs1,eventArgs2)=>{
    console.log(eventArgs1,eventArgs2);
});

eventModule.on('Timesheet Reminder',(timeSheet1,timeSheet2)=>{
    console.log(timeSheet1,timeSheet2);
});
eventModule.companyWebsite('www.hubino.com');


//const greeting=require('./appImpl');
//greeting('Good Morning Team');