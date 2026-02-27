# EXAMPLE 9.6: Two-level CFA with continuous factor indicators and covariates

## Description

This example demonstrates a two-level confirmatory factor analysis (CFA) model with continuous factor indicators, a between factor, and covariates. The within part has a factor fw measured by y1-y4 with covariates x1 and x2. The between part has a factor fb measured by the random intercepts of the factor indicators.

## Mplus Input

```mplus
TITLE: this is an example of a two-level CFA with
  continuous factor indicators and
  covariates
DATA: FILE IS ex9.6.dat;
VARIABLE: NAMES ARE y1-y4 x1 x2 w clus;
  WITHIN = x1 x2;
  BETWEEN = w;
  CLUSTER = clus;
ANALYSIS: TYPE = TWOLEVEL;
MODEL:
  %WITHIN%
  fw BY y1-y4;
  fw ON x1 x2;
  %BETWEEN%
  fb BY y1-y4;
  y1-y4@0;
  fb ON w;
```

## Explanation

In this two-level CFA model:

**Within Part:**
In the within part, filled circles at the end of arrows from the within factor fw to y1, y2, y3, and y4 represent random intercepts referred to as y1, y2, y3, and y4 in the between part.

- The BY statement specifies that fw is measured by y1, y2, y3, and y4
- The metric of the factor is set automatically by fixing the first factor loading to one
- The residual variances of factor indicators are estimated and residuals are not correlated as the default
- The ON statement describes the linear regression of fw on individual-level covariates x1 and x2
- The residual variance of the factor is estimated as the default
- The intercept of the factor is fixed at zero

**Between Part:**
In the between part, the random intercepts are shown in circles because they are continuous latent variables that vary across clusters. They are indicators of the between factor fb.

- The BY statement specifies that fb is measured by the random intercepts y1, y2, y3, and y4
- The metric of the factor is set automatically by fixing the first factor loading to one
- The residual variances of factor indicators are set to zero (y1-y4@0)
- The ON statement describes the regression of fb on cluster-level covariate w
- The residual variance of the factor is estimated as the default
- The intercept of the factor is fixed at zero as the default

**Key Feature:**
If factor loadings are constrained to be equal across the within and between levels, this implies a model where the regression of the within factor on x1 and x2 has a random intercept varying across the clusters.

**Note:** The default estimator is maximum likelihood with robust standard errors.
