# EXAMPLE 5.6: SECOND-ORDER FACTOR ANALYSIS

## Description

This example demonstrates a second-order factor analysis model. The factor indicators of the first-order factors f1, f2, f3, and f4 are continuous. The first-order factors are indicators of the second-order factor f5.

## Mplus Input

```mplus
TITLE: this is an example of a second-order
factor analysis
DATA: FILE IS ex5.6.dat;
VARIABLE: NAMES ARE y1-y12;
MODEL: f1 BY y1-y3;
f2 BY y4-y6;
f3 BY y7-y9;
f4 BY y10-y12;
f5 BY f1-f4;
```

## Explanation

In this example, the second-order factor analysis model shown in the picture above is estimated. The factor indicators of the first-order factors f1, f2, f3, and f4 are continuous. The first-order factors are indicators of the second-order factor f5.

The first four BY statements specify that f1 is measured by y1, y2, and y3; f2 is measured by y4, y5, and y6; f3 is measured by y7, y8, and y9; and f4 is measured by y10, y11, and y12. The fifth BY statement specifies that the second-order factor f5 is measured by f1, f2, f3, and f4. The metrics of the first- and second-order factors are set automatically by the program by fixing the first factor loading in each BY statement to 1. This option can be overridden. The intercepts and residual variances of the first-order factor indicators are estimated and the residuals are not correlated as the default. The residual variances of the first-order factors are estimated as the default. The residuals of the first-order factors are not correlated as the default. The variance of the second-order factor is estimated as the default. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 5.1.
