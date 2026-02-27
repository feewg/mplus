# EXAMPLE 9.4: Two-level path analysis with a continuous, a categorical, and a cluster-level observed dependent variable

## Description

This example extends Example 9.3 by adding an observed cluster-level mediating variable z on the between level. The model is estimated using weighted least squares estimation instead of maximum likelihood.

## Mplus Input

```mplus
TITLE: this is an example of a two-level path
  analysis with a continuous, a categorical,
  and a cluster-level observed dependent
  variable
DATA: FILE = ex9.4.dat;
VARIABLE: NAMES ARE u z y x w clus;
  CATEGORICAL = u;
  WITHIN = x;
  BETWEEN = w z;
  CLUSTER = clus;
ANALYSIS: TYPE = TWOLEVEL;
  ESTIMATOR = WLSM;
MODEL:
  %WITHIN%
  u ON y x;
  y ON x;
  %BETWEEN%
  u ON w y z;
  y ON w;
  z ON w;
  y WITH z;
OUTPUT: TECH1;
```

## Explanation

The difference between this example and Example 9.3 is that the between part of the model has:
- An observed cluster-level mediating variable z
- A latent mediating variable y that is a random intercept

**Estimator:**
By specifying ESTIMATOR=WLSM, a robust weighted least squares estimator using a diagonal weight matrix is used (Asparouhov & Muthén, 2007).

**Within Part:**
- The first ON statement describes the logistic regression of u on mediator y and individual-level covariate x
- The second ON statement describes the linear regression of y on x

**Between Part:**
- The first ON statement describes the linear regression of random intercept u on cluster-level covariate w, random intercept y, and observed cluster-level mediating variable z
- The second ON statement describes the linear regression of random intercept y on w
- The third ON statement describes the linear regression of observed cluster-level mediating variable z on w
- The WITH statement specifies that the residuals of y and z are correlated

**Key Features:**
- Categorical variable u is declared with the CATEGORICAL option
- Weighted least squares estimation is used instead of maximum likelihood
- The model includes both latent (random intercepts) and observed variables on the between level
