# EXAMPLE 6.24: N=1 time series analysis with a univariate first-order autoregressive AR(1) model for a continuous dependent variable with a covariate

## Description

In this example, the N=1 time series analysis with a univariate first-order autoregressive AR(1) model for a continuous dependent variable with a covariate shown in the picture above is estimated. The subscript t refers to a time point and the subscript t-1 refers to the previous time point. The dots indicate that the process includes both previous and future time points using the same model.

## Mplus Input

```mplus
TITLE: this is an example of an N=1 time series
analysis with a univariate first-order
autoregressive AR(1) model for a
continuous dependent variable with a
covariate
DATA: FILE = ex6.24.dat;
VARIABLE: NAMES ARE y x;
LAGGED = y(1) x(1);
ANALYSIS: ESTIMATOR = BAYES;
PROCESSORS = 2;
BITERATIONS = (1000);
MODEL: y ON y&1 x x&1;
OUTPUT: TECH1 TECH8;
PLOT: TYPE = PLOT3;
```

## Explanation

In the MODEL command, the ON statement describes the linear regression over multiple time points of the dependent variable y on the dependent variable y&1 which is y at the previous time point, a covariate x, and a covariate x&1 which is x at the previous time point. An intercept, three regression coefficients, and a residual variance are estimated. An explanation of the other commands can be found in Examples 6.1 and 6.23.
