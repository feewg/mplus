# EXAMPLE 6.2: Linear growth model for a censored outcome using a censored model

## Description

The difference between this example and Example 6.1 is that the outcome variable is a censored variable instead of a continuous variable.

## Mplus Input

```mplus
TITLE: this is an example of a linear growth
model for a censored outcome using a
censored model
DATA: FILE IS ex6.2.dat;
VARIABLE: NAMES ARE y11-y14 x1 x2 x31-x34;
USEVARIABLES ARE y11-y14;
CENSORED ARE y11-y14 (b);
ANALYSIS: ESTIMATOR = MLR;
MODEL: i s | y11@0 y12@1 y13@2 y14@3;
OUTPUT: TECH1 TECH8;
```

## Explanation

The CENSORED option is used to specify which dependent variables are treated as censored variables in the model and its estimation, whether they are censored from above or below, and whether a censored or censored-inflated model will be estimated. In the example above, y11, y12, y13, and y14 are censored variables. They represent the outcome variable measured at four equidistant occasions. The b in parentheses following y11-y14 indicates that y11, y12, y13, and y14 are censored from below, that is, have floor effects, and that the model is a censored regression model. The censoring limit is determined from the data. The residual variances of the outcome variables are estimated and allowed to be different across time and the residuals are not correlated as the default.

The default estimator for this type of analysis is a robust weighted least squares estimator. By specifying ESTIMATOR=MLR, maximum likelihood estimation with robust standard errors using a numerical integration algorithm is used. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, two dimensions of integration are used with a total of 225 integration points. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

In the parameterization of the growth model shown here, the intercepts of the outcome variables at the four time points are fixed at zero as the default. The means and variances of the growth factors are estimated as the default, and the growth factor covariance is estimated as the default because the growth factors are independent (exogenous) variables. The OUTPUT command is used to request additional output not included as the default. The TECH1 option is used to request the arrays containing parameter specifications and starting values for all free parameters in the model. The TECH8 option is used to request that the optimization history in estimating the model be printed in the output. TECH8 is printed to the screen during the computations as the default. TECH8 screen printing is useful for determining how long the analysis takes. An explanation of the other commands can be found in Example 6.1.
