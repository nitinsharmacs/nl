const fs = require('fs');

const { nlMain } = require('./src/nlLib.js');

const main = () => console.log(nlMain(process.argv[2], fs.readFileSync));

main();
