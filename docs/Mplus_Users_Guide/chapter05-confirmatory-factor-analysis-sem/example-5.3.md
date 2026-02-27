# EXAMPLE 5.3: CFA WITH CONTINUOUS AND CATEGORICAL FACTOR INDICATORS

## Description

This example demonstrates a CFA with continuous and categorical factor indicators. The factor indicators are a combination of binary or ordered categorical (ordinal) and continuous variables instead of all continuous variables.

## Mplus Input

```mplus
TITLE: this is an example of a CFA with
continuous and categorical factor
indicators
DATA: FILE IS ex5.3.dat;
VARIABLE: NAMES ARE u1-u3 y4-y6;
CATEGORICAL ARE u1 u2 u3;
MODEL: f1 BY u1-u3;
f2 BY y4-y6;
```

## Explanation

The difference between this example and Example 5.1 is that the factor indicators are a combination of binary or ordered categorical (ordinal) and continuous variables instead of all continuous variables. The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In the example above, the factor indicators u1, u2, and u3 are binary or ordered categorical variables whereas the factor indicators y4, y5, and y6 are continuous variables. The program determines the number of categories for each factor indicator. The default estimator for this type of analysis is a robust weighted least squares estimator. With this estimator, probit regressions are estimated for the categorical factor indicators, and linear regressions are estimated for the continuous factor indicators. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. With maximum likelihood estimation, logistic regressions are estimated for the categorical dependent variables using a numerical integration algorithm. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. An explanation of the other commands can be found in Example 5.1.
