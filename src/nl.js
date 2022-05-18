const formatLine = (lineNumber, line) => `${lineNumber}\t${line}`;

const numberLines = lines =>
  lines.map((line, index) => formatLine(index + 1, line));

const nl = content => {
  const lines = content.split('\n');
  const numberedLines = numberLines(lines);
  return numberedLines.join('\n');
};

exports.nl = nl;
exports.numberLines = numberLines;
exports.formatLine = formatLine;
