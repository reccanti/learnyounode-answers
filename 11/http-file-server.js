const http = require("http");
const fs = require("fs");

const port = Number(process.argv[2]);
const fileLocation = process.argv[3];

const server = http.createServer((request, response) => {
	const fileStream = fs.createReadStream(fileLocation);
	fileStream.on('open', () => {
		response.writeHead(200, { 'content-type': 'text/plain' });
		fileStream.pipe(response);
	});
	fileStream.on('error', error => {
		fileStream.pipe(response);
	});
}).on("error", error => console.error);

server.listen(port);
