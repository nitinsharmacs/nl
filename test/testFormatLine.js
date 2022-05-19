const assert = require('assert');
const { formatLine } = require('../src/nlLib.js');

describe('formatLine', () => {
  it('should format a line with a given line number', () => {
    const separator = '\t';
    assert.strictEqual(
      formatLine({ lineNumber: 1, line: 'hello' }, separator),
      '1\thello'
    );
    assert.strictEqual(
      formatLine({ lineNumber: 2, line: 'world' }, separator),
      '2\tworld'
    );
  });

  it('should not format a non-numbered line', () => {
    const separator = '\t';
    assert.strictEqual(formatLine({ line: 'hello' }, separator), 'hello');
  });

  it('should use | as a separator', () => {
    const separator = '|';
    assert.strictEqual(
      formatLine({ lineNumber: 1, line: 'hello' }, separator),
      '1|hello'
    );
  });
});
