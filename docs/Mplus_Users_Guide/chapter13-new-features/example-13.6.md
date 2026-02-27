# EXAMPLE 13.6: SELECTING OBSERVATIONS AND VARIABLES

## Description

This example is based on Example 3.11 in which the entire data set is analyzed. In this example, a subset of variables and a subset of observations are analyzed. The USEVARIABLES option is used to select variables for an analysis. The USEOBSERVATIONS option is used to select observations for an analysis by specifying a conditional statement.

## Mplus Input

```mplus
TITLE: this is an example of a path analysis
with continuous dependent variables using
a subset of the data
DATA: FILE IS ex3.11.dat;
VARIABLE: NAMES ARE y1-y6 x1-x4;
USEVARIABLES ARE y1-y3 x1-x3;
USEOBSERVATION ARE (x4 EQ 2);
MODEL: y1 y2 ON x1 x2 x3;
y3 ON y1 y2 x2;
```

## Explanation

The USEVARIABLES option is used to select variables for an analysis. In the example above, `y1`, `y2`, `y3`, `x1`, `x2`, and `x3` are selected.

The USEOBSERVATIONS option is used to select observations for an analysis by specifying a conditional statement. In the example above, individuals with the value of 2 on variable `x4` are included in the analysis.
