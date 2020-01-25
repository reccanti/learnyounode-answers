const http = require("http");

const url = process.argv[2];

http.get(url, response => {
    let string = "";
    response.setEncoding("utf8");
    response.on('data', data => {
        string += data;
    });
    response.on('end', () => {
        console.log(string.length);
        console.log(string);
    });
    response.on('error', console.error);
}).on('error', console.error);;
