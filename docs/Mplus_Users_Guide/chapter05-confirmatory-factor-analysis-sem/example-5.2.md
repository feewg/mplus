# EXAMPLE 5.2: CFA WITH CATEGORICAL FACTOR INDICATORS

## Description

This example demonstrates a CFA with categorical factor indicators. The factor indicators are binary or ordered categorical (ordinal) variables instead of continuous variables.

## Mplus Input

```mplus
TITLE: this is an example of a CFA with
categorical factor indicators
DATA: FILE IS ex5.2.dat;
VARIABLE: NAMES ARE u1-u6;
CATEGORICAL ARE u1-u6;
MODEL: f1 BY u1-u3;
f2 BY u4-u6;
```

## Explanation

The difference between this example and Example 5.1 is that the factor indicators are binary or ordered categorical (ordinal) variables instead of continuous variables. The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In the example above, all six factor indicators are binary or ordered categorical variables. The program determines the number of categories for each factor indicator. The default estimator for this type of analysis is a robust weighted least squares estimator (Muthén, 1984; Muthén, du Toit, & Spisic, 1997). With this estimator, probit regressions for the factor indicators regressed on the factors are estimated. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 5.1.

With maximum likelihood estimation, logistic regressions for the factor indicators regressed on the factors are estimated using a numerical integration algorithm. This is shown in Example 5.5. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase.
