const { readdir } = require("fs");
const { extname } = require("path");

const dirname = process.argv[2];
const extension = process.argv[3];

function isExtension(file) {
    return extname(file) === "." + extension;
}

function formatArray(arr) {
    return arr.join("\n");
}

readdir(dirname, (err, data) => {
    if (err) throw err;
    const matchingFiles = data.filter(isExtension)
    console.log(formatArray(matchingFiles));
})
