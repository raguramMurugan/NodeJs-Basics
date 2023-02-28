const EventEmitter=require('events');

class Company extends EventEmitter{

    companyUpdates(updates) {
        console.log(updates);
        this.emit('Server down',{message:'Due to server Maintainance Company site will down fr 2 hours',AlternateUrl:'www.hubino2.com'});
    }
}
module.exports=Company;