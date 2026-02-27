# EXAMPLE 6.25: N=1 time series analysis with a bivariate cross-lagged model for continuous dependent variables

## Description

In this example, the N=1 time series analysis with a bivariate cross-lagged model for continuous dependent variables shown in the picture above is estimated. This model is also referred to as a first-order vector autoregressive VAR(1) model, see e.g., Shumway and Stoffer (2011). The subscript t refers to a time point and the subscript t-1 refers to the previous time point. The dots indicate that the process includes both previous and future time points using the same model.

## Mplus Input

```mplus
TITLE: this is an example of an N=1 time series
analysis with a bivariate cross-lagged
model for continuous dependent variables
DATA: FILE = ex6.25.dat;
VARIABLE: NAMES = y1 y2;
LAGGED = y1(1) y2(1);
ANALYSIS: ESTIMATOR = BAYES;
PROCESSORS = 2;
BITERATIONS = (500);
MODEL: y1 ON y1&1 y2&1;
y2 ON y2&1 y1&1;
OUTPUT: TECH1 TECH8;
PLOT: TYPE = PLOT3;
```

## Explanation

In the MODEL command, the first ON statement describes the linear regression over multiple time points of the dependent variable y1 on the dependent variable y1&1 which is y1 at the previous time point, and the dependent variable y2&1 which is y2 at the previous time point. The second ON statement describes the linear regression over multiple time points of the dependent variable y2 on the dependent variable y2&1 which is y2 at the previous time point, and the dependent variable y1&1 which is y1 at the previous time point. Two intercepts, four regression coefficients, two residual variances, and one residual covariance are estimated. An explanation of the other commands can be found in Examples 6.1 and 6.23.
