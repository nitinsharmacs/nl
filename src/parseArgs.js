const parseArgs = args => {
  const keys = { '-v': 'startNum', '-i': 'increment', '-s': 'separator' };
  const options = { startNum: 1, increment: 1, separator: '\t' };
  for (let index = 0; index < args.length - 1; index += 2) {
    const [option, value] = args.slice(index, index + 2);
    const key = keys[option];
    options[key] = isFinite(value) ? +value : value;
  }
  return { fileName: args[args.length - 1], options };
};

exports.parseArgs = parseArgs;
