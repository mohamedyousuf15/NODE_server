 var http = require('http');
 

 http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    }).listen(3700, "192.168.1.100");
    console.log('Server running at http://192.168.1.100:3700/');
	
