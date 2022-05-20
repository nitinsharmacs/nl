const { createLineCounter } = require('./line.js');
const { parseArgs } = require('./parseArgs.js');
const { splitLines, joinLines } = require('./stringUtils.js');

const formatLine = ({ lineNumber, line }, separator) =>
  isFinite(lineNumber) ? `${lineNumber}${separator}${line}` : line;

const isNotEmptyLine = (line) => {
  return line !== '';
};

const numberLines = (lines, startNum, increment) => {
  const countLine = createLineCounter({
    start: startNum,
    incr: increment,
    predicate: isNotEmptyLine
  });
  return lines.map(countLine);
};

const nl = (content, { startNum, increment, separator }) => {
  const lines = splitLines(content);
  const numberedLines = numberLines(lines, startNum, increment);
  const formattedLines = numberedLines.map(line => formatLine(line, separator));
  return joinLines(formattedLines);
};

const nlMain = (readFile, ...args) => {
  const { fileName, options } = parseArgs(args);
  let content;
  try {
    content = readFile(fileName, 'utf8');
  } catch (error) {
    throw {
      name: 'FileReadError',
      message: `Unable to read ${fileName}`,
      fileName,
    };
  }
  return nl(content, options);
};

exports.nl = nl;
exports.numberLines = numberLines;
exports.formatLine = formatLine;
exports.nlMain = nlMain;
