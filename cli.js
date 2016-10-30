var http = require('http');

http.get('http://localhost:8080/headers', function(response) {
    console.log('Status:', response.statusCode);
    console.log('Headers: ', response.headers);
    response.pipe(process.stdout);
});

var options = {
    host: 'localhost',
      port: '8080',
      path: '/headers',
      method: 'POST',
      headers: {
          'Content-Type': 'text/plain',
          'test': 'thisistest'
      }
}

var newReq = http.request(options, function (res) {
    console.log('Status:', response.statusCode);
    console.log('Headers: ', response.headers);
    response.pipe(process.stdout);
});

newReq.end();