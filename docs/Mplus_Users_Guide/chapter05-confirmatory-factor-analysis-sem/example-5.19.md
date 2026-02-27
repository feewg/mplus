# EXAMPLE 5.19: TWO-GROUP TWIN MODEL FOR CATEGORICAL OUTCOMES WHERE FACTORS REPRESENT THE ACE COMPONENTS

## Description

This example demonstrates a two-group twin model for categorical outcomes where factors represent the ACE components.

## Mplus Input

```mplus
TITLE: this is an example of a two-group twin
model for categorical outcomes where
factors represent the ACE components
DATA: FILE = ex5.19.dat;
VARIABLE: NAMES = u1 u2 g;
CATEGORICAL = u1-u2;
GROUPING = g (1 = mz 2 = dz);
ANALYSIS: MODEL = NOCOVARIANCES;
MODEL: [u1$1-u2$1] (1);
a1 BY u1* (2);
a2 BY u2* (2);
c1 BY u1* (3);
c2 BY u2* (3);
a1-c2@1;
[a1-c2@0];
a1 WITH a2@1;
c1 WITH c2@1;
MODEL dz: a1 WITH a2@.5;
{u1-u2@1};
```

## Explanation

The difference between this example and Example 5.18 is that the outcomes are binary or ordered categorical instead of continuous variables. Because of this, the outcomes have no freely estimated residual variances and therefore the E factors are not part of the model. With categorical outcomes, the twin model is formulated for normally-distributed latent response variables underlying the categorical outcomes which are also called liabilities. This model is referred to as the threshold model for liabilities (Neale & Cardon, 1992). More complex examples of such models are given in Prescott (2004). A simpler alternative way of specifying this model is shown in Example 5.22 where parameter constraints are used instead of the A and C factors.

The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In the example above, u1 and u2 are binary or ordered categorical variables. The program determines the number of categories for each variable.

For binary and ordered categorical outcomes, thresholds are modeled rather than intercepts or means. The number of thresholds for a categorical variable is equal to the number of categories minus one. In the example above, the categorical variables are binary so they have one threshold. Thresholds are referred to by adding to the variable name a $ followed by a number. The thresholds of u1 and u2 are referred to as u1$1 and u2$1. Thresholds are referred to in square brackets. The (1) after the first bracket statement specifies that the thresholds for u1$1 and u2$1 are constrained to be equal.

Because the outcomes are categorical, scale factors are required for multiple group analysis when the default Delta parameterization is used. Scale factors are referred to using curly brackets ({}). By default, scale factors are fixed at one in the first group and are free to be estimated in the other groups. In this model where the variance contributions from the A and C factors are assumed equal across the two groups, the scale factors are fixed at one in both groups to represent the equality of variance for latent response variables underlying u1 and u2. The statement in curly brackets in the group-specific MODEL command specifies that the scale factors are fixed at one. The variance contribution from the E factor is a remainder obtained by subtracting the variance contributions of the A and C factors from the unit variance of the latent response variables underlying u1 and u2. These are obtained as part of the STANDARDIZED option of the OUTPUT command.

The default estimator for this type of analysis is a robust weighted least squares estimator. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. With maximum likelihood and categorical factor indicators, numerical integration is required. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. An explanation of the other commands can be found in Examples 5.1, 5.14, and 5.18.
