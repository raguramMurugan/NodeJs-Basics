const EventEmitter=require('events');
class EventArgsModule extends EventEmitter{

    companyWebsite(url) {
        console.log(url);

        this.emit('New User Default Login Credentials',{password:'Hub@123',username: 'userHub'});
        this.emit('Timesheet Reminder',{message:'Kindly fill the TimeSheets',url:'www.clockify.com/hubino'});
    }
}
module.exports=EventArgsModule;