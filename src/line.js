const numberNonEmptyLine = function (line) {
  const numberedLine = { line };
  if (line !== '') {
    numberedLine.lineNumber = this.currentLineNum;
    this.currentLineNum += this.increment;
  }
  return numberedLine;
};

const createLineCounter = (startNum, increment) => {
  return numberNonEmptyLine.bind({ currentLineNum: startNum, increment });
};

exports.createLineCounter = createLineCounter;
