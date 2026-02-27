# EXAMPLE 6.17: Linear growth model for a continuous outcome with first-order auto correlated residuals using non-linear constraints

## Description

The difference between this example and Example 6.1 is that first-order auto correlated residuals have been added to the model. In a model with first-order correlated residuals, one residual variance parameter and one residual auto-correlation parameter are estimated.

## Mplus Input

```mplus
TITLE: this is an example of a linear growth
model for a continuous outcome with first-
order auto correlated residuals using non-
linear constraints
DATA: FILE = ex6.17.dat;
VARIABLE: NAMES = y1-y4;
MODEL: i s | y1@0 y2@1 y3@2 y4@3;
y1-y4 (resvar);
y1-y3 PWITH y2-y4 (p1);
y1-y2 PWITH y3-y4 (p2);
y1 WITH y4 (p3);
MODEL CONSTRAINT:
NEW (corr);
p1 = resvar*corr;
p2 = resvar*corr**2;
p3 = resvar*corr**3;
```

## Explanation

In the MODEL command, the label resvar following the residual variances serves two purposes. It specifies that the residual variances are held equal to each other and gives that residual variance parameter a label to be used in the MODEL CONSTRAINT command. The labels p1, p2, and p3 specify that the residual covariances at adjacent time points, at adjacent time points once removed, and at adjacent time points twice removed are held equal. The MODEL CONSTRAINT command is used to define linear and non-linear constraints on the parameters in the model. In the MODEL CONSTRAINT command, the NEW option is used to introduce a new parameter that is not part of the MODEL command. This residual auto-correlation parameter is referred to as corr. The p1 parameter constraint specifies that the residual covariances at adjacent time points are equal to the residual variance parameter multiplied by the auto-correlation parameter. The p2 parameter constraint specifies that the residual covariances at adjacent time points once removed are equal to the residual variance parameter multiplied by the auto-correlation parameter to the power of two. The p3 parameter constraint specifies that the residual covariance at adjacent time points twice removed is equal to the residual variance parameter multiplied by the auto-correlation parameter to the power of three. An explanation of the other commands can be found in Example 6.1.
