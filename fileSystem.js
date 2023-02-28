const fileSystem=require('fs');
fileSystem.readdir('&',function(err,files){
    if(err) console.log('Error:',err);
    else
    console.log('Success:',files);
});