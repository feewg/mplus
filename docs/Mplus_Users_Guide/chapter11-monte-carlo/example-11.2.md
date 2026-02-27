# EXAMPLE 11.2: DESCRIPTIVE STATISTICS AND GRAPHICS RELATED TO DROPOUT IN A LONGITUDINAL STUDY

## Description

This example demonstrates how to obtain descriptive statistics and graphics related to dropout in a longitudinal study. The descriptive statistics show the mean and standard deviation for sets of variables related to the outcome for those who drop out or not before the next time point. These means are plotted to help in understanding dropout patterns.

## Mplus Input

```mplus
TITLE: this is an example of descriptive
statistics and graphics related to dropout
in a longitudinal study

DATA: FILE = ex11.2.dat;

VARIABLE: NAMES = z1-z5 y0 y1-y5;
USEVARIABLES = z1-z5 y0-y5 d1-d5;
MISSING = ALL (999);

DATA MISSING:
NAMES = y0-y5;
TYPE = DDROPOUT;
BINARY = d1-d5;
DESCRIPTIVE = y0-y5 | * z1-z5;

ANALYSIS: TYPE = BASIC;

PLOT: TYPE = PLOT2;
SERIES = y0-y5(*);
```

## Explanation

The DATA MISSING command is used to create a set of binary variables that are indicators of missing data or dropout for another set of variables. Dropout indicators can be scored as discrete-time survival indicators or dummy dropout indicators.

Key options in the DATA MISSING command:
- NAMES: Identifies the set of variables used to create binary indicators (y0, y1, y2, y3, y4, and y5)
- TYPE: Specifies how missingness is coded. DDROPOUT setting specifies binary dummy dropout indicators
- BINARY: Assigns names (d1, d2, d3, d4, d5) to the new binary variables
- DESCRIPTIVE: Specifies sets of variables for additional descriptive statistics

The ANALYSIS command uses TYPE=BASIC to obtain descriptive statistics.

The PLOT command requests graphical displays:
- TYPE=PLOT2 obtains missing data plots of dropout means and sample means
- SERIES lists variables to be used in plots where values are connected by a line
- The asterisk (*) indicates values 1, 2, 3, 4, 5, and 6 will be used on the x-axis

For each variable, the mean and standard deviation are computed using all observations without missing on the variable and for those who drop out or not before the next time point.
