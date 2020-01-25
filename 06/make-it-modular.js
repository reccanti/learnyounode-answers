const filterFilesByExtension = require("./mymodule");

const dirname = process.argv[2];
const extension = process.argv[3];

function formatArray(arr) {
    return arr.join("\n");
}

filterFilesByExtension(dirname, extension, (err, files) => {
    if (err) throw err;
    console.log(formatArray(files));
})
