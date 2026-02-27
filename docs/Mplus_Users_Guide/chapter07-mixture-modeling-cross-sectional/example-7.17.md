# EXAMPLE 7.17: Mixture CFA Modeling

## Description

In this example, the mixture CFA model is estimated (Muthén, 2008). The mean of the factor f varies across the classes of the categorical latent variable c. The residual arrow pointing to f indicates that the factor varies within class. This implies that the distribution of f is allowed to be non-normal. It is possible to allow other parameters of the CFA model to vary across classes.

## Mplus Input

```mplus
TITLE: this is an example of mixture CFA modeling
DATA: FILE IS ex7.17.dat;
VARIABLE: NAMES ARE y1-y5;
          CLASSES = c(2);
ANALYSIS: TYPE = MIXTURE;
MODEL: %OVERALL%
    f BY y1-y5;
    %c#1%
    [f*1];
OUTPUT: TECH1 TECH8;
```

## Explanation

The BY statement specifies that f is measured by y1, y2, y3, y4, and y5. The factor mean varies across the classes. All other model parameters are held equal across classes as the default. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
