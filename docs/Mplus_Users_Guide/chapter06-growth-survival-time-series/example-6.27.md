# EXAMPLE 6.27: N=1 time series analysis with a first-order autoregressive AR(1) IRT model with binary factor indicators

## Description

In this example, an N=1 time series analysis with a first-order autoregressive AR(1) IRT model with binary factor indicators is estimated. The subscript t refers to a time point and the subscript t-1 refers to the previous time point. The dots indicate that the process includes both previous and future time points using the same model.

## Mplus Input

```mplus
TITLE: this is an example of an N=1 time series
analysis with a first-order autoregressive
AR(1) IRT model with binary factor
indicators
DATA: FILE = ex6.27.dat;
VARIABLE: NAMES = u1-u4;
CATEGORICAL = u1-u4;
ANALYSIS: ESTIMATOR = BAYES;
PROCESSORS = 2;
BITERATIONS = (2000);
MODEL: f BY u1-u4*(&1);
f@1;
f ON f&1;
OUTPUT: TECH1 TECH8;
PLOT: TYPE = PLOT3;
```

## Explanation

The CATEGORICAL option specifies that the variables u1, u2, u3, and u4 are binary. In the MODEL command, the BY statement specifies that f is measured by u1, u2, u3, and u4. The metric of the factor is set automatically by the program by fixing the first factor loading to one. The asterisk following u1-u4 overrides this default. The metric of the factor is set by fixing the factor residual variance to one. An ampersand (&) followed by the number 1 is placed in parentheses following the BY statement to indicate that the factor f at lag 1 can be used in the analysis. The factor f at lag 1 is referred to as f&1. The thresholds of the factor indicators are estimated as the default. The ON statement describes the linear regression over multiple time points of the factor f on the factor f&1 which is f at the previous time point. A regression coefficient and residual variance of the factor are estimated. The intercept of the factor is fixed at zero as the default. An explanation of the other commands can be found in Examples 6.1, 6.4, and 6.23.
