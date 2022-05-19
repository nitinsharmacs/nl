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
    assert.strictEqual(nlMain(mockReadFileSync, 'content.txt'), '1\thello');
  });

  it('should number the lines of the given file starting from 5', () => {
    const mockReadFileSync = shouldReturn('content.txt', 'hello');
    assert.strictEqual(
      nlMain(mockReadFileSync, '-v', '5', 'content.txt'),
      '5\thello'
    );
  });

  it('should number the lines of the given file starting from 5', () => {
    const mockReadFileSync = shouldReturn('content.txt', 'hello');
    assert.throws(() => nlMain(mockReadFileSync, 'missing.txt'), {
      name: 'FileReadError',
      message: 'Unable to read missing.txt',
      fileName: 'missing.txt',
    });
  });
});
