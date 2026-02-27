# EXAMPLE 5.4: CFA WITH CENSORED AND COUNT FACTOR INDICATORS

## Description

This example demonstrates a CFA with censored and count factor indicators. The factor indicators are a combination of censored and count variables instead of all continuous variables.

## Mplus Input

```mplus
TITLE: this is an example of a CFA with censored
and count factor indicators
DATA: FILE IS ex5.4.dat;
VARIABLE: NAMES ARE y1-y3 u4-u6;
CENSORED ARE y1-y3 (a);
COUNT ARE u4-u6;
MODEL: f1 BY y1-y3;
f2 BY u4-u6;
OUTPUT: TECH1 TECH8;
```

## Explanation

The difference between this example and Example 5.1 is that the factor indicators are a combination of censored and count variables instead of all continuous variables. The CENSORED option is used to specify which dependent variables are treated as censored variables in the model and its estimation, whether they are censored from above or below, and whether a censored or censored-inflated model will be estimated. In the example above, y1, y2, and y3 are censored variables. The a in parentheses following y1-y3 indicates that y1, y2, and y3 are censored from above, that is, have ceiling effects, and that the model is a censored regression model. The censoring limit is determined from the data. The COUNT option is used to specify which dependent variables are treated as count variables in the model and its estimation and whether a Poisson or zero-inflated Poisson model will be estimated. In the example above, u4, u5, and u6 are count variables. Poisson regressions are estimated for the count dependent variables and censored regressions are estimated for the censored dependent variables.

The default estimator for this type of analysis is maximum likelihood with robust standard errors using a numerical integration algorithm. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, two dimensions of integration are used with a total of 225 integration points. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. The OUTPUT command is used to request additional output not included as the default. The TECH1 option is used to request the arrays containing parameter specifications and starting values for all free parameters in the model. The TECH8 option is used to request that the optimization history in estimating the model be printed in the output. TECH8 is printed to the screen during the computations as the default. TECH8 screen printing is useful for determining how long the analysis takes. An explanation of the other commands can be found in Example 5.1.
