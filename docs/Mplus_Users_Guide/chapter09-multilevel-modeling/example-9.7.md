# EXAMPLE 9.7: Two-level CFA with categorical factor indicators and covariates

## Description

This example extends Example 9.6 by using binary or ordered categorical (ordinal) factor indicators instead of continuous variables. The model demonstrates two-level CFA with categorical outcomes.

## Mplus Input

```mplus
TITLE: this is an example of a two-level CFA with
  categorical factor indicators and
  covariates
DATA: FILE IS ex9.7.dat;
VARIABLE: NAMES ARE u1-u4 x1 x2 w clus;
  CATEGORICAL = u1-u4;
  WITHIN = x1 x2;
  BETWEEN = w;
  CLUSTER = clus;
  MISSING = ALL (999);
ANALYSIS: TYPE = TWOLEVEL;
MODEL:
  %WITHIN%
  fw BY u1-u4;
  fw ON x1 x2;
  %BETWEEN%
  fb BY u1-u4;
  fb ON w;
OUTPUT: TECH1 TECH8;
```

## Explanation

The difference between this example and Example 9.6 is that the factor indicators are binary or ordered categorical (ordinal) variables instead of continuous variables.

**Key Features:**

**CATEGORICAL Option:**
The CATEGORICAL option specifies which dependent variables are treated as binary or ordered categorical (ordinal) variables. In this example, all four factor indicators (u1-u4) are categorical. The program determines the number of categories for each indicator.

**Estimator:**
The default estimator for this type of analysis is maximum likelihood with robust standard errors using a numerical integration algorithm. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and sample size increase. In this example, two dimensions of integration are used with 225 integration points.

**Within Part:**
- fw is measured by categorical indicators u1-u4
- fw is regressed on individual-level covariates x1 and x2
- Residual variances of latent response variables are fixed at one (Theta parameterization)

**Between Part:**
- fb is measured by random intercepts u1-u4
- fb is regressed on cluster-level covariate w
- The residual variances of random intercepts of categorical factor indicators are fixed at zero as the default (residual variances of random intercepts are often very small and require one dimension of numerical integration each)

**Alternative:**
Weighted least squares estimation of between-level residual variances does not require numerical integration in estimating the model. The ESTIMATOR option can be used to select WLSMV or WLSM.

**Note:** Missing data are declared using MISSING = ALL (999).
