const assert = require('assert');
const { nlMain } = require('../src/nlLib.js');

const shouldReturn = (mockFile, content) => {
  return function (fileName, encoding) {
    assert.equal(mockFile, fileName);
    assert.equal(encoding, 'utf8');
    return content;
  };
};

describe('nlMain', () => {
  it('should number the lines of the given file', () => {
    const mockReadFileSync = shouldReturn('content.txt', 'hello');
    assert.strictEqual(nlMain('content.txt', mockReadFileSync), '1\thello');
  });
});
