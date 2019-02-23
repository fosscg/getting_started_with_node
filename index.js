/*
    Every node.js application has 3 parts
    1. Importing required modules
    2. Creating Server
    3. Reading requests and sending responses
*/

// Importing required and desired modules
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Creating server
const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to Facebook Developers Club Raipur\n Hello World!!!');
});

// Reading requests and sending responses
server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});

// Just run yarn start in your terminal or command prompt   