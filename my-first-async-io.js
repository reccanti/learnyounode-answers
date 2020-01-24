const { readFile } = require("fs");

const filename = process.argv[2];
readFile(filename, 'utf8', (err, data) => {
    if (err)
        throw err;
    const lines = data.split("\n");
    const lc = lines.length - 1;
    console.log(lc);
});
