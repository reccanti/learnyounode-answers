const http = require("http");
const stream = require("stream");

const port = Number(process.argv[2]);

// a transform stream that takes a chunk, converts
// it to a string, and then uppercases it.
const uppercaser = new stream.Transform({
	transform(chunk, encoding, callback) {
		const uppercaseString = chunk.toString().toUpperCase();
		callback(null, uppercaseString);
	}
});

const server = http.createServer((request, response) => {
	if (request.method !== 'POST') 
		return res.end('not a POST request');
	request.pipe(uppercaser).pipe(response);
}).on("error", error => console.error);

server.listen(port);
