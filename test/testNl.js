const assert = require('assert');
const { nl, formatLine, numberLines } = require('../src/nl.js');

describe('nl', () => {
  it('should number an empty line', () => {
    assert.strictEqual(nl(''), '1\t');
  });

  it('should number a line', () => {
    assert.strictEqual(nl('hello'), '1\thello');
    assert.strictEqual(nl('bye'), '1\tbye');
  });

  it('should number two lines', () => {
    assert.strictEqual(nl('hello\nbye'), '1\thello\n2\tbye');
    assert.strictEqual(nl('bye\nhello'), '1\tbye\n2\thello');
  });
});

describe('formatLine', () => {
  it('should format a line with a given line number', () => {
    assert.strictEqual(formatLine(1, 'hello'), '1\thello');
    assert.strictEqual(formatLine(2, 'world'), '2\tworld');
  });

  it('should format an empty line', () => {
    assert.strictEqual(formatLine(1, ''), '1\t');
  });
});

describe('numberLines', () => {
  it('should number a single line', () => {
    assert.deepStrictEqual(numberLines(['hello']), ['1\thello']);
    assert.deepStrictEqual(numberLines(['bye']), ['1\tbye']);
  });

  it('should number multiple lines', () => {
    assert.deepStrictEqual(numberLines(['hello', 'bye']), [
      '1\thello',
      '2\tbye',
    ]);
    assert.deepStrictEqual(numberLines(['bye', 'hello']), [
      '1\tbye',
      '2\thello',
    ]);
  });
});
