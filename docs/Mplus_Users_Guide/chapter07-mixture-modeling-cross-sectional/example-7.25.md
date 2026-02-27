# EXAMPLE 7.25: Zero-Inflated Poisson Regression Carried Out As A Two-Class Model

## Description

In this example, the zero-inflated Poisson regression model is estimated. This is an alternative to the way zero-inflated Poisson regression was carried out in Example 3.8. In the example above, a categorical latent variable c with two classes is used to represent individuals who are able to assume values of zero and above and individuals who are unable to assume any value except zero. The categorical latent variable c corresponds to the binary latent inflation variable u1#1 in Example 3.8. This approach has the advantage of allowing the estimation of the probability of being in each class and the posterior probabilities of being in each class for each individual.

## Mplus Input

```mplus
TITLE: this is an example of a zero-inflated
       Poisson regression carried out as a two-
       class model
DATA: FILE IS ex3.8.dat;
VARIABLE: NAMES ARE u1 x1 x3;
          COUNT IS u1;
          CLASSES = c (2);
ANALYSIS: TYPE = MIXTURE;
MODEL:
    %OVERALL%
    u1 ON x1 x3;
    c ON x1 x3;
    %c#1%
    [u1@-15];
    u1 ON x1@0 x3@0;
OUTPUT: TECH1 TECH8;
```

## Explanation

The COUNT option is used to specify which dependent variables are treated as count variables in the model and its estimation and whether a Poisson or zero-inflated Poisson model will be estimated. In the example above, u1 is a specified as count variable without inflation because the inflation is captured by the categorical latent variable c.

In the overall model, the first ON statement describes the Poisson regression of the count variable u1 on the covariates x1 and x3. The second ON statement describes the multinomial logistic regression of the categorical latent variable c on the covariates x1 and x3 when comparing class 1 to class 2.

In this example, class 1 contains individuals who are unable to assume any value except zero on u1. Class 2 contains individuals whose values on u1 are distributed as a Poisson variable without inflation. Mixing the two classes results in u1 having a zero-inflated Poisson distribution.

In the class-specific model for class 1, the intercept of u1 is fixed at -15 to represent a low log rate at which the probability of a count greater than zero is zero. Therefore, all individuals in class 1 have a value of 0 on u1. Because u1 has no variability, the slopes in the Poisson regression of u1 on the covariates x1 and x3 in class 1 are fixed at zero.
