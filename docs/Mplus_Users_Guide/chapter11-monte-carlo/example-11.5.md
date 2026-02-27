# EXAMPLE 11.5: MULTIPLE IMPUTATION FOR A SET OF VARIABLES WITH MISSING VALUES

## Description

This example demonstrates multiple imputation for a set of variables with missing values using Bayesian analysis. Multiple imputation is a technique for handling missing data by generating multiple plausible values for missing data points based on the observed data.

## Mplus Input

```mplus
TITLE: this is an example of multiple imputation
for a set of variables with missing values

DATA: FILE = ex11.5.dat;

VARIABLE: NAMES = x1 x2 y1-y4 v1-v50 z1-z5;
USEVARIABLES = x1 x2 y1-y4 z1-z5;
AUXILIARY = v1-v10;
MISSING = ALL (999);

DATA IMPUTATION:
IMPUTE = y1-y4 x1 (c) x2;
NDATASETS = 10;
SAVE = missimp*.dat;

ANALYSIS: TYPE = BASIC;

OUTPUT: TECH8;
```

## Explanation

The VARIABLE command specifies:
- NAMES: All variables in the data set (x1, x2, y1-y4, v1-v50, z1-z5)
- USEVARIABLES: Variables used to create the imputed data sets (x1, x2, y1-y4, z1-z5)
- AUXILIARY: Variables not used in imputation but saved with imputed data sets (v1-v10)
- MISSING: Missing value flag (999 for all variables)

The DATA IMPUTATION command specifies:
- IMPUTE: Variables for which missing values will be imputed (y1-y4, x1 as categorical, x2)
- NDATASETS: Number of imputed data sets to create (10)
- SAVE: Names of saved imputed data files (missimp*.dat)

The saved files will be named missimp1.dat, missimp2.dat, etc. The imputed data sets will contain variables in this order: x1, x2, y1-y4, z1-z5, and v1-v10.

These data sets can be used in subsequent analyses using TYPE=IMPUTATION in the DATA command.

Multiple imputation is carried out using Bayesian estimation with an unrestricted H1 model by default.
