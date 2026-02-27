# EXAMPLE 5.14: MULTIPLE GROUP CFA WITH COVARIATES (MIMIC) WITH CONTINUOUS FACTOR INDICATORS AND NO MEAN STRUCTURE

## Description

This example demonstrates a multiple group CFA with covariates (MIMIC) with continuous factor indicators and no mean structure.

## Mplus Input

```mplus
TITLE: this is an example of a multiple group CFA
with covariates (MIMIC) with continuous
factor indicators and no mean structure
DATA: FILE IS ex5.14.dat;
VARIABLE: NAMES ARE y1-y6 x1-x3 g;
GROUPING IS g (1 = male 2 = female);
ANALYSIS: MODEL = NOMEANSTRUCTURE;
INFORMATION = EXPECTED;
MODEL: f1 BY y1-y3;
f2 BY y4-y6;
f1 f2 ON x1-x3;
MODEL female:
f1 BY y3;
```

## Explanation

The difference between this example and Example 5.8 is that this is a multiple group rather than a single group analysis. The GROUPING option is used to identify the variable in the data set that contains information on group membership when the data for all groups are stored in a single data set. The information in parentheses after the grouping variable name assigns labels to the values of the grouping variable found in the data set. In the example above, observations with g equal to 1 are assigned the label male, and individuals with g equal to 2 are assigned the label female. These labels are used in conjunction with the MODEL command to specify model statements specific to each group.

The NOMEANSTRUCTURE setting for the MODEL option of the ANALYSIS command is used with TYPE=GENERAL to specify that means, intercepts, and thresholds are not included in the analysis model. As a result, a covariance structure model is estimated. The INFORMATION option is used to select the estimator of the information matrix to be used in computing standard errors when the ML or MLR estimators are used for analysis. The default is the observed information matrix. In this example, the expected information matrix is used in line with conventional covariance structure analysis.

In multiple group analysis, two variations of the MODEL command are used. They are MODEL and MODEL followed by a label. MODEL describes the overall model to be estimated for each group. The factor loading measurement parameters are held equal across groups as the default to specify measurement invariance. MODEL followed by a label describes differences between the overall model and the model for the group designated by the label. In the group-specific MODEL command for females, the factor loading for variable y3 and factor f1 is specified to be free and not equal to the same factor loading for males. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Examples 5.1 and 5.8.
