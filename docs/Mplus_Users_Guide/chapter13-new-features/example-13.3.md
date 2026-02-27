# EXAMPLE 13.3: READING DATA WITH A FIXED FORMAT

## Description

This example is based on Example 5.8 in which individual data with a free format are analyzed. Because the data are in free format, a FORMAT statement is not required. In this example, the data have a fixed format. The inclusion of a FORMAT statement is required in this situation.

## Mplus Input

```mplus
TITLE: this is an example of a CFA with
covariates (MIMIC) with continuous factor
indicators using data in a fixed format
DATA: FILE IS ex5.8.dat;
FORMAT IS 3f4.2 3f2 f1 2f2;
VARIABLE: NAMES ARE y1-y6 x1-x3;
MODEL: f1 BY y1-y3;
f2 BY y4-y6;
f1 f2 ON x1-x3;
```

## Explanation

The FORMAT statement describes the position of the nine variables in the data set. In this example:
- The first three variables take up four columns each and are read such that two digits follow the decimal point (`3f4.2`)
- The next three variables take three columns with no digits after the decimal point (`3f2`)
- The seventh variable takes one column with no digits following the decimal point (`f1`)
- The eighth and ninth variables each take two columns with no digits following the decimal point (`2f2`)
