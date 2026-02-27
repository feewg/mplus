# EXAMPLE 9.5: Two-level path analysis with continuous dependent variables and random slopes

## Description

This example extends Example 9.3 by including two random intercepts and two random slopes instead of two random intercepts and two fixed slopes. The dependent variables are continuous.

## Mplus Input

```mplus
TITLE: this is an example of two-level path
  analysis with continuous dependent
  variables and random slopes
DATA: FILE IS ex9.5.dat;
VARIABLE: NAMES ARE y1 y2 x1 x2 w clus;
  WITHIN = x1 x2;
  BETWEEN = w;
  CLUSTER IS clus;
ANALYSIS: TYPE = TWOLEVEL RANDOM;
MODEL:
  %WITHIN%
  s2 | y2 ON y1;
  y2 ON x2;
  s1 | y1 ON x2;
  y1 ON x1;
  %BETWEEN%
  y1 y2 s1 s2 ON w;
OUTPUT: TECH1 TECH8;
```

## Explanation

This example demonstrates a two-level path analysis model with continuous dependent variables where:
- y1 is a mediating variable
- y2 is the dependent variable
- x1 and x2 are individual-level covariates
- w is a cluster-level covariate

**Random Slopes:**
In the within part:
- The filled circle on the arrow from x2 to y1 represents a random slope referred to as s1 in the between part
- The filled circle on the arrow from y1 to y2 represents a random slope referred to as s2 in the between part

In the between part, the random slopes s1 and s2 are shown in circles because they are continuous latent variables that vary across clusters.

**Model Specification:**
The | symbol is used in conjunction with TYPE=RANDOM to name and define random slope variables:
- s2 is defined by the linear regression of y2 on y1 (mediation effect)
- s1 is defined by the linear regression of y1 on x2

**Within Part:**
- s2 | y2 ON y1: Random slope for y2 regressed on y1
- y2 ON x2: Fixed effect regression of y2 on x2
- s1 | y1 ON x2: Random slope for y1 regressed on x2
- y1 ON x1: Fixed effect regression of y1 on x1

**Between Part:**
The ON statement describes the linear regressions of random intercepts y1 and y2 and random slopes s1 and s2 on the cluster-level covariate w.

**Default Settings:**
- The intercepts and residual variances of y1, y2, s2, and s1 are estimated as the default
- The residual covariances between y1, y2, s2, and s1 are fixed at zero as the default (can be overridden)
- The within-level residual variances of y1 and y2 are estimated as the default

**Note:** The default estimator is maximum likelihood with robust standard errors. The ESTIMATOR option can be used to select a different estimator.
