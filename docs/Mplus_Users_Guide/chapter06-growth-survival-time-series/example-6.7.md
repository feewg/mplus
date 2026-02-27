# EXAMPLE 6.7: Linear growth model for a count outcome using a zero-inflated Poisson model

## Description

The difference between this example and Example 6.1 is that the outcome variable is a count variable instead of a continuous variable.

## Mplus Input

```mplus
TITLE: this is an example of a linear growth
model for a count outcome using a zero-
inflated Poisson model
DATA: FILE IS ex6.7.dat;
VARIABLE: NAMES ARE u11-u14 x1 x2 x31-x34;
USEVARIABLES ARE u11-u14;
COUNT ARE u11-u14 (i);
ANALYSIS: INTEGRATION = 7;
MODEL: i s | u11@0 u12@1 u13@2 u14@3;
ii si | u11#1@0 u12#1@1 u13#1@2 u14#1@3;
s@0 si@0;
OUTPUT: TECH1 TECH8;
```

## Explanation

The COUNT option is used to specify which dependent variables are treated as count variables in the model and its estimation and whether a Poisson or zero-inflated Poisson model will be estimated. In the example above, u11, u12, u13, and u14 are count variables. They represent the outcome variable u1 measured at four equidistant occasions. The i in parentheses following u11-u14 indicates that a zero-inflated Poisson model will be estimated.

With a zero-inflated Poisson model, two growth models are estimated. The first | statement describes the growth model for the count part of the outcome for individuals who are able to assume values of zero and above. The second | statement describes the growth model for the inflation part of the outcome, the probability of being unable to assume any value except zero. The binary latent inflation variable is referred to by adding to the name of the count variable the number sign (#) followed by the number 1.

In the parameterization of the growth model for the count part of the outcome, the intercepts of the outcome variables at the four time points are fixed at zero as the default. The means and variances of the growth factors are estimated as the default, and the growth factor covariance is estimated as the default because the growth factors are independent (exogenous) variables.

In the parameterization of the growth model for the inflation part of the outcome, the intercepts of the outcome variable at the four time points are held equal as the default. The mean of the intercept growth factor is fixed at zero. The mean of the slope growth factor and the variances of the intercept and slope growth factors are estimated as the default, and the growth factor covariance is estimated as the default because the growth factors are independent (exogenous) variables.

In this example, the variance of the slope growth factor s for the count part and the slope growth factor si for the inflation part of the outcome are fixed at zero. Because of this, the covariances among s, si, and the other growth factors are fixed at zero as the default. The covariance between the i and ii intercept growth factors is estimated as the default.

The default estimator for this type of analysis is maximum likelihood with robust standard errors using a numerical integration algorithm. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, two dimensions of integration are used with a total of 49 integration points. The INTEGRATION option of the ANALYSIS command is used to change the number of integration points per dimension from the default of 15 to 7. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

The OUTPUT command is used to request additional output not included as the default. The TECH1 option is used to request the arrays containing parameter specifications and starting values for all free parameters in the model. The TECH8 option is used to request that the optimization history in estimating the model be printed in the output. TECH8 is printed to the screen during the computations as the default. TECH8 screen printing is useful for determining how long the analysis takes. An explanation of the other commands can be found in Example 6.1.
