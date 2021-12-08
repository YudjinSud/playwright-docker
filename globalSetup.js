const {chromium} = require("playwright");

async function globalSetup() {
    const browser = await chromium.launch();
}

module.exports = globalSetup;