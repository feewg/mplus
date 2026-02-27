# EXAMPLE 5.15: MULTIPLE GROUP CFA WITH COVARIATES (MIMIC) WITH CONTINUOUS FACTOR INDICATORS AND A MEAN STRUCTURE

## Description

This example demonstrates a multiple group CFA with covariates (MIMIC) with continuous factor indicators and a mean structure.

## Mplus Input

```mplus
TITLE: this is an example of a multiple group CFA
with covariates (MIMIC) with continuous
factor indicators and a mean structure
DATA: FILE IS ex5.15.dat;
VARIABLE: NAMES ARE y1-y6 x1-x3 g;
GROUPING IS g (1 = male 2 = female);
MODEL: f1 BY y1-y3;
f2 BY y4-y6;
f1 f2 ON x1-x3;
MODEL female:
f1 BY y3;
[y3];
```

## Explanation

The difference between this example and Example 5.14 is that means are included in the model. In multiple group analysis, when a model includes a mean structure, both the intercepts and factor loadings of the continuous factor indicators are held equal across groups as the default to specify measurement invariance. The intercepts of the factors are fixed at zero in the first group and are free to be estimated in the other groups as the default. The group-specific MODEL command for females specifies that the intercept of y3 for females is free and not equal to the intercept for males. Intercepts are referred to by using square brackets. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Examples 5.1, 5.8, and 5.14.
