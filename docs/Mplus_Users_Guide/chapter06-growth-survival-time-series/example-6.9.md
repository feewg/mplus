# EXAMPLE 6.9: Quadratic growth model for a continuous outcome

## Description

The difference between this example and Example 6.1 is that the quadratic growth model shown in the picture above is estimated.

## Mplus Input

```mplus
TITLE: this is an example of a quadratic growth
model for a continuous outcome
DATA: FILE IS ex6.9.dat;
VARIABLE: NAMES ARE y11-y14 x1 x2 x31-x34;
USEVARIABLES ARE y11-y14;
MODEL: i s q | y11@0 y12@1 y13@2 y14@3;
```

## Explanation

A quadratic growth model requires three random effects: an intercept factor (i), a linear slope factor (s), and a quadratic slope factor (q). The | symbol is used to name and define the intercept and slope factors in the growth model. The names i, s, and q on the left-hand side of the | symbol are the names of the intercept, linear slope, and quadratic slope factors, respectively. In the example above, the linear slope factor has equidistant time scores of 0, 1, 2, and 3. The time scores for the quadratic slope factor are the squared values of the linear time scores. These time scores are automatically computed by the program.

In the parameterization of the growth model shown here, the intercepts of the outcome variable at the four time points are fixed at zero as the default. The means and variances of the three growth factors are estimated as the default, and the three growth factors are correlated as the default because they are independent (exogenous) variables. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 6.1.
