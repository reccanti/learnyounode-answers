const http = require("http");

const [,, ...urls] = process.argv;

let count = 0;
const collection = {};

function logData(data, url) {
   if (!collection[url])
        collection[url] = "";
    collection[url] += data; 
}

function endInput() {
    count++;
    if (count >= urls.length) {
        urls.forEach(url => {
            console.log(collection[url]);
        });
    }
}

urls.forEach(url => {
    http.get(url, response => {
        response.setEncoding("utf8");
        response.on('data', data => {
           logData(data, url); 
        }); 
        response.on('end', endInput);
        response.on('error', console.error);
    }).on('error', console.error);
});
