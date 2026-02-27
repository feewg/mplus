# EXAMPLE 5.17: MULTIPLE GROUP CFA WITH COVARIATES (MIMIC) WITH CATEGORICAL FACTOR INDICATORS AND A THRESHOLD STRUCTURE USING THE THETA PARAMETERIZATION

## Description

This example demonstrates a multiple group CFA with covariates (MIMIC) with categorical factor indicators and a threshold structure using the Theta parameterization.

## Mplus Input

```mplus
TITLE: this is an example of a multiple group CFA
with covariates (MIMIC) with categorical
factor indicators and a threshold
structure using the Theta parameterization
DATA: FILE IS ex5.17.dat;
VARIABLE: NAMES ARE u1-u6 x1-x3 g;
CATEGORICAL ARE u1-u6;
GROUPING IS g (1 = male 2 = female);
ANALYSIS: PARAMETERIZATION = THETA;
MODEL: f1 BY u1-u3;
f2 BY u4-u6;
f1 f2 ON x1-x3;
MODEL female:
f1 BY u3;
[u3$1];
u3@1;
```

## Explanation

The difference between this example and Example 5.16 is that the Theta parameterization is used instead of the Delta parameterization. In the Delta parameterization, scale factors are allowed to be parameters in the model, but residual variances for latent response variables of observed categorical dependent variables are not. In the alternative Theta parameterization, residual variances for latent response variables are allowed to be parameters in the model but scale factors are not. The Theta parameterization is selected by specifying PARAMETERIZATION=THETA in the ANALYSIS command.

When the Theta parameterization is used, the residual variances for the latent response variables of the observed categorical dependent variables are fixed at one in the first group and are free to be estimated in the other groups as the default. When a threshold and a factor loading for a categorical factor indicator are free across groups, the residual variance for the variable must be fixed at one in these groups for identification purposes. In the group-specific MODEL command for females, the residual variance for u3 is fixed at one. An explanation of the other commands can be found in Examples 5.1, 5.8, 5.14, 5.15, and 5.16.
