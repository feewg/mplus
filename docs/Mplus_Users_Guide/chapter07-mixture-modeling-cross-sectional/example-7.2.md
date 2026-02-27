# EXAMPLE 7.2: Mixture Regression Analysis For A Count Variable Using A Zero-Inflated Poisson Model Using Automatic Starting Values With Random Starts

## Description

The difference between this example and Example 7.1 is that the dependent variable is a count variable instead of a continuous variable. With a zero-inflated Poisson model, two regressions are estimated. In the overall model, the first ON statement describes the Poisson regression of the count part of u on the covariates x1 and x2. This regression predicts the value of the count dependent variable for individuals who are able to assume values of zero and above. The second ON statement describes the logistic regression of the binary latent inflation variable u#1 on the covariates x1 and x2. This regression describes the probability of being unable to assume any value except zero.

## Mplus Input

```mplus
TITLE: this is an example of a mixture regression
       analysis for a count variable using a
       zero-inflated Poisson model using
       automatic starting values with random
       starts
DATA: FILE IS ex7.2.dat;
VARIABLE: NAMES ARE u x1 x2;
          CLASSES = c (2);
          COUNT = u (i);
ANALYSIS: TYPE = MIXTURE;
MODEL:
    %OVERALL%
    u ON x1 x2;
    u#1 ON x1 x2;
    c ON x1;
    %c#2%
    u ON x2;
OUTPUT: TECH1 TECH8;
```

## Explanation

The COUNT option is used to specify which dependent variables are treated as count variables in the model and its estimation and whether a Poisson or zero-inflated Poisson model will be estimated. In the example above, u is a count variable. The i in parentheses following u indicates that a zero-inflated Poisson model will be estimated.

With a zero-inflated Poisson model, two regressions are estimated. In the overall model, the first ON statement describes the Poisson regression of the count part of u on the covariates x1 and x2. This regression predicts the value of the count dependent variable for individuals who are able to assume values of zero and above. The second ON statement describes the logistic regression of the binary latent inflation variable u#1 on the covariates x1 and x2. This regression describes the probability of being unable to assume any value except zero. The inflation variable is referred to by adding to the name of the count variable the number sign (#) followed by the number 1. The third ON statement specifies the multinomial logistic regression of the categorical latent variable c on the covariate x1 when comparing class 1 to class 2. The intercept in the regression of c on x1 is estimated as the default.

In the model for class 2, the ON statement describes the Poisson regression of the count part of u on the covariate x2. This specification relaxes the default equality constraint for the regression coefficient. The intercepts of u are free and unequal across classes as the default. All other parameters are held equal across classes as the default. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
