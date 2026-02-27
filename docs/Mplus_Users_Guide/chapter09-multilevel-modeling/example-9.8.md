# EXAMPLE 9.8: Two-level CFA with continuous factor indicators, covariates, and random slopes

## Description

This example extends Example 9.6 by adding random slopes in addition to random intercepts. The random slopes are regressed on a cluster-level covariate. The model demonstrates how to include random slopes for factor regressions in a two-level CFA.

## Mplus Input

```mplus
TITLE: this is an example of a two-level CFA with
  continuous factor indicators, covariates,
  and random slopes
DATA: FILE IS ex9.8.dat;
VARIABLE: NAMES ARE y1-y4 x1 x2 w clus;
  CLUSTER = clus;
  WITHIN = x1 x2;
  BETWEEN = w;
ANALYSIS: TYPE = TWOLEVEL RANDOM;
MODEL:
  %WITHIN%
  fw BY y1-y4;
  s1 | fw ON x1;
  s2 | fw ON x2;
  %BETWEEN%
  fb BY y1-y4;
  y1-y4@0;
  fb s1 s2 ON w;
```

## Explanation

The difference between this example and Example 9.6 is that the model has random slopes in addition to random intercepts, and the random slopes are regressed on a cluster-level covariate.

**Random Slopes:**
In the within part, filled circles on the arrows from x1 and x2 to fw represent random slopes referred to as s1 and s2 in the between part. In the between part, the random slopes are shown in circles because they are latent variables that vary across clusters.

**Within Part:**
- fw is measured by y1-y4
- s1 | fw ON x1: Random slope s1 defined by the linear regression of factor fw on individual-level covariate x1
- s2 | fw ON x2: Random slope s2 defined by the linear regression of factor fw on individual-level covariate x2
- The within-level residual variance of fw is estimated as the default

The | symbol is used in conjunction with TYPE=RANDOM to name and define random slope variables. The name on the left-hand side names the random slope variable, and the statement on the right-hand side defines it using the ON option.

**Between Part:**
- fb is measured by random intercepts y1-y4
- y1-y4@0: Residual variances of factor indicators are set to zero
- fb s1 s2 ON w: Linear regressions of fb, s1, and s2 on cluster-level covariate w
- The residual variances of fb, s1, and s2 are estimated as the default
- The residuals are not correlated as the default

**Key Feature:**
This model allows the regression coefficients of fw on x1 and x2 to vary across clusters (random slopes), and these random slopes can be predicted by cluster-level covariates.

**Note:** The default estimator is maximum likelihood with robust standard errors.
