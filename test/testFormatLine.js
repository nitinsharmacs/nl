const assert = require('assert');
const { formatLine } = require('../src/nlLib.js');

describe('formatLine', () => {
  it('should format a line with a given line number', () => {
    assert.strictEqual(
      formatLine({ lineNumber: 1, line: 'hello' }),
      '1\thello'
    );
    assert.strictEqual(
      formatLine({ lineNumber: 2, line: 'world' }),
      '2\tworld'
    );
  });

  it('should not format a non-numbered line', () => {
    assert.strictEqual(formatLine({ line: 'hello' }), 'hello');
  });
});
