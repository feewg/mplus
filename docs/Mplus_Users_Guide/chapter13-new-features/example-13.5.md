# EXAMPLE 13.5: NUMERIC MISSING VALUE FLAGS

## Description

This example is based on Example 5.11 in which the data contain no missing values. In this example, there are missing values and numeric missing value flags are used. The MISSING option is used to identify the values or symbol in the analysis data set that will be treated as missing or invalid. Numeric missing value flags can be applied to a single variable, to groups of variables, or to all of the variables in a data set.

## Mplus Input

```mplus
TITLE: this is an example of a SEM with
continuous factor indicators using data
with numeric missing value flags
DATA: FILE IS ex5.11.dat;
VARIABLE: NAMES ARE y1-y12;
MISSING = y1-y3(9) y4(9 99) y5-y12(9-12);
MODEL: f1 BY y1-y3;
f2 BY y4-y6;
f3 BY y7-y9;
f4 BY y10-y12;
f4 ON f3;
f3 ON f1 f2;
```

## Explanation

In the example above:
- `y1`, `y2`, and `y3` have a missing value flag of 9
- `y4` has missing value flags of 9 and 99
- `y5` through `y12` have missing value flags of 9, 10, 11, and 12

If all variables in a data set have the same missing value flags, the keyword ALL can be used as follows:
```mplus
MISSING = ALL (9);
```
to indicate that all variables have the missing value flag of 9.
