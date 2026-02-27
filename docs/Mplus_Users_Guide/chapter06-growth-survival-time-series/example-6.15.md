# EXAMPLE 6.15: Multiple indicator linear growth model for categorical outcomes

## Description

The difference between this example and Example 6.14 is that the factor indicators are binary or ordered categorical (ordinal) variables instead of continuous variables.

## Mplus Input

```mplus
TITLE: this is an example of a multiple indicator
linear growth model for categorical
outcomes
DATA: FILE IS ex6.15.dat;
VARIABLE: NAMES ARE u11 u21 u31 u12 u22 u32
u13 u23 u33;
CATEGORICAL ARE u11 u21 u31 u12 u22 u32
u13 u23 u33;
MODEL: f1 BY u11
u21-u31 (1-2);
f2 BY u12
u22-u32 (1-2);
f3 BY u13
u23-u33 (1-2);
[u11$1 u12$1 u13$1] (3);
[u21$1 u22$1 u23$1] (4);
[u31$1 u32$1 u33$1] (5);
{u11-u31@1 u12-u33};
i s | f1@0 f2@1 f3@2;
```

## Explanation

The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In the example above, all of the factor indicators are categorical variables. The program determines the number of categories for each indicator.

For binary and ordered categorical factor indicators, thresholds are modeled rather than intercepts or means. The number of thresholds for a categorical variable is equal to the number of categories minus one. In the example above, the categorical variables are binary so they have one threshold. Thresholds are referred to by adding to the variable name a $ followed by a number. The thresholds of the factor indicators are referred to as u11$1, u12$1, u13$1, u21$1, u22$1, u23$1, u31$1, u32$1, and u33$1. Thresholds are referred to in square brackets.

The growth model requires measurement invariance of the three factors across time. Measurement invariance is specified by holding the thresholds and factor loadings of the factor indicators equal over time. The (3) after the first bracket statement holds the thresholds of u11, u12, and u13 equal. The (4) after the second bracket statement holds the thresholds of u21, u22, and u23 equal. The (5) after the third bracket statement holds the thresholds of u31, u32, and u33 equal. A list of observed variables in curly brackets refers to scale factors. These are part of the model with weighted least squares estimation and the Delta parameterization. The scale factors for the latent response variables of the categorical outcomes for the first factor are fixed at one, while the scale factors for the latent response variables for the other factors are free to be estimated. An explanation of the other commands can be found in Examples 6.1 and 6.14.
