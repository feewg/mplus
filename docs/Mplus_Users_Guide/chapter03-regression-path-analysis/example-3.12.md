# EXAMPLE 3.12: PATH ANALYSIS WITH CATEGORICAL DEPENDENT VARIABLES

## Description

This example demonstrates a path analysis model where the dependent variables are binary and/or ordered categorical (ordinal) variables instead of continuous variables.

The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation.

When using categorical dependent variables:
- Probit regressions are estimated (with WLS estimators)
- Logistic regressions are estimated (with ML estimators)

## Mplus Input

```mplus
TITLE: this is an example of a path analysis
       with categorical dependent variables
DATA: FILE IS ex3.12.dat;
VARIABLE: NAMES ARE u1-u6 x1-x4;
          USEVARIABLES ARE u1-u3 x1-x3;
          CATEGORICAL ARE u1-u3;
MODEL: u1 u2 ON x1 x2 x3;
       u3 ON u1 u2 x2;
```

## Explanation

The difference between this example and Example 3.11 is that the dependent variables are binary and/or ordered categorical (ordinal) variables instead of continuous variables.

The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In this example, u1, u2, and u3 are binary or ordered categorical variables. The program determines the number of categories for each variable.

The first ON statement describes the probit regressions of u1 and u2 on the covariates x1, x2, and x3.

The second ON statement describes the probit regression of u3 on the mediating variables u1 and u2 and the covariate x2.

The default estimator for this type of analysis is a robust weighted least squares estimator. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. If the maximum likelihood estimator is selected, the regressions are logistic regressions.
