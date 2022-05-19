const assert = require('assert');
const { parseArgs } = require('../src/parseArgs.js');

describe('parseArgs', () => {
  it('should parse just the filename', () => {
    assert.deepStrictEqual(parseArgs(['./a.txt']), {
      fileName: './a.txt',
      options: { startNum: 1, increment: 1, separator: '\t' },
    });
  });

  it('should parse -v option along with the filename', () => {
    assert.deepStrictEqual(parseArgs(['-v', '5', './a.txt']), {
      fileName: './a.txt',
      options: { startNum: 5, increment: 1, separator: '\t' },
    });
  });

  it('should parse -i option along with the filename', () => {
    assert.deepStrictEqual(parseArgs(['-i', '5', './a.txt']), {
      fileName: './a.txt',
      options: { startNum: 1, increment: 5, separator: '\t' },
    });
  });

  it('should parse -s option along with the filename', () => {
    assert.deepStrictEqual(parseArgs(['-s', '|', './a.txt']), {
      fileName: './a.txt',
      options: { startNum: 1, increment: 1, separator: '|' },
    });
  });
});
