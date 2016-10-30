'use strict';

var http = require('http');

const PORT = 8080;

function handleRequest(request, response) {
    console.log('a client came...');
    
    console.log(request.headers);
    console.log(request.method);
    console.log(request.url);
    
    if (request.method === 'POST') {
        response.writeHead(200, {"test": "test1"});
        response.end('Are you using omg post method?\n');
    } else {

        response.writeHead(200, {"test": "test2"});
        response.end('It Works!! OMG!! Path Hit: ' + request.url + '\n');
    }
    
}

var server = http.createServer(handleRequest);

server.listen(process.env.PORT || PORT, function () {
    console.log('it is listening for requests...');
});