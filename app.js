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
        response.end('Are you using post method?\n');
    } else {

        response.writeHead(200, {"test": "test2"});
        response.end('It Works!! Path Hit: ' + request.url + '\n');
    }
    
}

function handleGetReq () {}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log('it is listening for requests...');
});