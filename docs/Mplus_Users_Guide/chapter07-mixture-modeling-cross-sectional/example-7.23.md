# EXAMPLE 7.23: Mixture Randomized Trials Modeling Using CACE Estimation With Training Data

## Description

In this example, the mixture model for randomized trials using CACE (Complier-Average Causal Effect) estimation with training data is estimated (Little & Yau, 1998). The continuous dependent variable y is regressed on the covariate x1 and the treatment dummy variable x2. The categorical latent variable c is compliance status, with class 1 referring to non-compliers and class 2 referring to compliers. Compliance status is observed in the treatment group and unobserved in the control group.

## Mplus Input

```mplus
TITLE: this is an example of mixture randomized
       trials modeling using CACE estimation with
       training data
DATA: FILE IS ex7.23.dat;
VARIABLE: NAMES ARE y x1 x2 c1 c2;
          CLASSES = c (2);
          TRAINING = c1 c2;
ANALYSIS: TYPE = MIXTURE;
MODEL:
    %OVERALL%
    y ON x1 x2;
    c ON x1;
    %c#1%
    [y];
    y;
    y ON x2@0;
    %c#2%
    [y*.5];
    y;
OUTPUT: TECH1 TECH8;
```

## Explanation

The TRAINING option is used to identify the variables that contain information about latent class membership. Because there are two classes, there are two training variables c1 and c2. Individuals in the treatment group are assigned values of 1 for c1 and 0 for c2 if they are non-compliers and 0 for c1 and 1 for c2 if they are compliers. Individuals in the control group are assigned values of 1 for both c1 and c2 to indicate that they are allowed to be a member of either class and that their class membership is estimated.

In the overall model, the first ON statement describes the linear regression of y on the covariate x1 and the treatment dummy variable x2. The second ON statement describes the multinomial logistic regression of the categorical latent variable c on the covariate x1 when comparing class 1 to class 2.

In the model for class 1, a starting value of zero is given for the intercept of y as the default. The residual variance of y is specified to relax the default across class equality constraint. The ON statement describes the linear regression of y on x2 where the slope is fixed at zero. This is done because non-compliers do not receive treatment.

In the model for class 2, a starting value of .5 is given for the intercept of y. The residual variance of y is specified to relax the default across class equality constraint. The regression of y ON x2, which represents the CACE treatment effect, is not fixed at zero for class 2.
