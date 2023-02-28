const http=require('http');

const server=http.createServer((request, response)=>{
if(request.url=== '/')
{
    response.write('Welcome to Hubino');
    response.end();
}

if(request.url==='/hubino/home')
{
    response.write('This is the Official Site of Hubino');
    response.end();
}
});

server.listen(8080);
console.log("Port Running on 8080");