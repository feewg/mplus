# EXAMPLE 3.3: Censored-Inflated Regression

## Description

This is an example of censored-inflated regression.

## Mplus Input File

```mplus
TITLE: this is an example of a censored-inflated
    regression for a censored dependent
    variable with two covariates
DATA: FILE IS ex3.3.dat;
VARIABLE: NAMES ARE y1-y6 x1-x4;
    USEVARIABLES ARE y1 x1 x3;
    CENSORED ARE y1 (bi);
MODEL: y1 ON x1 x3;
    y1#1 ON x1 x3;
```

## Explanation

The difference between this example and Example 3.1 is that the dependent variable is a censored variable instead of a continuous variable.

### CENSORED Option

The **CENSORED** option is used to specify which dependent variables are treated as censored variables in the model and its estimation, whether they are censored from above or below, and whether a censored or censored-inflated model will be estimated.

In the example above:
- `y1` is a censored variable
- The **bi** in parentheses following y1 indicates that y1 is censored from below (has a floor effect) and that a **censored-inflated** regression model will be estimated
- The censoring limit is determined from the data

### Censored-Inflated Model

With a censored-inflated model, two regressions are estimated:

1. **First ON statement**: Describes the censored regression of the continuous part of y1 on the covariates x1 and x3. This regression predicts the value of the censored dependent variable for individuals who are able to assume values of the censoring point and above.

2. **Second ON statement**: Describes the logistic regression of the binary latent inflation variable `y1#1` on the covariates x1 and x3. This regression predicts the probability of being unable to assume any value except the censoring point.

The inflation variable is referred to by adding to the name of the censored variable the number sign (#) followed by the number 1.

### Estimator

The default estimator for this type of analysis is maximum likelihood with robust standard errors. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

An explanation of the other commands can be found in [Example 3.1](example-3.1.md).
