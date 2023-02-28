const EventEmitter=require('events');

const Company=require('./company');
const company=new Company();

company.on('Server down',(evenArgs1, eventArgs2)=>{
    console.log(evenArgs1, eventArgs2);
});
company.companyUpdates('Attention All Emplyees, Kindly find the below Updates');