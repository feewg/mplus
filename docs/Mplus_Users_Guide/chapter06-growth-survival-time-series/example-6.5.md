# EXAMPLE 6.5: Linear growth model for a categorical outcome using the Theta parameterization

## Description

The difference between this example and Example 6.4 is that the Theta parameterization instead of the default Delta parameterization is used.

## Mplus Input

```mplus
TITLE: this is an example of a linear growth
model for a categorical outcome using the
Theta parameterization
DATA: FILE IS ex6.5.dat;
VARIABLE: NAMES ARE u11-u14 x1 x2 x31-x34;
USEVARIABLES ARE u11-u14;
CATEGORICAL ARE u11-u14;
ANALYSIS: PARAMETERIZATION = THETA;
MODEL: i s | u11@0 u12@1 u13@2 u14@3;
```

## Explanation

In the Delta parameterization, scale factors for the latent response variables of the observed categorical outcomes are allowed to be parameters in the model, but residual variances for the latent response variables are not. In the Theta parameterization, residual variances for latent response variables are allowed to be parameters in the model, but scale factors are not. Because the Theta parameterization is used, the residual variance for the latent response variable at the first time point is fixed at one as the default, while the residual variances for the latent response variables at the other time points are free to be estimated. An explanation of the other commands can be found in Examples 6.1 and 6.4.
