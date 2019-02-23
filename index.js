/*
    In this part we will learn how to render different html files
    according to the routes.
*/

/*
    url: The URL module splits up a web address into readable parts.
    fs: The Node.js file system module allows you to work with the file system on your computer.
*/
const http = require('http');
const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// Creating server
const server = http.createServer(function(req, res) {
    
    // Getting the url path with the help of url module
    const q = url.parse(req.url, true);

    // Trying to get the file name which is asked
    const filename = "./static" + q.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
            // If the required file does not exists then we will land here
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }

        // If there is no error means we have got the file
        // Just print it as it is.
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
});

// Reading requests and sending responses
server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});

// Just run yarn start in your terminal or command prompt   