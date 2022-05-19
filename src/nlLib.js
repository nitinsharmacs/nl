const { createLineCounter } = require('./line.js');
const { splitLines, joinLines } = require('./stringUtils.js');

const formatLine = ({ lineNumber, line }) =>
  isFinite(lineNumber) ? `${lineNumber}\t${line}` : line;

const formatLines = numberedLines => numberedLines.map(formatLine);

const numberLines = (lines, startNum, increment) => {
  const countLine = createLineCounter(startNum, increment);
  const numberedLines = lines.map(countLine);
  return formatLines(numberedLines);
};

const nl = (content, { startNum, increment }) => {
  const lines = splitLines(content);
  const numberedLines = numberLines(lines, startNum, increment);
  return joinLines(numberedLines);
};

const nlMain = (fileName, readFile) => {
  const content = readFile(fileName, 'utf8');
  return nl(content, { startNum: 1, increment: 1 });
};

exports.nl = nl;
exports.numberLines = numberLines;
exports.formatLine = formatLine;
exports.nlMain = nlMain;
