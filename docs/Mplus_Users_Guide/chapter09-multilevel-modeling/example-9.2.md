# EXAMPLE 9.2: Two-level regression analysis for a continuous dependent variable with a random slope

## Description

This example extends Example 9.1 by adding a random slope to the two-level regression model. The model has both a random intercept and a random slope. Three versions are shown:

1. **Part 1**: Two-level regression with random slope and observed covariate
2. **Part 2**: Plotting cross-level interactions
3. **Part 3**: Using a latent covariate

## Mplus Input - Part 1: Random Slope with Observed Covariate

```mplus
TITLE: this is an example of a two-level
  regression analysis for a continuous
  dependent variable with a random slope and
  an observed covariate
DATA: FILE = ex9.2a.dat;
VARIABLE: NAMES = y x w xm clus;
  WITHIN = x;
  BETWEEN = w xm;
  CLUSTER = clus;
DEFINE: CENTER x (GROUPMEAN);
ANALYSIS: TYPE = TWOLEVEL RANDOM;
MODEL:
  %WITHIN%
  s | y ON x;
  %BETWEEN%
  y s ON w xm;
  y WITH s;
```

## Mplus Input - Part 2: Plotting Cross-Level Interaction

```mplus
MODEL: %WITHIN%
  s | y ON x;
  %BETWEEN%
  y ON w xm;
  [s] (gam0);
  s ON w (gam1)
     xm;
  y WITH s;
MODEL CONSTRAINT:
  PLOT(ylow yhigh);
  LOOP(level1,-3,3,0.01);
  ylow = (gam0+gam1*(-1))*level1;
  yhigh = (gam0+gam1*1)*level1;
PLOT: TYPE = PLOT2;
```

## Mplus Input - Part 3: Random Slope with Latent Covariate

```mplus
TITLE: this is an example of a two-level
  regression analysis for a continuous
  dependent variable with a random slope and
  a latent covariate
DATA: FILE = ex9.2c.dat;
VARIABLE: NAMES = y x w clus;
  BETWEEN = w;
  CLUSTER = clus;
ANALYSIS: TYPE = TWOLEVEL RANDOM;
MODEL:
  %WITHIN%
  s | y ON x;
  %BETWEEN%
  y s ON w x;
  y WITH s;
```

## Explanation

**Part 1 - Random Slope with Observed Covariate:**

The difference between this example and Example 9.1 is that the model has both a random intercept and a random slope. In the within part of the model, the filled circle at the end of the arrow from x to y represents a random intercept referred to as y in the between part. The filled circle on the arrow from x to y represents a random slope referred to as s in the between part.

In the between part of the model, the random intercept and random slope are shown in circles because they are continuous latent variables that vary across clusters. The observed cluster-level covariate xm takes the value of the mean of x for each cluster.

The individual-level covariate x is centered using the cluster means for x. This is recommended when a random slope is estimated (Raudenbush & Bryk, 2002, p. 143).

The | symbol is used in conjunction with TYPE=RANDOM to name and define the random slope variables. The random slope s is defined by the linear regression of the dependent variable y on the observed individual-level covariate x.

**Part 2 - Plotting Cross-Level Interaction:**

The MODEL CONSTRAINT command with the LOOP and PLOT options creates plots of cross-level interaction effects. In this example, the cluster-level covariate w moderates the influence of the within-level covariate x on y.

The LOOP option specifies:
- Variable name for x-axis: level1
- Lower value: -3
- Upper value: 3
- Increment: 0.01

Ylow and yhigh use values -1 and 1 of the cluster-level covariate w to represent minus one and plus one standard deviation from the mean for w. Using TYPE=PLOT2 in the PLOT command, the plots can be viewed by choosing Loop plots from the Plot menu.

**Part 3 - Random Slope with Latent Covariate:**

The difference between this part and Part 1 is that the covariate x is latent instead of observed on the between level. This is achieved by not mentioning the observed covariate x on the WITHIN statement in the VARIABLE command. When a random slope is estimated, the observed covariate x is used on the within level and the latent variable covariate is used on the between level.
