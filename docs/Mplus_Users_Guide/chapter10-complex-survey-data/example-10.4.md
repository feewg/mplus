# EXAMPLE 10.4: Two-Level CFA Mixture Model with Continuous Factor Indicators

## Description

This example shows a two-level confirmatory factor analysis (CFA) mixture model with continuous factor indicators. This example is the same as Example 7.17 except that it has been extended to the multilevel framework. In the within part of the model, the filled circles at the end of the arrows from the within factor fw to y1, y2, y3, y4, and y5 represent random intercepts that vary across clusters. The filled circle on the circle containing c represents the random mean of c that varies across clusters. In the between part of the model, the random intercepts are referred to as y1, y2, y3, y4, and y5 and the random mean is referred to as c#1 where they are shown in circles because they are continuous latent variables that vary across clusters.

In the between part of the model, the random intercepts are indicators of the between factor fb. In this model, the residual variances for the factor indicators in the between part of the model are zero. If factor loadings are constrained to be equal across the within and the between levels, this implies a model where the mean of the within factor varies across the clusters. The between part of the model specifies that the random mean c#1 of the categorical latent variable c and the between factor fb are uncorrelated. Other modeling possibilities are for fb and c#1 to be correlated, for fb to be regressed on c#1, or for c#1 to be regressed on fb. Regressing c#1 on fb, however, leads to an internally inconsistent model where the mean of fb is influenced by c at the same time as c#1 is regressed on fb, leading to a reciprocal interaction.

## Mplus Input

```mplus
TITLE: this is an example of a two-level CFA
  mixture model with continuous factor
  indicators
DATA: FILE IS ex10.4.dat;
VARIABLE: NAMES ARE y1-y5 class clus;
  USEVARIABLES = y1-y5;
  CLASSES = c (2);
  CLUSTER = clus;
ANALYSIS: TYPE = TWOLEVEL MIXTURE;
  STARTS = 0;
MODEL:
  %WITHIN%
  %OVERALL%
  fw BY y1-y5;
  %BETWEEN%
  %OVERALL%
  fb BY y1-y5;
  c#1*1;
  %c#1%
  [fb*2];
OUTPUT: TECH1 TECH8;
```

## Explanation

In the overall part of the within part of the model, the BY statement specifies that fw is measured by the factor indicators y1, y2, y3, y4, and y5. The metric of the factor is set automatically by the program by fixing the first factor loading to one. This option can be overridden. The residual variances of the factor indicators are estimated and the residuals are not correlated as the default. The variance of the factor is estimated as the default.

In the overall part of the between part of the model, the BY statement specifies that fb is measured by the random intercepts y1, y2, y3, y4, and y5. The residual variances of the random intercepts are fixed at zero as the default because they are often very small and each residual variance requires one dimension of numerical integration. The variance of fb is estimated as the default. A starting value of one is given to the variance of the random mean of the categorical latent variable c referred to as c#1. In the model for class 1 in the between part of the model, the mean of fb is given a starting value of 2.

The default estimator for this type of analysis is maximum likelihood with robust standard errors using a numerical integration algorithm. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, two dimensions of integration are used with a total of 225 integration points. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 10.1.
