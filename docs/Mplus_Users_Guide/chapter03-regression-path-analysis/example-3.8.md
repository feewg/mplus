# EXAMPLE 3.8: ZERO-INFLATED POISSON AND NEGATIVE BINOMIAL REGRESSION

## Description

This example demonstrates two types of regression models for count dependent variables:

1. **Zero-inflated Poisson regression** - For a count dependent variable with two covariates
2. **Negative binomial model** - An alternative regression for count outcomes

The COUNT option is used to specify which dependent variables are treated as count variables in the model and its estimation, and whether a Poisson or zero-inflated Poisson model will be estimated.

With a zero-inflated Poisson model, two regressions are estimated:
- The first ON statement describes the Poisson regression of the count part of the dependent variable on the covariates. This regression predicts the value of the count dependent variable for individuals who are able to assume values of zero and above.
- The second ON statement describes the logistic regression of the binary latent inflation variable on the covariates. This regression predicts the probability of being unable to assume any value except zero.

The inflation variable is referred to by adding to the name of the count variable the number sign (#) followed by the number 1.

The negative binomial model estimates a dispersion parameter for each of the outcomes.

## Mplus Input

### Part 1: Zero-inflated Poisson regression

```mplus
TITLE: this is an example of a zero-inflated
       Poisson regression for a count dependent
       variable with two covariates
DATA: FILE IS ex3.8a.dat;
VARIABLE: NAMES ARE u1-u6 x1-x4;
          USEVARIABLES ARE u1 x1 x3;
          COUNT IS u1 (i);
MODEL: u1 ON x1 x3;
       u1#1 ON x1 x3;
```

### Part 2: Negative binomial model

```mplus
TITLE: this is an example of a negative binomial
       model for a count dependent variable with
       two covariates
DATA: FILE IS ex3.8b.dat;
VARIABLE: NAMES ARE u1-u6 x1-x4;
          USEVARIABLES ARE u1 x1 x3;
          COUNT IS u1 (nb);
MODEL: u1 ON x1 x3;
```

## Explanation

The difference between this example and Example 3.1 is that the dependent variable is a count variable instead of a continuous variable.

For the **zero-inflated Poisson model**:
- The `i` in parentheses following u1 indicates that a zero-inflated Poisson model will be estimated
- Two regressions are estimated: one for the count part and one for the inflation (zero-inflation) part

For the **negative binomial model**:
- The `nb` in parentheses following u1 indicates that a negative binomial model will be estimated
- The negative binomial model estimates a dispersion parameter for each of the outcomes

The dispersion parameter can be referred to using the name of the count variable.

An alternative way of specifying the zero-inflated Poisson model is presented in Example 7.25, where a categorical latent variable with two classes is used to represent individuals who are able to assume values of zero and above and individuals who are unable to assume any value except zero.

The default estimator for this type of analysis is maximum likelihood with robust standard errors. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.
