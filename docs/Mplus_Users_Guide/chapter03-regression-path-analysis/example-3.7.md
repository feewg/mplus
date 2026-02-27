# EXAMPLE 3.7: Poisson Regression

## Description

This is an example of poisson regression.

## Mplus Input File

```mplus
TITLE: this is an example of a Poisson regression
    for a count dependent variable with two
    covariates
DATA: FILE IS ex3.7.dat;
VARIABLE: NAMES ARE u1-u6 x1-x4;
    USEVARIABLES ARE u1 x1 x3;
    COUNT IS u1;
MODEL: u1 ON x1 x3;
```

## Explanation

The difference between this example and Example 3.1 is that the dependent variable is a count variable instead of a continuous variable.

### COUNT Option

The **COUNT** option is used to specify which dependent variables are treated as count variables in the model and its estimation and whether a Poisson or zero-inflated Poisson model will be estimated.

In the example above:
- `u1` is a count variable that is not inflated

### MODEL Command

The **ON** statement describes the Poisson regression of u1 on the covariates x1 and x3.

### Estimator

The default estimator for this type of analysis is maximum likelihood with robust standard errors. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

An explanation of the other commands can be found in [Example 3.1](example-3.1.md).
