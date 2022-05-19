const assert = require('assert');
const { nl, numberLines } = require('../src/nlLib.js');

describe('nl', () => {
  it('should not number an empty line', () => {
    const options = { increment: 1, startNum: 1 };
    assert.strictEqual(nl('', options), '');
  });

  it('should number a line starting from 1', () => {
    const options = { increment: 1, startNum: 1 };
    assert.strictEqual(nl('hello', options), '1\thello');
    assert.strictEqual(nl('bye', options), '1\tbye');
  });

  it('should number two lines starting from 1', () => {
    const options = { increment: 1, startNum: 1 };
    assert.strictEqual(nl('hello\nbye', options), '1\thello\n2\tbye');
    assert.strictEqual(nl('bye\nhello', options), '1\tbye\n2\thello');
  });

  it('should number a line starting from 2', () => {
    const options = { increment: 1, startNum: 2 };
    assert.strictEqual(nl('hello', options), '2\thello');
    assert.strictEqual(nl('bye', options), '2\tbye');
  });

  it('should increment a line number by 2', () => {
    const options = { startNum: 1, increment: 2 };
    assert.strictEqual(nl('hello\nbye', options), '1\thello\n3\tbye');
  });
});

describe('numberLines', () => {
  it('should not number empty lines by default', () => {
    assert.deepStrictEqual(numberLines([''], 1, 1), ['']);
    assert.deepStrictEqual(numberLines(['', 'hello'], 1, 1), ['', '1\thello']);
    assert.deepStrictEqual(numberLines(['a', '', 'b'], 1, 1), [
      '1\ta',
      '',
      '2\tb',
    ]);
  });

  it('should number a single line starting from 1', () => {
    assert.deepStrictEqual(numberLines(['hello'], 1, 1), ['1\thello']);
    assert.deepStrictEqual(numberLines(['bye'], 1, 1), ['1\tbye']);
  });

  it('should number multiple lines starting from 1', () => {
    assert.deepStrictEqual(numberLines(['hello', 'bye'], 1, 1), [
      '1\thello',
      '2\tbye',
    ]);
    assert.deepStrictEqual(numberLines(['bye', 'hello'], 1, 1), [
      '1\tbye',
      '2\thello',
    ]);
  });

  it('should number a single line starting from 2', () => {
    assert.deepStrictEqual(numberLines(['hello'], 2, 1), ['2\thello']);
    assert.deepStrictEqual(numberLines(['bye'], 2, 1), ['2\tbye']);
  });

  it('should increment line number by 2', () => {
    assert.deepStrictEqual(numberLines(['hello', 'bye'], 1, 2), [
      '1\thello',
      '3\tbye',
    ]);
  });

  it('should increment line numbers starting at 2 by 3', () => {
    assert.deepStrictEqual(numberLines(['hello', 'bye'], 2, 3), [
      '2\thello',
      '5\tbye',
    ]);
  });
});
