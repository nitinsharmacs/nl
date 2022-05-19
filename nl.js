const fs = require('fs');

const { nlMain } = require('./src/nlLib.js');

const main = () => {
  try {
    console.log(nlMain(fs.readFileSync, ...process.argv.slice(2)));
  } catch (error) {
    console.log(error.message);
  }
};

main();
