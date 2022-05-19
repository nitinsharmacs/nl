**TODO:**

- [ ] Provide a default of 1 for `startNum` in `nl`
- [ ] Investigate how `nl` handles empty lines

**MAYBE:**

- [ ] Consider options as a parameter to `nl`
- [ ] Consider closure for a counter in `numberedLine` ?
- [ ] Consider a richer structure to be returned from `numberLines`

**DONE:**

- [x] Move `splitLines`, `joinLines` and `NEWLINE` to a different lib
- [x] Implement `nl file` without any fancy options
- [x] Implement 'startNum' option on `nl`
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
