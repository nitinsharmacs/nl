const formatLine = (lineNumber, line) => `${lineNumber}\t${line}`;

const splitLines = content => content.split('\n');
const joinLines = lines => lines.join('\n');

const numberLines = lines =>
  lines.map((line, index) => formatLine(index + 1, line));

const nl = content => {
  const lines = splitLines(content);
  const numberedLines = numberLines(lines);
  return joinLines(numberedLines);
};

exports.nl = nl;
exports.numberLines = numberLines;
exports.formatLine = formatLine;
