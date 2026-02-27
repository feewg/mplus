# EXAMPLE 3.4: Probit Regression

## Description

This is an example of probit regression.

## Mplus Input File

```mplus
TITLE: this is an example of a probit regression
    for a binary or categorical observed
    dependent variable with two covariates
DATA: FILE IS ex3.4.dat;
VARIABLE: NAMES ARE u1-u6 x1-x4;
    USEVARIABLES ARE u1 x1 x3;
    CATEGORICAL = u1;
MODEL: u1 ON x1 x3;
```

## Explanation

The difference between this example and Example 3.1 is that the dependent variable is a binary or ordered categorical (ordinal) variable instead of a continuous variable.

### CATEGORICAL Option

The **CATEGORICAL** option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation.

In the example above:
- `u1` is a binary or ordered categorical variable
- The program determines the number of categories

### MODEL Command

The **ON** statement describes the **probit regression** of u1 on the covariates x1 and x3.

### Estimator

The default estimator for this type of analysis is a **robust weighted least squares estimator**. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

An explanation of the other commands can be found in [Example 3.1](example-3.1.md).
