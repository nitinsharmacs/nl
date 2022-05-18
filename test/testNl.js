const assert = require('assert');
const { numberLines } = require('../src/nl.js');

describe('numberLines', () => {
  it('should number a line', () => {
    assert.strictEqual(numberLines('hello'), '1\thello');
    assert.strictEqual(numberLines('bye'), '1\tbye');
  });
});
