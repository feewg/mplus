# EXAMPLE 5.31: BAYESIAN BI-FACTOR CFA WITH TWO ITEMS LOADING ON ONLY THE GENERAL FACTOR AND CROSS-LOADINGS WITH ZERO-MEAN AND SMALL-VARIANCE PRIORS

## Description

This example demonstrates a bi-factor CFA with two items loading on only the general factor and cross-loadings with zero-mean and small-variance priors using the Bayes estimator. This is a Bayesian structural equation model (BSEM; Muthén & Asparouhov, 2012).

## Mplus Input

```mplus
TITLE: this is an example of a Bayesian bi-factor
CFA with two items loading on only the
general factor and cross-loadings with
zero-mean and small-variance priors
DATA: FILE = ex5.31.dat;
VARIABLE: NAMES = y1-y10;
ANALYSIS: ESTIMATOR = BAYES;
PROCESSORS = 2;
MODEL: fg BY y1-y10*;
fg@1;
f1 BY y1-y4
y5-y10 (f1xlam5-f1xlam10);
f2 BY y5-y8
y1-y4 y9-y10(f2xlam1-f2xlam6);
fg WITH f1-f2@0;
MODEL PRIORS:
f1xlam5-f2xlam6~N(0,0.01);
PLOT: TYPE = PLOT2;
```

## Explanation

In this example, a bi-factor CFA with two items loading on only the general factor and cross-loadings with zero-mean and small-variance priors is carried out using the Bayes estimator. This is a Bayesian structural equation model (BSEM; Muthén & Asparouhov, 2012). By specifying ESTIMATOR=BAYES, a Bayesian analysis will be carried out. In Bayesian estimation, the default is to use two independent Markov chain Monte Carlo (MCMC) chains. If multiple processors are available, using PROCESSORS=2 will speed up computations.

In the MODEL command, the first BY statement specifies that the general factor, fg, is measured by the continuous factor indicators y1 through y10. The asterisk (*) frees the first factor loading which is fixed at one as the default to define the metric of the factor. Instead the metric of the factor is defined by fixing the factor variance at one. The second and third BY statements specify that the specific factors, f1 and f2, are measured by y1 through y10. The first factor loadings are fixed at one to set the metric of the factors. The first line of each BY statement shows the major loadings for each factor. The second line shows the cross-loadings which are assigned labels. For f1, labels are assigned to cross-loadings for y5 through y10. For f2, labels are assigned to cross-loadings for y1 through y4, y9, and y10. The WITH statement specifies that the general and specific factors are not correlated. The intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. In MODEL PRIORS, the labels assigned in the MODEL command are used to assign zero-mean and small-variance priors to the cross-loadings. By specifying TYPE=PLOT2 in the PLOT command, the following plots are available: posterior parameter distributions, posterior parameter trace plots, autocorrelation plots, posterior predictive checking scatterplots, and posterior predictive checking distribution plots. An explanation of the other commands can be found in Example 5.1.
