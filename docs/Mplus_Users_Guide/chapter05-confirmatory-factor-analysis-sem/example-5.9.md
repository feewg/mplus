# EXAMPLE 5.9: MEAN STRUCTURE CFA FOR CONTINUOUS FACTOR INDICATORS

## Description

This example demonstrates a CFA model in which two factors are measured by three equivalent tests forms. The three equivalent test forms are referred to as a, b, and c.

## Mplus Input

```mplus
TITLE: this is an example of a mean structure CFA
for continuous factor indicators
DATA: FILE IS ex5.9.dat;
VARIABLE: NAMES ARE y1a-y1c y2a-y2c;
MODEL: f1 BY y1a y1b@1 y1c@1;
f2 BY y2a y2b@1 y2c@1;
[y1a y1b y1c] (1);
[y2a y2b y2c] (2);
```

## Explanation

In this example, the CFA model in which two factors are measured by three equivalent tests forms shown in the picture above is estimated. The three equivalent test forms are referred to as a, b, and c.

The first BY statement specifies that f1 is measured by y1a, y1b, and y1c. The second BY statement specifies that f2 is measured by y2a, y2b, and y2c. The letters a, b, and c are used to represent three equivalent test forms, and 1 and 2 represent two different topics. The metric of the factors is set automatically by the program by fixing the first factor loading in each BY statement to 1. This option can be overridden. The second and third factor loadings for both factors are fixed at one using the @ option to reflect the hypothesis that the two test forms are equivalent. The intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. The variances of the factors are estimated as the default. The covariance between f1 and f2 is estimated as the default because f1 and f2 are independent (exogenous) variables.

To reflect the hypothesis that the three test forms are equivalent with respect to their measurement intercepts, the first bracket statement specifies that the intercepts for y1a, y1b, and y1c are equal and the second bracket statement specifies that the intercepts for y2a, y2b, and y2c are equal. Equalities are designated by a number in parentheses. All parameters in a statement followed by the same number in parentheses are held equal. The means of the two factors are fixed at zero as the default. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 5.1.
