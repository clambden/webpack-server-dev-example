const path = require("path");

module.exports = {
    mode: 'development',
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    entry: [
        "./src/index.js", 
    ],    
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build"),
    },
};