const assert = require('assert');
const { createLineCounter } = require('../src/line.js');

describe('createLineCounter', () => {
  it('should number lines starting at 1 with increment of 1', () => {
    const lineCounter = createLineCounter({
      start: 1,
      incr: 1,
      predicate: (line) => line !== ''
    });
    assert.deepStrictEqual(lineCounter('hello'), {
      line: 'hello',
      lineNumber: 1,
    });
    assert.deepStrictEqual(lineCounter(''), {
      line: '',
    });
    assert.deepStrictEqual(lineCounter('hello'), {
      line: 'hello',
      lineNumber: 2,
    });
  });

  it('should number lines starting at 2 with increment of 3', () => {
    const lineCounter = createLineCounter({
      start: 2,
      incr: 3,
      predicate: (line) => line !== ''
    });
    assert.deepStrictEqual(lineCounter('hello'), {
      line: 'hello',
      lineNumber: 2,
    });
    assert.deepStrictEqual(lineCounter(''), {
      line: '',
    });
    assert.deepStrictEqual(lineCounter('hello'), {
      line: 'hello',
      lineNumber: 5,
    });
  });
});
