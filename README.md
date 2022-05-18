`nl [-bt] [-i incr] [-s sep] [-v startnum] file`

```
nl file
  The nl utility reads lines from the named file, applies a configurable line numbering filter operation, and writes the result to the standard output.

nl -bt file
  Number only non-empty lines.

nl -i incr file
  Specify the increment value used to number logical page lines.
  The default incr value is 1.

nl -s separator file
  Specify the characters used in separating the line number and
  the corresponding text line.  The default sep setting is a
  single tab character.

nl -v startnum file
  Specify the initial value used to number logical page lines; see
  also the description of the -p option.  The default startnum
  value is 1.
```
