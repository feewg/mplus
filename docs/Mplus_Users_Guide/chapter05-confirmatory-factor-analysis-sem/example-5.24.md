# EXAMPLE 5.24: EFA WITH COVARIATES (MIMIC) WITH CONTINUOUS FACTOR INDICATORS AND DIRECT EFFECTS

## Description

This example demonstrates an EFA with covariates (MIMIC) with continuous factor indicators and direct effects. This is an exploratory structural equation model (ESEM; Asparouhov & Muthén, 2009a).

## Mplus Input

```mplus
TITLE: this is an example of an EFA with
covariates (MIMIC) with continuous factor
indicators and direct effects
DATA: FILE IS ex5.24.dat;
VARIABLE: NAMES ARE y1-y8 x1 x2;
MODEL: f1-f2 BY y1-y8(*1);
f1-f2 ON x1-x2;
y1 ON x1;
y8 ON x2;
OUTPUT: TECH1;
```

## Explanation

In this example, the EFA with covariates (MIMIC) with continuous factor indicators and direct effects shown in the picture above is estimated. This is an exploratory structural equation model (ESEM; Asparouhov & Muthén, 2009a). The factors f1 and f2 are EFA factors which have the same factor indicators. Unlike CFA, no factor loadings are fixed at zero. Instead, the four restrictions on the factor loadings, factor variances, and factor covariances necessary for identification are imposed by rotating the factor loading matrix and fixing the factor residual variances at one.

In the MODEL command, the BY statement specifies that the factors f1 and f2 are measured by the continuous factor indicators y1 through y8. The label 1 following an asterisk (*) in parentheses following the BY statement is used to indicate that f1 and f2 are a set of EFA factors. When no rotation is specified using the ROTATION option of the ANALYSIS command, the default oblique GEOMIN rotation is used. The intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. The residual variances of the factors are fixed at one as the default. The residuals of the factors are correlated under the default oblique GEOMIN rotation. The first ON statement describes the linear regressions of f1 and f2 on the covariates x1 and x2. The second and third ON statements describe the linear regressions of y1 on x1 and y8 on x2. These regressions represent direct effects used to test for measurement non-invariance.

The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 5.1.
