const EventEmitter=require('events');
const http=require('http');

class EventCreater extends EventEmitter{

    sessionReminder(reminder)
    {
        console.log(reminder);

        this.emit('Meeting',{MeetingId:3476,Meeting_Link:'www.hubino.com/meeting3476'});

        const server=http.createServer((request, response) =>{
                if(request.url==='/hubino/meeting')
                {
                    response.write('Welcome to the Hubino Meeting Section');
                    response.end();
                }
        

                if(request.url==='/hubino/career')
                {
                    response.write('Welcome to Hubino Career Section');
                    response.end();
                }
    
        });
        server.listen(8080);
        console.log('Server Running in Port:8080');

    }

}
module.exports=EventCreater;



