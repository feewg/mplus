# EXAMPLE 6.28: N=1 time series analysis with a bivariate cross-lagged model with two factors and continuous factor indicators

## Description

In this example, the N=1 time series analysis with a bivariate cross-lagged model with two factors and continuous factor indicators shown in the picture above is estimated. The subscript t refers to a time point and the subscript t-1 refers to the previous time point. The dots indicate that the process includes both previous and future time points using the same model.

## Mplus Input

```mplus
TITLE: this is an example of an N=1 time series
analysis with a bivariate cross-lagged
model with two factors and continuous
factor indicators
DATA: FILE = ex6.28.dat;
VARIABLE: NAMES = y11-y14 y21-y24;
ANALYSIS: ESTIMATOR = BAYES;
PROCESSORS = 2;
BITERATIONS = (2000);
MODEL: f1 BY y11-y14 (&1);
f2 BY y21-y24 (&1);
f1 ON f1&1 f2&1;
f2 ON f2&1 f1&1;
OUTPUT: TECH1 TECH8;
PLOT: TYPE = PLOT3;
```

## Explanation

In the MODEL command, the first BY statement specifies that f1 is measured by y11, y12, y13, and y14. The second BY statement specifies that f2 is measured by y21, y22, y23, and y24. The metric of the factors is set automatically by the program by fixing the first factor loading to one. This option can be overridden. An ampersand (&) followed by the number 1 is placed in parentheses following the BY statements to indicate that the factors f1 and f2 at lag 1 are used during model estimation. The factors f1 and f2 at lag 1 are referred to as f1&1 and f2&1, respectively. The intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. The first ON statement describes the linear regression over multiple time points of the factor f1 on the factor f1&1 which is f1 at the previous time point and the factor f2&1 which is f2 at the previous time point. The second ON statement describes the linear regression over multiple time points of the factor f2 on the factor f2&1 which is f2 at the previous time point and the factor f1&1 which is f1 at the previous time point. Four regression coefficients, two residual variances, and one residual covariance of the factors are estimated. The intercepts of the factors are fixed at zero as the default. An explanation of the other commands can be found in Examples 6.1 and 6.23.
