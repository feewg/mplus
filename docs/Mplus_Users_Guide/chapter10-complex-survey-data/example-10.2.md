# EXAMPLE 10.2: Two-Level Mixture Regression for a Continuous Dependent Variable with a Between-Level Categorical Latent Variable

## Description

This example shows a two-level mixture regression model for a continuous dependent variable. This example is similar to Example 10.1 except that the categorical latent variable is a between-level variable. This means that latent classes are formed for clusters (between-level units) not individuals. In addition, the regression slopes are random not fixed. In the within part of the model, the random intercept is shown in the picture as a filled circle at the end of the arrow pointing to y. It is referred to as y on the between level. The random slopes are shown as filled circles on the arrows from x1 and x2 to y. They are referred to as s1 and s2 on the between level.

The random effects y, s1, and s2 are shown in circles in the between part of the model because they are continuous latent variables that vary across clusters (between-level units). In the between part of the model, the arrows from cb to y, s1, and s2 indicate that the intercept of y and the means of s1 and s2 vary across the classes of cb. In addition, the random intercept y and the categorical latent variable cb are regressed on a cluster-level covariate w. The random slopes s1 and s2 have no within-class variance. Only their means vary across the classes of cb. This implies that the distributions of s1 and s2 can be thought of as non-parametric representations rather than normal distributions (Aitkin, 1999; Muthén & Asparouhov, 2009). Another example of a non-parametric representation of a latent variable distribution is shown in Example 7.26.

## Mplus Input

```mplus
TITLE: this is an example of a two-level mixture
  regression for a continuous dependent
  variable with a between-level categorical
  latent variable
DATA: FILE = ex10.2.dat;
VARIABLE: NAMES ARE y x1 x2 w dummy clus;
  USEVARIABLES = y-w;
  CLASSES = cb(2);
  WITHIN = x1 x2;
  BETWEEN = cb w;
  CLUSTER = clus;
ANALYSIS: TYPE = TWOLEVEL MIXTURE RANDOM;
  PROCESSORS = 2;
MODEL:
  %WITHIN%
  %OVERALL%
  s1 | y ON x1;
  s2 | y ON x2;
  %BETWEEN%
  %OVERALL%
  cb y ON w; s1-s2@0;
  %cb#1%
  [s1 s2];
  %cb#2%
  [s1 s2];
```

## Explanation

The BETWEEN option is used to identify the variables in the data set that are measured on the cluster level and modeled only on the between level and to identify between-level categorical latent variables. In this example, the categorical latent variable cb is a between-level variable. Between-level classes consist of clusters such as schools instead of individuals. The PROCESSORS option of the ANALYSIS command is used to specify that 2 processors will be used in the analysis for parallel computations.

In the overall part of the within part of the model, the | symbol is used in conjunction with TYPE=RANDOM to name and define the random slope variables in the model. The name on the left-hand side of the | symbol names the random slope variable. The statement on the right-hand side of the | symbol defines the random slope variable. Random slopes are defined using the ON option. The random slopes s1 and s2 are defined by the linear regressions of the dependent variable y on the individual-level covariates x1 and x2. The within-level residual variance in the regression of y on x is estimated as the default.

In the overall part of the between part of the model, the ON statement describes the multinomial logistic regression of the categorical latent variable cb on the cluster-level covariate w and the linear regression of the random intercept y on the cluster-level covariate w. The variances of the random slopes s1 and s2 are fixed at zero. In the class-specific parts of the between part of the model, the means of the random slopes are specified to vary across the between-level classes of cb. The intercept of the random intercept y varies across the between-level classes of cb as the default.

The default estimator for this type of analysis is maximum likelihood with robust standard errors using a numerical integration algorithm. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, one dimension of integration is used with a total of 15 integration points. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 10.1.

Following is an alternative specification of the MODEL command that is simpler when the model has many covariates and when the variances of the random slopes are zero:

```mplus
MODEL:
  %WITHIN%
  %OVERALL%
  y ON x1 x2;
  %cb#1%
  y ON x1 x2;
  %cb#2%
  y ON x1 x2;
  %BETWEEN%
  %OVERALL%
  cb ON w;
  y ON w;
```

In this specification, instead of the | statements, the random slopes are represented as class-varying slopes in the class-specific parts of the within part of the model. This specification makes it unnecessary to refer to the means and variances of the random slopes in the between part of the model.
