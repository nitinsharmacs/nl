const assert = require('assert');
const { numberLines, formatLine } = require('../src/nl.js');

describe('numberLines', () => {
  it('should number an empty line', () => {
    assert.strictEqual(numberLines(''), '1\t');
  });

  it('should number a line', () => {
    assert.strictEqual(numberLines('hello'), '1\thello');
    assert.strictEqual(numberLines('bye'), '1\tbye');
  });

  it('should number two lines', () => {
    assert.strictEqual(numberLines('hello\nbye'), '1\thello\n2\tbye');
    assert.strictEqual(numberLines('bye\nhello'), '1\tbye\n2\thello');
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
