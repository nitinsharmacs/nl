const fs = require('fs');

const { nlMain } = require('./src/nlLib.js');

const main = () =>
  console.log(nlMain(fs.readFileSync, ...process.argv.slice(2)));

main();
