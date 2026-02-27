# EXAMPLE 3.9: RANDOM COEFFICIENT REGRESSION

## Description

This example demonstrates a regression with random coefficients. Random coefficient regression uses random slopes to model heterogeneity in the residual variance as a function of a covariate that has a random slope.

In this model:
- The random slope `s` represents the slope in the regression of y on x1
- The broken arrow from s to the arrow from x1 to y indicates that the slope in this regression is random
- The random slope is predicted by the covariate x2

The CENTER option is used to specify the type of centering to be used in an analysis and the variables that will be centered. Centering facilitates the interpretation of the results.

The TYPE option is used to describe the type of analysis that is to be performed. By selecting RANDOM, a model with random slopes will be estimated.

The | symbol is used in conjunction with TYPE=RANDOM to name and define the random slope variables in the model. The name on the left-hand side of the | symbol names the random slope variable, and the statement on the right-hand side defines the random slope variable.

## Mplus Input

```mplus
TITLE: this is an example of a random coefficient
       regression
DATA: FILE IS ex3.9.dat;
VARIABLE: NAMES ARE y x1 x2;
DEFINE: CENTER x1 x2 (GRANDMEAN);
ANALYSIS: TYPE = RANDOM;
MODEL: s | y ON x1;
       s WITH y;
       y s ON x2;
```

## Explanation

The random slope `s` is defined by the linear regression of y on the covariate x1. The residual variance in the regression of y on x is estimated as the default. The residual covariance between s and y is fixed at zero as the default. The WITH statement is used to free this parameter.

The ON statement describes the linear regressions of the dependent variable y and the random slope s on the covariate x2.

In this example, the covariates are centered using the grand means, that is, the sample means of x1 and x2 are subtracted from the values of the covariates x1 and x2. Centering facilitates the interpretation of the results.

The default estimator for this type of analysis is maximum likelihood with robust standard errors. The estimator option of the ANALYSIS command can be used to select a different estimator.
