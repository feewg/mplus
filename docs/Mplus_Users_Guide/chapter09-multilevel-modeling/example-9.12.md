# EXAMPLE 9.12: Two-level growth model for a continuous outcome (three-level analysis)

## Description

This example demonstrates a two-level growth model for a continuous outcome, which corresponds to a three-level analysis in conventional multilevel modeling (time within individual within cluster). The model includes within and between growth factors with covariates at both levels.

## Mplus Input

```mplus
TITLE: this is an example of a two-level growth
  model for a continuous outcome (three-
  level analysis)
DATA: FILE IS ex9.12.dat;
VARIABLE: NAMES ARE y1-y4 x w clus;
  WITHIN = x;
  BETWEEN = w;
  CLUSTER = clus;
ANALYSIS: TYPE = TWOLEVEL;
MODEL:
  %WITHIN%
  iw sw | y1@0 y2@1 y3@2 y4@3;
  y1-y4 (1);
  iw sw ON x;
  %BETWEEN%
  ib sb | y1@0 y2@1 y3@2 y4@3;
  y1-y4@0;
  ib sb ON w;
```

## Explanation

In this two-level growth model for a continuous outcome (three-level analysis), time is the first level, individual is the second level, and cluster is the third level. In Mplus, this is handled as a two-level model because Mplus takes a multivariate approach to repeated measures.

**Within Part (Individual Level):**
In the within part, filled circles at the end of arrows from growth factors iw and sw to y1-y4 represent random intercepts referred to as y1-y4 in the between part.

Growth model specification:
- iw sw | y1@0 y2@1 y3@2 y4@3: Defines intercept (iw) and slope (sw) growth factors
- Time scores are fixed at 0, 1, 2, and 3 for linear growth with equidistant time points
- Zero time score at time point one defines the intercept as initial status
- y1-y4 (1): Residual variances constrained to be equal over time
- iw sw ON x: Growth factors regressed on individual-level covariate x

Default settings:
- Coefficients of intercept growth factor are fixed at one
- Residual covariances of outcome variables are fixed at zero
- Residual variances of growth factors are free to be estimated
- Residuals of growth factors are correlated as the default

**Between Part (Cluster Level):**
In the between part, the random intercepts are shown in circles because they are continuous latent variables that vary across clusters.

Growth model specification:
- ib sb | y1@0 y2@1 y3@2 y4@3: Defines between intercept (ib) and slope (sb) growth factors
- y1-y4@0: Residual variances fixed at zero (conventional multilevel growth modeling)
- ib sb ON w: Growth factors regressed on cluster-level covariate w

Default settings:
- Residual variances and covariance of growth factors are free to be estimated
- Intercepts of growth factors are estimated as the default

**Parameterization:**
- Intercepts of outcome variables at the four time points are fixed at zero
- The default estimator is maximum likelihood with robust standard errors

**Note:** The residual variances of outcome variables on the between level can be estimated instead of being fixed at zero.
