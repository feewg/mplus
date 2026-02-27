# EXAMPLE 9.10: Two-level SEM with continuous factor indicators and a random slope for a factor

## Description

This example demonstrates a two-level SEM with continuous factor indicators where there is a random slope for the regression of a dependent variable on a within-level factor. This represents a more complex two-level model where factor effects can vary across clusters.

## Mplus Input

```mplus
TITLE: this is an example of a two-level SEM with
  continuous factor indicators and a random
  slope for a factor
DATA: FILE IS ex9.10.dat;
VARIABLE: NAMES ARE y1-y5 w clus;
  BETWEEN = w;
  CLUSTER = clus;
ANALYSIS: TYPE = TWOLEVEL RANDOM;
  ALGORITHM = INTEGRATION;
  INTEGRATION = 10;
MODEL:
  %WITHIN%
  fw BY y1-y4;
  s | y5 ON fw;
  %BETWEEN%
  fb BY y1-y4;
  y1-y4@0;
  y5 s ON fb w;
OUTPUT: TECH1 TECH8;
```

## Explanation

In this two-level SEM with continuous factor indicators:

**Within Part:**
In the within part:
- Filled circles at the end of arrows from fw to y1-y4 represent random intercepts
- A filled circle at the end of the arrow from fw to y5 represents a random intercept
- A filled circle on the arrow from fw to y5 represents a random slope s

Model specification:
- fw is measured by y1, y2, y3, and y4
- The metric of the factor is set by fixing the first factor loading to one
- The residual variances of factor indicators are estimated and residuals are uncorrelated as the default
- The variance of the factor is estimated as the default
- s | y5 ON fw: The random slope s is defined by the linear regression of y5 on the within factor fw

**Between Part:**
In the between part, the random intercepts and random slope are shown in circles because they are continuous latent variables that vary across clusters.

Model specification:
- fb is measured by random intercepts y1-y4
- y1-y4@0: Residual variances of factor indicators are fixed at zero
- y5 s ON fb w: Linear regressions of random intercept y5 and random slope s on fb and cluster-level covariate w
- The intercepts and residual variances of y5 and s are estimated and their residuals are uncorrelated as the default

**Analysis Settings:**
- TYPE=TWOLEVEL RANDOM: Estimates a multilevel model with random intercepts and random slopes
- ALGORITHM=INTEGRATION: Uses maximum likelihood with robust standard errors using numerical integration
- INTEGRATION = 10: Changes the number of integration points per dimension from the default of 15 to 10
- Four dimensions of integration are used with a total of 10,000 integration points

**Key Feature:**
This model allows the effect of the within-level factor fw on y5 to vary across clusters (random slope s), and this random slope can be predicted by between-level factors and covariates.
