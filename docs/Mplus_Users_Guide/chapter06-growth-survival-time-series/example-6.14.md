# EXAMPLE 6.14: Multiple indicator linear growth model for continuous outcomes

## Description

In this example, the multiple indicator linear growth model for continuous outcomes shown in the picture above is estimated.

## Mplus Input

```mplus
TITLE: this is an example of a multiple indicator
linear growth model for continuous
outcomes
DATA: FILE IS ex6.14.dat;
VARIABLE: NAMES ARE y11 y21 y31 y12 y22 y32 y13
y23 y33;
MODEL: f1 BY y11
y21-y31 (1-2);
f2 BY y12
y22-y32 (1-2);
f3 BY y13
y23-y33 (1-2);
[y11 y12 y13] (3);
[y21 y22 y23] (4);
[y31 y32 y33] (5);
i s | f1@0 f2@1 f3@2;
```

## Explanation

The first BY statement specifies that f1 is measured by y11, y21, and y31. The second BY statement specifies that f2 is measured by y12, y22, and y32. The third BY statement specifies that f3 is measured by y13, y23, and y33. The metric of the three factors is set automatically by the program by fixing the first factor loading in each BY statement to one. This option can be overridden. The residual variances of the factor indicators are estimated and the residuals are not correlated as the default.

A multiple indicator growth model requires measurement invariance of the three factors across time. Measurement invariance is specified by holding the intercepts and factor loadings of the factor indicators equal over time. The (1-2) following the factor loadings in the three BY statements uses the list function to assign equality labels to these parameters. The label 1 is assigned to the factor loadings of y21, y22, and y23 which holds these factor loadings equal across time. The label 2 is assigned to the factor loadings of y31, y32, and y33 which holds these factor loadings equal across time. The factor loadings of y11, y21, and y31 are fixed at one as described above. The bracket statements refer to the intercepts. The (3) holds the intercepts of y11, y12, and y13 equal. The (4) holds the intercepts of y21, y22, and y23 equal. The (5) holds the intercepts of y31, y32, and y33 equal.

The | statement is used to name and define the intercept and slope factors in the growth model. The names i and s on the left-hand side of the | are the names of the intercept and slope growth factors, respectively. The values on the right-hand side of the | are the time scores for the slope growth factor. The time scores of the slope growth factor are fixed at 0, 1, and 2 to define a linear growth model with equidistant time points. The zero time score for the slope growth factor at time point one defines the intercept growth factor as an initial status factor. The coefficients of the intercept growth factor are fixed at one as part of the growth model parameterization. The residual variances of the factors f1, f2, and f3 are estimated and allowed to be different across time, and the residuals are not correlated as the default.

In the parameterization of the growth model shown here, the intercepts of the factors f1, f2, and f3 are fixed at zero as the default. The mean of the intercept growth factor is fixed at zero and the mean of the slope growth factor is estimated as the default. The variances of the growth factors are estimated as the default, and the growth factors are correlated as the default because they are independent (exogenous) variables. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 6.1.
