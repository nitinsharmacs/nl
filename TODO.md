**TODO:**

- [ ] Make `nl` work on file content instead of file
- [ ] Implement `nl file` without any fancy options
- [ ] Investigate how `nl` handles empty lines

**MAYBE:**

- [ ] Consider closure for a counter in `numberedLine` ?
- [ ] Consider a richer structure to be returned from `numberLines`

**DONE:**

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
