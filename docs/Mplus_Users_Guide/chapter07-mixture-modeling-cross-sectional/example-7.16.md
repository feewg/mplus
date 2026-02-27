# EXAMPLE 7.16: LCA With Partial Conditional Independence

## Description

In this example, the LCA with partial conditional independence is estimated. A similar model is described in Qu, Tan, and Kutner (1996).

## Mplus Input

```mplus
TITLE: this is an example of LCA with partial
       conditional independence
DATA: FILE IS ex7.16.dat;
VARIABLE: NAMES ARE u1-u4;
          CATEGORICAL = u1-u4;
          CLASSES = c(2);
ANALYSIS: TYPE = MIXTURE;
          PARAMETERIZATION = RESCOVARIANCES;
MODEL:
    %OVERALL%
    %c#1%
    [u1$1-u4$1*-1];
    u2 WITH u3;
OUTPUT: TECH1 TECH8;
```

## Explanation

By specifying PARAMETERIZATION=RESCOVARIANCES, the WITH option can be used to specify residual covariances for binary and ordered categorical outcomes using maximum likelihood estimation (Asparouhov & Muthén, 2015b). In the example above, the WITH statement in class 1 specifies the residual covariance between u2 and u3 for class 1. The conditional independence assumption of u2 and u3 is not violated for class 2.
