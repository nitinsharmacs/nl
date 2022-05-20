const lineNumberer = function (line) {
  const numberedLine = { line };
  if (this.predicate(line)) {
    numberedLine.lineNumber = this.currentLine;
    this.currentLine += this.increment;
  }
  return numberedLine;
};

const createLineCounter = ({ start, incr, predicate }) => {
  const numbererConfig = { currentLine: start, increment: incr, predicate };
  return lineNumberer.bind(numbererConfig);
};

exports.createLineCounter = createLineCounter;
