# EXAMPLE 13.4: NON-NUMERIC MISSING VALUE FLAGS

## Description

This example is based on Example 5.11 in which the data contain no missing values. In this example, there are missing values and the asterisk (*) is used as a missing value flag. The MISSING option is used to identify the values or symbol in the analysis data set that will be treated as missing or invalid. Non-numeric missing value flags are applied to all variables in the data set.

## Mplus Input

```mplus
TITLE: this is an example of a SEM with
continuous factor indicators using data
with non-numeric missing value flags
DATA: FILE IS ex5.11.dat;
VARIABLE: NAMES ARE y1-y12;
MISSING = *;
MODEL: f1 BY y1-y3;
f2 BY y4-y6;
f3 BY y7-y9;
f4 BY y10-y12;
f4 ON f3;
f3 ON f1 f2;
```

## Explanation

The MISSING option is used to identify the values or symbol in the analysis data set that will be treated as missing or invalid. In this example, the asterisk (*) is used as a missing value flag. Non-numeric missing value flags are applied to all variables in the data set.
