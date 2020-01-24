const fs = require("fs");

// get the filename, which is the second
// argument passed
const filename = process.argv[2];

const buf = fs.readFileSync(filename);

// get the number of lines in the file
// account for the last line, which has
// no newline
const lines = buf.toString().split("\n");
const lc = lines.length - 1;

console.log(lc);
