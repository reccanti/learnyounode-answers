const net = require("net");

const port = process.argv[2];

function format(num, spaces) {
	let numString = num.toString();
	while (numString.length < spaces) {
		numString = "0" + numString;
	}
	return numString;
}

const server = net.createServer(socket => {
	const date = new Date();

	const year = format(date.getFullYear(), 4);
	const month = format(date.getMonth() + 1, 2);
	const day = format(date.getDate(), 2);
	const hour = format(date.getHours(), 2);
	const min = format(date.getMinutes(), 2);
	
	const formattedDate = `${year}-${month}-${day} ${hour}:${min}`;
	socket.end(formattedDate + '\n');
});
server.listen(port);
