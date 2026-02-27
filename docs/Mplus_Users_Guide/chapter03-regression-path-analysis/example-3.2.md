# EXAMPLE 3.2: Censored Regression

## Description

This is an example of a censored regression for a censored dependent variable with two covariates.

## Mplus Input File

```mplus
TITLE: this is an example of a censored
    regression for a censored dependent
    variable with two covariates
DATA: FILE IS ex3.2.dat;
VARIABLE: NAMES ARE y1-y6 x1-x4;
    USEVARIABLES ARE y1 x1 x3;
    CENSORED ARE y1 (b);
ANALYSIS: ESTIMATOR = MLR;
MODEL: y1 ON x1 x3;
```

## Explanation

The difference between this example and Example 3.1 is that the dependent variable is a censored variable instead of a continuous variable.

### CENSORED Option

The **CENSORED** option is used to specify which dependent variables are treated as censored variables in the model and its estimation, whether they are censored from above or below, and whether a censored or censored-inflated model will be estimated.

In the example above:
- `y1` is a censored variable
- The **b** in parentheses following y1 indicates that y1 is censored from below, that is, has a floor effect
- The model is a censored regression model
- The censoring limit is determined from the data

### ANALYSIS Command

The default estimator for this type of analysis is a robust weighted least squares estimator. By specifying **ESTIMATOR=MLR**, maximum likelihood estimation with robust standard errors is used.

### MODEL Command

The **ON** statement describes the censored regression of y1 on the covariates x1 and x3.

An explanation of the other commands can be found in [Example 3.1](example-3.1.md).
