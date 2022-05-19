const { splitLines, joinLines } = require('./stringUtils.js');

const formatLine = (lineNumber, line) => `${lineNumber}\t${line}`;

const numberLines = (lines, startNum, increment) =>
  lines.map((line, index) => {
    const lineNumber = index * increment + startNum;
    return formatLine(lineNumber, line);
  });

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
