const assert = require('assert');
const { nl, formatLine, numberLines } = require('../src/nl.js');

describe('nl', () => {
  it('should number an empty line starting from 1', () => {
    assert.strictEqual(nl('', 1), '1\t');
  });

  it('should number a line starting from 1', () => {
    assert.strictEqual(nl('hello', 1), '1\thello');
    assert.strictEqual(nl('bye', 1), '1\tbye');
  });

  it('should number two lines starting from 1', () => {
    assert.strictEqual(nl('hello\nbye', 1), '1\thello\n2\tbye');
    assert.strictEqual(nl('bye\nhello', 1), '1\tbye\n2\thello');
  });

  it('should number a line starting from 2', () => {
    assert.strictEqual(nl('hello', 2), '2\thello');
    assert.strictEqual(nl('bye', 2), '2\tbye');
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
  it('should number a single line starting from 1', () => {
    assert.deepStrictEqual(numberLines(['hello'], 1), ['1\thello']);
    assert.deepStrictEqual(numberLines(['bye'], 1), ['1\tbye']);
  });

  it('should number multiple lines starting from 1', () => {
    assert.deepStrictEqual(numberLines(['hello', 'bye'], 1), [
      '1\thello',
      '2\tbye',
    ]);
    assert.deepStrictEqual(numberLines(['bye', 'hello'], 1), [
      '1\tbye',
      '2\thello',
    ]);
  });

  it('should number a single line starting from 2', () => {
    assert.deepStrictEqual(numberLines(['hello'], 2), ['2\thello']);
    assert.deepStrictEqual(numberLines(['bye'], 2), ['2\tbye']);
  });
});
