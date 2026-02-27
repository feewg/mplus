# EXAMPLE 11.6: MULTIPLE IMPUTATION FOLLOWED BY THE ESTIMATION OF A GROWTH MODEL USING MAXIMUM LIKELIHOOD

## Description

This example demonstrates multiple imputation for a set of variables with missing values, followed by the estimation of a growth model using maximum likelihood estimation. The imputed data sets are used directly in the estimation of the growth model.

## Mplus Input

```mplus
TITLE: this is an example of multiple imputation
followed by the estimation of a growth
model using maximum likelihood

DATA: FILE = ex11.6.dat;

VARIABLE: NAMES = x1 y1-y4 z x2;
USEVARIABLES = y1-y4 x1 x2;
MISSING = ALL(999);

DATA IMPUTATION:
IMPUTE = y1-y4 x1 (c) x2;
NDATASETS = 10;

ANALYSIS: ESTIMATOR = ML;

MODEL: i s | y1@0 y2@1 y3@2 y4@3;
i s ON x1 x2;

OUTPUT: TECH1 TECH8;
```

## Explanation

The DATA IMPUTATION command creates multiple imputed data sets:
- IMPUTE: Variables for which missing values will be imputed (y1-y4, x1 as categorical, x2)
- NDATASETS: Number of imputed data sets (10)

Multiple imputation is carried out using Bayesian estimation. Data are imputed using an unrestricted H1 model.

The ANALYSIS command specifies:
- ESTIMATOR=ML for maximum likelihood estimation

The MODEL command defines:
1. A growth model with intercept (i) and slope (s) factors:
   - Time scores fixed at 0, 1, 2, and 3
   - Linear growth model with equidistant time points

2. Regressions of growth factors on covariates:
   - Both i and s regressed on x1 and x2

The maximum likelihood parameter estimates for the growth model are averaged over the set of 10 analyses, and standard errors are computed using:
1. The average of the standard errors over the set of analyses
2. The between-analysis parameter estimate variation

A chi-square test of overall model fit is provided.
