# EXAMPLE 6.26: N=1 time series analysis with a first-order autoregressive AR(1) confirmatory factor analysis (CFA) model with continuous factor indicators

## Description

In this example, the N=1 time series analysis with a first-order autoregressive AR(1) confirmatory factor analysis (CFA) model with continuous factor indicators shown in the picture above is estimated. This model is also referred to as a direct autoregressive factor score (DAFS) model. For a discussion of N=1 time series factor analysis, also referred to as dynamic factor analysis, see e.g., Molenaar (1985); Zhang, Hamaker, and Nesselroade (2008); and Asparouhov, Hamaker, and Muthén (2017). The subscript t refers to a time point and the subscript t-1 refers to the previous time point. The dots indicate that the process includes both previous and future time points using the same model.

## Mplus Input

```mplus
TITLE: this is an example of an N=1 time series
analysis with a first-order autoregressive
AR(1) confirmatory factor analysis (CFA)
model with continuous factor indicators
DATA: FILE = ex6.26.dat;
VARIABLE: NAMES = y1-y4;
ANALYSIS: ESTIMATOR = BAYES;
PROCESSORS = 2;
BITERATIONS = (2000);
MODEL: f BY y1-y4 (&1);
f ON f&1;
OUTPUT: TECH1 TECH8;
PLOT: TYPE = PLOT3;
```

## Explanation

In the MODEL command, the BY statement specifies that f is measured by y1, y2, y3, and y4. The metric of the factor is set automatically by the program by fixing the first factor loading to one. This option can be overridden. An ampersand (&) followed by the number 1 is placed in parentheses following the BY statement to indicate that the factor f at lag 1 can be used in the analysis. The factor f at lag 1 is referred to as f&1. The intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. The ON statement describes the linear regression over multiple time points of the factor f on the factor f&1 which is f at the previous time point. A regression coefficient and residual variance of the factor are estimated. The intercept of the factor is fixed at zero as the default.

A white noise factor score (WNFS) model (Zhang & Nesselroade, 2007) can be estimated using the MODEL command below where instead of regressing the factor f on f&1, the factor indicators y1, y2, y3, and y4 are regressed on f&1.

```mplus
MODEL: f BY y1-y4 (&1);
y1-y4 ON f&1;
```

An explanation of the other commands can be found in Examples 6.1 and 6.23.
