# EXAMPLE 11.4: MODELING WITH DATA NOT MISSING AT RANDOM (NMAR) USING A PATTERN-MIXTURE MODEL

## Description

This example demonstrates a linear growth model at six time points with missing data on a continuous outcome where the data are not missing at random (NMAR). Dropout is related to both past and current outcomes where the current outcome is missing for those who drop out.

A pattern-mixture model is used to estimate a growth model for the outcome with binary dummy dropout indicators used as covariates.

## Mplus Input

```mplus
TITLE: this is an example of modeling with data
not missing at random (NMAR) using a
pattern-mixture model

DATA: FILE = ex11.4.dat;

VARIABLE: NAMES = z1-z5 y0 y1-y5;
USEVARIABLES = y0-y5 d1-d5;
MISSING = ALL (999);

DATA MISSING:
NAMES = y0-y5;
TYPE = DDROPOUT;
BINARY = d1-d5;

MODEL: i s | y0@0 y1@1 y2@2 y3@3 y4@4 y5@5;
i ON d1-d5;
s ON d3-d5;
s ON d1 (1);
s ON d2 (1);

OUTPUT: TECH1;
```

## Explanation

The DATA MISSING command creates dropout indicators:
- TYPE=DDROPOUT specifies binary dummy dropout indicators
- BINARY assigns names d1-d5 to the dropout indicators

The MODEL command specifies:
1. A growth model for the outcome:
   - Intercept (i) and slope (s) growth factors
   - Time scores fixed at 0, 1, 2, 3, 4, and 5

2. The dropout indicators influence the growth factors:
   - Intercept growth factor (i) regressed on all dropout indicators (d1-d5)
   - Slope growth factor (s) regressed on d3-d5
   - Slope on d1 held equal to slope on d2 (using label 1)

The coefficient in the regression of s on d1 is not identified because the outcome is observed only at the first time point for the dropout pattern with d1 equal to one. This regression coefficient is held equal to the linear regression of s on d2 for identification purposes.

This pattern-mixture model approach allows the growth factors to vary as a function of dropout patterns, thereby accounting for NMAR mechanisms.
