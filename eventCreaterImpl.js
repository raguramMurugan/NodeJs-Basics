const EventCreater=require('./eventCreater');


const eventCreaterImpl=new EventCreater();

eventCreaterImpl.on('Meeting', (meetingId,meetingLink)=>{
    console.log(meetingId,meetingLink);
});

eventCreaterImpl.sessionReminder('Kindly Join the Meeting sharply at 6PM');
