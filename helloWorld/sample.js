var protocol=require("http");
protocol.createServer(function (request, response)
{
    response.writeHead(200, {'Content-type':'text/html'});
    response.end('Hello first node app ...');
}).listen(8000)

// run with node sample.js
// open web to localhost://8000