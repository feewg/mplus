# EXAMPLE 9.1: Two-level regression analysis for a continuous dependent variable with a random intercept

## Description

This example demonstrates a two-level regression model with a random intercept for a continuous dependent variable. The example shows two ways of treating the covariate x:

1. **First part**: Treating x as an observed variable (conventional multilevel regression)
2. **Second part**: Decomposing x into two latent variable parts (within and between components)

The within part of the model describes the regression of y on an observed covariate x where the intercept is a random effect that varies across clusters. The between part describes the linear regression of the random intercept on observed cluster-level covariates.

## Mplus Input - Part 1: Observed Covariate

```mplus
TITLE: this is an example of a two-level
  regression analysis for a continuous
  dependent variable with a random intercept
  and an observed covariate
DATA: FILE = ex9.1a.dat;
VARIABLE: NAMES = y x w xm clus;
  WITHIN = x;
  BETWEEN = w xm;
  CLUSTER = clus;
DEFINE: CENTER x (GRANDMEAN);
ANALYSIS: TYPE = TWOLEVEL;
MODEL:
  %WITHIN%
  y ON x;
  %BETWEEN%
  y ON w xm;
```

## Mplus Input - Part 2: Latent Covariate

```mplus
TITLE: this is an example of a two-level
  regression analysis for a continuous
  dependent variable with a random intercept
  and a latent covariate
DATA: FILE = ex9.1b.dat;
VARIABLE: NAMES = y x w clus;
  BETWEEN = w;
  CLUSTER = clus;
DEFINE: CENTER = x (GRANDMEAN);
ANALYSIS: TYPE = TWOLEVEL;
MODEL:
  %WITHIN%
  y ON x (gamma10);
  %BETWEEN%
  y ON w
  x (gamma01);
MODEL CONSTRAINT:
  NEW(betac);
  betac = gamma01 - gamma10;
```

## Explanation

**Part 1 - Observed Covariate:**

The within part of the model describes the regression of y on an observed covariate x where the intercept is a random effect that varies across the clusters. In the within part of the model, the filled circle at the end of the arrow from x to y represents a random intercept that is referred to as y in the between part of the model.

In the between part of the model, the random intercept is shown in a circle because it is a continuous latent variable that varies across clusters. The between part of the model describes the linear regression of the random intercept y on observed cluster-level covariates w and xm. The observed cluster-level covariate xm takes the value of the mean of x for each cluster.

The WITHIN option identifies variables measured on the individual level and modeled only on the within level. The BETWEEN option identifies variables measured on the cluster level and modeled only on the between level. Because y is not mentioned on the WITHIN statement, it is modeled on both the within and between levels. On the between level, it is a random intercept.

The DEFINE command centers x using the grand mean to facilitate interpretation of the results. By selecting TWOLEVEL in the ANALYSIS command, a multilevel model with random intercepts will be estimated.

**Part 2 - Latent Covariate:**

The difference between this part and the first part is that the covariate x is decomposed into two latent variable parts instead of being treated as an observed variable. The decomposition occurs when the covariate x is not mentioned on the WITHIN statement and is therefore modeled on both the within and between levels.

When a covariate is not mentioned on the WITHIN statement, it is decomposed into two uncorrelated latent variables:

$$x_{ij} = x_{wij} + x_{bj}$$

where i represents individual, j represents cluster, $x_{wij}$ is the latent variable covariate used on the within level, and $x_{bj}$ is the latent variable covariate used on the between level.

The decomposition can be viewed as an implicit, latent group-mean centering of the latent within-level covariate. The MODEL CONSTRAINT command introduces a new parameter called betac defined as the difference between gamma01 and gamma10. It corresponds to a "contextual effect" as described in Raudenbush and Bryk (2002).

Using a latent covariate may be advantageous when the observed cluster-mean covariate xm does not have sufficient reliability, resulting in biased estimation of the between-level slope (Asparouhov & Muthén, 2006b; Ludtke et al., 2008).
