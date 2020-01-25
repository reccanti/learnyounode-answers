const fs  = require("fs");
const { extname } = require("path");

module.exports = function filterFilesByExtension(directory, extension, callback) {
    function isExtension(file) {
        return extname(file) === "." + extension;
    }
    fs.readdir(directory, (err, files) => {
        if (err) {
            return callback(err);
        }
        const matchingFiles = files.filter(isExtension)
        callback(null, matchingFiles);
    });
}
