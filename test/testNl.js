const assert = require('assert');
const { numberLines } = require('../src/nl.js');

describe('numberLines', () => {
  it('should number a line', () => {
    assert.strictEqual(numberLines('hello'), '1\thello');
    assert.strictEqual(numberLines('bye'), '1\tbye');
  });

  it('should number two lines', () => {
    assert.strictEqual(numberLines('hello\nbye'), '1\thello\n2\tbye');
    assert.strictEqual(numberLines('bye\nhello'), '1\tbye\n2\thello');
  });
});
