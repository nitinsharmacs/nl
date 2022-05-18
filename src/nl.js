const formatLine = (lineNumber, line) => `${lineNumber}\t${line}`;

const numberLines = content => {
  const lines = content.split('\n');
  const numberedLines = lines.map((line, index) => formatLine(index + 1, line));
  return numberedLines.join('\n');
};

exports.numberLines = numberLines;
exports.formatLine = formatLine;
