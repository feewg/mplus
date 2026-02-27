# EXAMPLE 6.10: Linear growth model for a continuous outcome with time-invariant and time-varying covariates

## Description

The difference between this example and Example 6.1 is that time-invariant and time-varying covariates as shown in the picture above are included in the model.

## Mplus Input

```mplus
TITLE: this is an example of a linear growth
model for a continuous outcome with time-
invariant and time-varying covariates
DATA: FILE IS ex6.10.dat;
VARIABLE: NAMES ARE y11-y14 x1 x2 a31-a34;
MODEL: i s | y11@0 y12@1 y13@2 y14@3;
i s ON x1 x2;
y11 ON a31;
y12 ON a32;
y13 ON a33;
y14 ON a34;
```

## Explanation

The first ON statement describes the linear regressions of the two growth factors on the time-invariant covariates x1 and x2. The next four ON statements describe the linear regressions of the outcome variable on the time-varying covariates a31, a32, a33, and a34 at each of the four time points. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 6.1.
