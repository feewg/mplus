# EXAMPLE 9.3: Two-level path analysis with a continuous and a categorical dependent variable

## Description

This example demonstrates a two-level path analysis model with a continuous mediating variable and a binary or ordered categorical dependent variable. The within part describes the linear regression of the continuous variable on covariates and the logistic regression of the categorical variable on the mediator and a covariate. The between part describes the linear regressions of the random intercepts on a cluster-level covariate.

## Mplus Input

```mplus
TITLE: this is an example of a two-level path
  analysis with a continuous and a
  categorical dependent variable
DATA: FILE IS ex9.3.dat;
VARIABLE: NAMES ARE u y x1 x2 w clus;
  CATEGORICAL = u;
  WITHIN = x1 x2;
  BETWEEN = w;
  CLUSTER IS clus;
ANALYSIS: TYPE = TWOLEVEL;
  ALGORITHM = INTEGRATION;
MODEL:
  %WITHIN%
  y ON x1 x2;
  u ON y x2;
  %BETWEEN%
  y u ON w;
OUTPUT: TECH1 TECH8;
```

## Explanation

In this example, the two-level path analysis model is estimated where:
- The mediating variable y is continuous
- The dependent variable u is binary or ordered categorical (ordinal)

**Within Part:**
The within part describes:
- The linear regression of y on individual-level covariates x1 and x2
- The logistic regression of u on the mediating variable y and individual-level covariate x2

The intercepts in both regressions are random effects that vary across clusters, while the slopes are fixed effects that do not vary across clusters. In the within part, filled circles at the end of arrows from x1 to y and x2 to u represent random intercepts referred to as y and u in the between part.

**Between Part:**
In the between part, the random intercepts are shown in circles because they are continuous latent variables that vary across clusters. The between part describes the linear regressions of the random intercepts y and u on the cluster-level covariate w.

**Key Features:**
- The CATEGORICAL option specifies which dependent variables are treated as binary or ordered categorical
- ALGORITHM=INTEGRATION specifies maximum likelihood estimation with robust standard errors using numerical integration
- Two dimensions of integration are used with 225 integration points
- The residual variance in the linear regression of y is estimated as the default
- There is no residual variance in the logistic regression because u is categorical
- The residual covariance between y and u is free to be estimated as the default

**Note:** The dependent variable u could alternatively be an unordered categorical (nominal) variable using the NOMINAL option, which would estimate a multinomial logistic regression.
