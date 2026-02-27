# EXAMPLE 5.10: THRESHOLD STRUCTURE CFA FOR CATEGORICAL FACTOR INDICATORS

## Description

This example demonstrates a threshold structure CFA for categorical factor indicators. The factor indicators are binary or ordered categorical (ordinal) variables instead of continuous variables.

## Mplus Input

```mplus
TITLE: this is an example of a threshold
structure CFA for categorical factor
indicators
DATA: FILE IS ex5.10.dat;
VARIABLE: NAMES ARE u1a-u1c u2a-u2c;
CATEGORICAL ARE u1a-u1c u2a-u2c;
MODEL: f1 BY u1a u1b@1 u1c@1;
f2 BY u2a u2b@1 u2c@1;
[u1a$1 u1b$1 u1c$1] (1);
[u2a$1 u2b$1 u2c$1] (2);
```

## Explanation

The difference between this example and Example 5.9 is that the factor indicators are binary or ordered categorical (ordinal) variables instead of continuous variables. The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In the example above, all six factor indicators are binary or ordered categorical variables. The program determines the number of categories for each factor indicator. In this example, it is assumed that the factor indicators are binary variables with one threshold each.

For binary and ordered categorical factor indicators, thresholds are modeled rather than intercepts or means. The number of thresholds for a categorical variable is equal to the number of categories minus one. In the example above, the categorical variables are binary so they have one threshold. Thresholds are referred to by adding to the variable name a $ followed by a number. The thresholds of the factor indicators are referred to as u1a$1, u1b$1, u1c$1, u2a$1, u2b$1, and u2c$1. Thresholds are referred to in square brackets. To reflect the hypothesis that the three test forms are equivalent with respect to their measurement thresholds, the (1) after the first bracket statement specifies that the thresholds for u1a, u1b, and u1c are constrained to be equal and the (2) after the second bracket statement specifies that the thresholds for u2a, u2b, and u2c are constrained to be equal. The default estimator for this type of analysis is a robust weighted least squares estimator. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. With maximum likelihood, logistic regressions are estimated using a numerical integration algorithm. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. An explanation of the other commands can be found in Examples 5.1 and 5.9.
