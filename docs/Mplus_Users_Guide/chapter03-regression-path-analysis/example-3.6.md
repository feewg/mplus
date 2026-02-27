# EXAMPLE 3.6: Multinomial Logistic Regression

## Description

This is an example of multinomial logistic regression.

## Mplus Input File

```mplus
TITLE: this is an example of a multinomial
    logistic regression for an unordered
    categorical (nominal) dependent variable
    with two covariates
DATA: FILE IS ex3.6.dat;
VARIABLE: NAMES ARE u1-u6 x1-x4;
    USEVARIABLES ARE u1 x1 x3;
    NOMINAL IS u1;
MODEL: u1 ON x1 x3;
```

## Explanation

The difference between this example and Example 3.1 is that the dependent variable is an unordered categorical (nominal) variable instead of a continuous variable.

### NOMINAL Option

The **NOMINAL** option is used to specify which dependent variables are treated as unordered categorical (nominal) variables in the model and its estimation.

In the example above:
- `u1` is a three-category unordered variable
- The program determines the number of categories

### MODEL Command

The **ON** statement describes the multinomial logistic regression of u1 on the covariates x1 and x3 when comparing categories one and two of u1 to the third category of u1. The intercept and slopes of the last category are fixed at zero as the default.

### Estimator

The default estimator for this type of analysis is maximum likelihood with robust standard errors. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

### Alternative Specification

Following is an alternative specification of the multinomial logistic regression of u1 on the covariates x1 and x3:

```mplus
u1#1 u1#2 ON x1 x3;
```

Where:
- `u1#1` refers to the first category of u1
- `u1#2` refers to the second category of u1

The categories of an unordered categorical variable are referred to by adding to the name of the unordered categorical variable the number sign (#) followed by the number of the category. This alternative specification allows individual parameters to be referred to in the MODEL command for the purpose of giving starting values or placing restrictions.

An explanation of the other commands can be found in [Example 3.1](example-3.1.md).
