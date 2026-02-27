# EXAMPLE 11.1: GROWTH MODEL WITH MISSING DATA USING A MISSING DATA CORRELATE

## Description

This example demonstrates a linear growth model at four time points with missing data on a continuous outcome. The model uses a missing data correlate to improve the plausibility of the MAR (Missing At Random) assumption of maximum likelihood estimation.

The missing data correlate is not part of the growth model but is used to improve the plausibility of the MAR assumption. The missing data correlate is allowed to correlate with the outcome while providing the correct number of parameters and chi-square test for the analysis model.

## Mplus Input

```mplus
TITLE: this is an example of a linear growth
model with missing data on a continuous
outcome using a missing data correlate to
improve the plausibility of MAR

DATA: FILE = ex11.1.dat;

VARIABLE: NAMES = x1 x2 y1-y4 z;
USEVARIABLES = y1-y4;
MISSING = ALL (999);
AUXILIARY = (m) z;

ANALYSIS: ESTIMATOR = ML;

MODEL: i s | y1@0 y2@1 y3@2 y4@3;

OUTPUT: TECH1;
```

## Explanation

The TITLE command is used to provide a title for the analysis. The title is printed in the output just before the Summary of Analysis.

The DATA command specifies the name of the file that contains the data to be analyzed, ex11.1.dat. Because the data set is in free format, the default, a FORMAT statement is not required.

The VARIABLE command provides information about the variables in the data set:
- The NAMES option assigns names to the variables in the data set (x1, x2, y1, y2, y3, y4, and z)
- The USEVARIABLES option selects a subset of variables for analysis (y1, y2, y3, and y4)
- The MISSING option identifies values treated as missing (999 for all variables)
- The AUXILIARY option with the m setting identifies z as a missing data correlate

The ANALYSIS command specifies ML (maximum likelihood) as the estimator.

The MODEL command defines the growth model:
- The | symbol names and defines the intercept (i) and slope (s) growth factors
- Time scores are fixed at 0, 1, 2, and 3 to define a linear growth model with equidistant time points
- The zero time score defines the intercept growth factor as an initial status factor
- Coefficients of the intercept growth factor are fixed at one
- Residual variances are estimated and allowed to be different across time
- Means and variances of growth factors are estimated as the default
