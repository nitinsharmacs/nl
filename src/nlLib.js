const formatLine = (lineNumber, line) => `${lineNumber}\t${line}`;

const NEWLINE = '\n';
const splitLines = content => content.split(NEWLINE);
const joinLines = lines => lines.join(NEWLINE);

const numberLines = (lines, startNum) =>
  lines.map((line, index) => formatLine(index + startNum, line));

const nl = (content, startNum) => {
  const lines = splitLines(content);
  const numberedLines = numberLines(lines, startNum);
  return joinLines(numberedLines);
};

exports.nl = nl;
exports.numberLines = numberLines;
exports.formatLine = formatLine;
