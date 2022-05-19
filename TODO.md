**TODO:**

- [ ] Implement a parseOptions function that parses command line arguments and returns an object of filename and options
  - [ ] handles options and their arguments as separate elements
  - [ ] Options should be parsed independent of order
  - [ ] Report errors on invalid options(wrong option, invalid argument)
- [ ] Implement `nl` with number all lines option (-ba)
- [ ] Provide defaults for all options going into nl
- [ ] Report error when unable to read file

**MAYBE:**

**DONE:**

- [x] Implement nl with command line options for -v
- [x] ~~Consider moving `formatLine` and `formatLines` to `line.js`~~
- [x] Implement `nl` with separator option (-s)
- [x] Consider a richer structure to be returned from `numberLines`
- [x] Consider separating `testNlLib.js`
- [x] Consider refactoring `formatLines` and move functionality down to `formatLine`
- [x] Extract line related functions into a different lib
- [x] ~~Consider closure for a counter in `numberedLine` ?~~
- [x] Improve `numberLines` by refactoring the forEach block
- [x] Change default behaviour to not number empty lines
  - [x] Change existing tests
  - [x] Empty line should not be _counted_ but should be printed
- [x] Investigate how `nl` handles empty lines
- [x] Implement `nl` with increment option (-i)
- [x] Implement options as a parameter to `nl`
- [x] Move `splitLines`, `joinLines` and `NEWLINE` to a different lib
- [x] Implement `nl file` without any fancy options
- [x] Implement 'startNum' option on `nl` (-v)
- [x] Make `nl` function work on file content instead of file
- [x] Extract '\n' to a constant
- [x] Separate functions to split and join lines
- [x] Test `numberLines` which now takes lines instead of content
- [x] ~~Should we rename `testNl.js`? Is `nl.js` an appropriate name?~~ Kept `nl.js`
- [x] Consider a different contract for `numberLines`
- [x] Test `formatLine`
- [x] Make `src` and `test` directories
- [x] Use an .eslintrc.js
- [x] Verify `mocha` exists
- [x] Make `testNl.js`
- [x] Write an expectation/test case
- [x] Make an nl.js
