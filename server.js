const http = require('http');
const host = 'localhost';
const port = 8888;

function onRequest(request, response){
	response.writeHead(200, {"Context-Type": "text/plain"});
	response.write("Welcome to RoulEats!");
	response.end();
}

http.createServer(onRequest).listen(port);
console.log(`Server is now listening on http://${host}:${port}`);
