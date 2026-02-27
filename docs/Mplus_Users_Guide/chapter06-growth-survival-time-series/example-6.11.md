# EXAMPLE 6.11: Piecewise growth model for a continuous outcome

## Description

In this example, the piecewise growth model shown in the picture above is estimated. In a piecewise growth model, different phases of development are captured by more than one slope growth factor.

## Mplus Input

```mplus
TITLE: this is an example of a piecewise growth
model for a continuous outcome
DATA: FILE IS ex6.11.dat;
VARIABLE: NAMES ARE y1-y5;
MODEL: i s1 | y1@0 y2@1 y3@2 y4@2 y5@2;
i s2 | y1@0 y2@0 y3@0 y4@1 y5@2;
```

## Explanation

The first | statement specifies a linear growth model for the first phase of development which includes the first three time points. The second | statement specifies a linear growth model for the second phase of development which includes the last three time points. Note that there is one intercept growth factor i. It must be named in the specification of both growth models when using the | symbol.

In the parameterization of the growth models shown here, the intercepts of the outcome variable at the five time points are fixed at zero as the default. The means and variances of the three growth factors are estimated as the default, and the three growth factors are correlated as the default because they are independent (exogenous) variables. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 6.1.
