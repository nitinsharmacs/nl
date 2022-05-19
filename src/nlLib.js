const { splitLines, joinLines } = require('./stringUtils.js');

const formatLine = (lineNumber, line) => `${lineNumber}\t${line}`;

const formatLines = numberedLines =>
  numberedLines.map(({ lineNumber, line }) =>
    lineNumber ? formatLine(lineNumber, line) : line
  );

const numberNonEmptyLine = function (line) {
  const numberedLine = { line };
  if (line !== '') {
    numberedLine.lineNumber = this.currentLineNum;
    this.currentLineNum += this.increment;
  }
  return numberedLine;
};

const createCountableLine = (startNum, increment) => {
  return numberNonEmptyLine.bind({ currentLineNum: startNum, increment });
};

const numberLines = (lines, startNum, increment) => {
  const countLine = createCountableLine(startNum, increment);
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
