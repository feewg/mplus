# EXAMPLE 5.27: MULTIPLE-GROUP EFA WITH CONTINUOUS FACTOR INDICATORS

## Description

This example demonstrates multiple-group EFA with continuous factor indicators with no measurement invariance. This is an exploratory structural equation model (ESEM; Asparouhov & Muthén, 2009a).

## Mplus Input

```mplus
TITLE: this is an example of multiple-group EFA
with continuous factor indicators with no
measurement invariance
DATA: FILE IS ex5.27.dat;
VARIABLE: NAMES ARE y1-y10 group;
GROUPING IS group (1 = g1 2 = g2);
MODEL: f1-f2 BY y1-y10 (*1);
[f1-f2@0];
MODEL g2: f1-f2 BY y1-y10 (*1);
[y1-y10];
OUTPUT: TECH1;
```

## Explanation

In this example, the multiple-group EFA with continuous indicators shown in the picture above is estimated. This is an exploratory structural equation model (ESEM; Asparouhov & Muthén, 2009a). The factors f1 and f2 are EFA factors which have the same factor indicators. Unlike CFA, no factor loadings are fixed at zero. Instead, for the first group the four restrictions on the factor loadings, factor variances, and factor covariances necessary for model identification are imposed by rotating the factor loading matrix and fixing the factor variances at one in all groups. The first model in this example imposes no equality constraints on the model parameters across the two groups. Four subsequent models impose varying degrees of invariance on the model parameters.

In the MODEL command, the BY statement specifies that the factors f1 and f2 are measured by the continuous factor indicators y1 through y10. The label 1 following an asterisk (*) in parentheses following the BY statement is used to indicate that f1 and f2 are a set of EFA factors. When no rotation is specified using the ROTATION option of the ANALYSIS command, the default oblique GEOMIN rotation is used. The intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. The variances of the factors are fixed at one in both groups. The factors are correlated under the default oblique GEOMIN rotation. The bracket statement specifies that the factor means are fixed at zero in both groups to override the default of the factor means being fixed at zero in the first group and being free in the other group.

In the group-specific MODEL command for g2, the BY statement relaxes the default equality constraint on the factor loading matrices in the two groups. The bracket statement relaxes the default equality constraint on the intercepts of the factor indicators y1 through y10 in the two groups. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 5.1

Following is the second part of the example where equality of factor loading matrices across the two groups is imposed. The variances of the factors are fixed at one in the first group and are free to be estimated in the other group.

```mplus
MODEL: f1-f2 BY y1-y10 (*1);
[f1-f2@0];
MODEL g2: [y1-y10];
```

Equality of factor loading matrices is accomplished by removing the BY statement from the group-specific MODEL command for g2. Equality of factor loading matrices is the default.

Following is the third part of the example where equality of factor loading matrices and intercepts of the factor indicators across the two groups is imposed.

```mplus
MODEL: f1-f2 by y1-y10 (*1);
```

Equality of factor indicator intercepts is accomplished by removing the bracket statement for y1 through y10 from the group-specific MODEL command for g2. Equality of factor indicator intercepts is the default. This specification is the default setting in multiple group analysis, specifying measurement invariance of the intercepts of the factor indicators and the factor loading matrices. The factor means are fixed at zero in the first group and are free to be estimated in the other group as the default.

Following is the fourth part of the example where equality of factor variances and the factor covariance is imposed in addition to measurement invariance of the intercepts and factor loading matrices.

```mplus
MODEL: f1-f2 by y1-y10 (*1);
f1 WITH f2 (1);
f1-f2@1;
```

In the MODEL command, the number one in parentheses following the WITH statement specifies that the covariance between f1 and f2 is held equal across the two groups. The default in multiple group EFA when factor loading matrices are held equal across groups is that the factor variances are fixed to one in the first group and are free to be estimated in the other group. The third statement in the MODEL command overrides this default by specifing that the factor variances are fixed at one in both groups.

Following is the fifth part of the example where in addition to equality of factor variances and the factor covariance, equality of the factor means is imposed in addition to measurement invariance of the intercepts and factor loading matrices.

```mplus
MODEL: f1-f2 by y1-y10 (*1);
f1 WITH f2 (1);
f1-f2@1;
[f1-f2@0];
```

The default in multiple group EFA is that the factor means are fixed to zero in the first group and are free to be estimated in the other groups. The bracket statement in the MODEL command specifies that the factor means are fixed at zero in both groups.
