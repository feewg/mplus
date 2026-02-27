# EXAMPLE 7.20: Structural Equation Mixture Modeling

## Description

In this example, the structural equation mixture model is estimated. A continuous latent variable f2 is regressed on a second continuous latent variable f1. The solid arrows from the categorical latent variable c to f1 and f2 indicate that the mean of f1 and the intercept of f2 vary across classes. The broken arrow from c to the arrow from f1 to f2 indicates that the slope in the linear regression of f2 on f1 varies across classes. For related models, see Jedidi, Jagpal, and DeSarbo (1997).

## Mplus Input

```mplus
TITLE: this is an example of structural equation
       mixture modeling
DATA: FILE IS ex7.20.dat;
VARIABLE: NAMES ARE y1-y6;
          CLASSES = c (2);
ANALYSIS: TYPE = MIXTURE;
MODEL:
    %OVERALL%
    f1 BY y1-y3;
    f2 BY y4-y6;
    f2 ON f1;
    %c#1%
    [f1*1 f2];
    f2 ON f1;
OUTPUT: TECH1 TECH8;
```

## Explanation

In the overall model, the first BY statement specifies that f1 is measured by y1 through y3. The second BY statement specifies that f2 is measured by y4 through y6. The ON statement describes the linear regression of f2 on f1.

In the model for class 1, the mean of f1, the intercept of f2, and the slope in the regression of f2 on f1 are specified to be free across classes. All other parameters are held equal across classes as the default. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
