# EXAMPLE 6.13: Growth model for two parallel processes for continuous outcomes with regressions among the random effects

## Description

In this example, the model for two parallel processes shown in the picture above is estimated. Regressions among the growth factors are included in the model.

## Mplus Input

```mplus
TITLE: this is an example of a growth model for
two parallel processes for continuous
outcomes with regressions among the random
effects
DATA: FILE IS ex6.13.dat;
VARIABLE: NAMES ARE y11 y12 y13 y14 y21 y22 y23 y24;
MODEL: i1 s1 | y11@0 y12@1 y13@2 y14@3;
i2 s2 | y21@0 y22@1 y23@2 y24@3;
s1 ON i2;
s2 ON i1;
```

## Explanation

The | statements are used to name and define the intercept and slope growth factors for the two linear growth models. The names i1 and s1 on the left-hand side of the first | statement are the names of the intercept and slope growth factors for the first linear growth model. The names i2 and s2 on the left-hand side of the second | statement are the names of the intercept and slope growth factors for the second linear growth model. The values on the right-hand side of the two | statements are the time scores for the two slope growth factors. For both growth models, the time scores of the slope growth factors are fixed at 0, 1, 2, and 3 to define a linear growth model with equidistant time points. The zero time score for the slope growth factor at time point one defines the intercept factors as initial status factors. The coefficients of the intercept growth factors are fixed at one as part of the growth model parameterization. The residual variances of the outcome variables are estimated and allowed to be different across time, and the residuals are not correlated as the default.

In the parameterization of the growth model shown here, the intercepts of the outcome variables at the four time points are fixed at zero as the default. The means and variances of the intercept growth factors are estimated as the default, and the intercept growth factor covariance is estimated as the default because the intercept growth factors are independent (exogenous) variables. The intercepts and residual variances of the slope growth factors are estimated as the default, and the slope growth factors are correlated as the default because residuals are correlated for latent variables that do not influence any other variable in the model except their own indicators.

The two ON statements describe the regressions of the slope growth factor for each process on the intercept growth factor of the other process. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 6.1.
