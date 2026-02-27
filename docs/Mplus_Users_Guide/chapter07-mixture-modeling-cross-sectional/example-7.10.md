# EXAMPLE 7.10: LCA With Continuous Latent Class Indicators Using User-Specified Starting Values Without Random Starts

## Description

The difference between this example and Example 7.4 is that the latent class indicators are continuous variables instead of binary variables. As a result, starting values are given for means instead of thresholds.

## Mplus Input

```mplus
TITLE: this is an example of a LCA with
       continuous latent class indicators using
       user-specified starting values without
       random starts
DATA: FILE IS ex7.10.dat;
VARIABLE: NAMES ARE y1-y4;
          CLASSES = c (2);
ANALYSIS: TYPE = MIXTURE;
          STARTS = 0;
MODEL:
    %OVERALL%
    %c#1%
    [y1–y4*1];
    y1-y4;
    %c#2%
    [y1–y4*-1];
    y1-y4;
OUTPUT: TECH1 TECH8;
```

## Explanation

The means and variances of the latent class indicators and the mean of the categorical latent variable are estimated as the default. In the models for class 1 and class 2, by mentioning the variances of the latent class indicators, the default constraint of equality of variances across classes is relaxed. The covariances among the latent class indicators within class are fixed at zero as the default. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
