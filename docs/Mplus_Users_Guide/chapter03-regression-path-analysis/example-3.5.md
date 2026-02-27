# EXAMPLE 3.5: Logistic Regression

## Description

This is an example of logistic regression.

## Mplus Input File

```mplus
TITLE: this is an example of a logistic
    regression for a categorical observed
    dependent variable with two covariates
DATA: FILE IS ex3.5.dat;
VARIABLE: NAMES ARE u1-u6 x1-x4;
    USEVARIABLES ARE u1 x1 x3;
    CATEGORICAL IS u1;
ANALYSIS: ESTIMATOR = ML;
MODEL: u1 ON x1 x3;
```

## Explanation

The difference between this example and Example 3.1 is that the dependent variable is a binary or ordered categorical (ordinal) variable instead of a continuous variable.

### CATEGORICAL Option

The **CATEGORICAL** option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation.

In the example above:
- `u1` is a binary or ordered categorical variable
- The program determines the number of categories

### ANALYSIS Command

By specifying **ESTIMATOR=ML**, a **logistic regression** will be estimated.

### MODEL Command

The **ON** statement describes the logistic regression of u1 on the covariates x1 and x3.

An explanation of the other commands can be found in [Example 3.1](example-3.1.md).
