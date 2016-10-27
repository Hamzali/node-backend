'use strict';

http = require('http');

const PORT = 8080;

function handleRequest(request, response) {
    response.end('It Works!! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);

server.createServer(PORT, function () {
    console.log('it is listening for requests...');
});