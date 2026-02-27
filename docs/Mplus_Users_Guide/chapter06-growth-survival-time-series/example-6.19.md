# EXAMPLE 6.19: Discrete-time survival analysis

## Description

In this example, the discrete-time survival analysis model shown in the picture above is estimated. Each u variable represents whether or not a single non-repeatable event has occurred in a specific time period. The value 1 means that the event has occurred, 0 means that the event has not occurred, and a missing value flag means that the event has occurred in a preceding time period or that the individual has dropped out of the study (Muthén & Masyn, 2005). The factor f is used to specify a proportional odds assumption for the hazards of the event.

## Mplus Input

```mplus
TITLE: this is an example of a discrete-time
survival analysis
DATA: FILE IS ex6.19.dat;
VARIABLE: NAMES ARE u1-u4 x;
CATEGORICAL = u1-u4;
MISSING = ALL (999);
ANALYSIS: ESTIMATOR = MLR;
MODEL: f BY u1-u4@1;
f ON x;
f@0;
```

## Explanation

The MISSING option is used to identify the values or symbols in the analysis data set that are to be treated as missing or invalid. In this example, the number 999 is the missing value flag. The default is to estimate the model under missing data theory using all available data.

The default estimator for this type of analysis is a robust weighted least squares estimator. By specifying ESTIMATOR=MLR, maximum likelihood estimation with robust standard errors is used. The BY statement specifies that f is measured by u1, u2, u3, and u4 where the factor loadings are fixed at one. This represents a proportional odds assumption where the covariate x has the same influence on u1, u2, u3, and u4. The ON statement describes the linear regression of f on the covariate x. The residual variance of f is fixed at zero to correspond to a conventional discrete-time survival model. An explanation of the other commands can be found in Example 6.1.
