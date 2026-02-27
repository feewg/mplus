# EXAMPLE 10.3: Two-Level Mixture Regression for a Continuous Dependent Variable with Between-Level Categorical Latent Class Indicators for a Between-Level Categorical Latent Variable

## Description

This example shows a two-level mixture regression model for a continuous dependent variable. This example is similar to Example 10.2 except that the between-level categorical latent variable has between-level categorical latent class indicators and the slopes are fixed. In the within part of the model, the random intercept is shown in the picture as a filled circle at the end of the arrow pointing to y. It is referred to as y on the between level.

The random intercept y is shown in a circle in the between part of the model because it is a continuous latent variable that varies across clusters (between-level units). In the between part of the model, the arrow from cb to y indicates that the intercept of y varies across the classes of cb. In addition, the random intercept y and the categorical latent variable cb are regressed on a cluster-level covariate w. The arrows from cb to u1, u2, u3, u4, u5, and u6 indicate that these variables are between-level categorical latent class indicators of the categorical latent variable cb.

## Mplus Input

```mplus
TITLE: this is an example of a two-level mixture
  regression for a continuous dependent
  variable with between-level categorical
  latent class indicators for a between-
  level categorical latent variable
DATA: FILE = ex10.3.dat;
VARIABLE: NAMES ARE u1-u6 y x1 x2 w dummy clus;
  USEVARIABLES = u1-w;
  CATEGORICAL = u1-u6;
  CLASSES = cb(2);
  WITHIN = x1 x2;
  BETWEEN = cb w u1-u6;
  CLUSTER = clus;
ANALYSIS: TYPE = TWOLEVEL MIXTURE;
  PROCESSORS = 2;
MODEL:
  %WITHIN%
  %OVERALL%
  y ON x1 x2;
  %BETWEEN%
  %OVERALL%
  cb ON w;
  y ON w;
OUTPUT: TECH1 TECH8;
```

## Explanation

In the overall part of the between part of the model, the first ON statement describes the multinomial logistic regression of the categorical latent variable cb on the cluster-level covariate w. The second ON statement describes the linear regression of the random intercept y on the cluster-level covariate w. The intercept of the random intercept y and the thresholds of the between-level latent class indicators u1, u2, u3, u4, u5, and u6 vary across the between-level classes of cb as the default.

The default estimator for this type of analysis is maximum likelihood with robust standard errors using a numerical integration algorithm. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, one dimension of integration is used with a total of 15 integration points. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Examples 10.1 and 10.2.
