const {chromium} = require("playwright");
const path = require("path");


const config = {
    globalSetup: path.resolve("./globalSetup.js"),
    use: {
        headless: false,
        viewport: {width: 1280, height: 720},
        ignoreHTTPSErrors: true,
    },
};

module.exports = config;
