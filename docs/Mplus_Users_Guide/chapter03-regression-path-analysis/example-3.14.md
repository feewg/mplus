# EXAMPLE 3.14: PATH ANALYSIS WITH A COMBINATION OF CONTINUOUS AND CATEGORICAL DEPENDENT VARIABLES

## Description

This example demonstrates a path analysis where the dependent variables are a combination of continuous and binary or ordered categorical (ordinal) variables instead of all continuous variables.

This mixed-variable approach allows for:
- Modeling different types of outcomes simultaneously
- Using appropriate regression types for each dependent variable
- Testing indirect effects across different variable types

## Mplus Input

```mplus
TITLE: this is an example of a path analysis
       with a combination of continuous and
       categorical dependent variables
DATA: FILE IS ex3.14.dat;
VARIABLE: NAMES ARE y1 y2 u1 y4-y6 x1-x4;
          USEVARIABLES ARE y1-u1 x1-x3;
          CATEGORICAL IS u1;
MODEL: y1 y2 ON x1 x2 x3;
       u1 ON y1 y2 x2;
```

## Explanation

The difference between this example and Example 3.11 is that the dependent variables are a combination of continuous and binary or ordered categorical (ordinal) variables instead of all continuous variables.

The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In this example:
- y1 and y2 are continuous variables
- u1 is a binary or ordered categorical variable

The program determines the number of categories for the categorical variable.

The first ON statement describes the linear regressions of y1 and y2 on the covariates x1, x2, and x3.

The second ON statement describes the probit regression of u1 on the mediating variables y1 and y2 and the covariate x2.

The default estimator for this type of analysis is a robust weighted least squares estimator. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. If a maximum likelihood estimator is selected, the regression for u1 is a logistic regression.
