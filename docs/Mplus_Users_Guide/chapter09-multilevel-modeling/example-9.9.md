# EXAMPLE 9.9: Two-level SEM with categorical factor indicators on the within level and cluster-level continuous observed and random intercept factor indicators on the between level

## Description

This example demonstrates a two-level SEM where the within level has categorical factor indicators forming two factors, and the between level has both random intercept factors (from the within indicators) and observed cluster-level continuous variables forming a second factor. Weighted least squares estimation is used.

## Mplus Input

```mplus
TITLE: this is an example of a two-level SEM with
  categorical factor indicators on the
  within level and cluster-level continuous
  observed and random intercept factor
  indicators on the between level
DATA: FILE IS ex9.9.dat;
VARIABLE: NAMES ARE u1-u6 y1-y4 x1 x2 w clus;
  CATEGORICAL = u1-u6;
  WITHIN = x1 x2;
  BETWEEN = w y1-y4;
  CLUSTER IS clus;
ANALYSIS: TYPE IS TWOLEVEL;
  ESTIMATOR = WLSMV;
MODEL:
  %WITHIN%
  fw1 BY u1-u3;
  fw2 BY u4-u6;
  fw1 fw2 ON x1 x2;
  %BETWEEN%
  fb BY u1-u6;
  f BY y1-y4;
  fb ON w f;
  f ON w;
SAVEDATA: SWMATRIX = ex9.9sw.dat;
```

## Explanation

In this two-level SEM model with categorical factor indicators on the within level:

**Within Level:**
The within-level factor indicators are categorical. In the within part:
- Filled circles at the end of arrows from fw1 to u1, u2, u3 and from fw2 to u4, u5, u6 represent random intercepts
- These random intercepts are referred to as u1-u6 in the between part

Model specification:
- fw1 is measured by u1, u2, and u3
- fw2 is measured by u4, u5, and u6
- The metric of factors is set by fixing the first factor loading for each factor to one
- Residual variances of latent response variables are fixed at one (Theta parameterization)
- fw1 and fw2 are regressed on individual-level covariates x1 and x2

**Between Level:**
In the between part, the random intercepts are shown in circles because they are continuous latent variables that vary across clusters. The random intercepts are indicators of the between factor fb. This example illustrates the common finding of fewer between factors than within factors for the same set of factor indicators.

Model specification:
- fb is measured by random intercepts u1-u6
- f is measured by cluster-level observed continuous variables y1-y4
- fb is regressed on w and f
- f is regressed on w

**Estimator:**
By specifying ESTIMATOR=WLSMV, a robust weighted least squares estimator using a diagonal weight matrix is used. The default would be maximum likelihood with robust standard errors using numerical integration (which would require 3,375 integration points in this case). For models with many dimensions of integration and categorical outcomes, weighted least squares may improve computational speed.

**SAVEDATA:**
The SWMATRIX option saves within- and between-level sample statistics and their asymptotic covariance matrix for use in subsequent analyses to reduce computational time.
