# EXAMPLE 5.32: BAYESIAN MIMIC MODEL WITH CROSS-LOADINGS AND DIRECT EFFECTS WITH ZERO-MEAN AND SMALL-VARIANCE PRIORS

## Description

This example demonstrates a MIMIC model with cross-loadings and direct effects with zero-mean and small-variance priors using the Bayes estimator. This is a Bayesian structural equation model (BSEM; Muthén & Asparouhov, 2012).

## Mplus Input

```mplus
TITLE: this is an example of a Bayesian MIMIC
model with cross-loadings and direct
effects with zero-mean and small-variance
priors
DATA: FILE = ex5.32.dat;
VARIABLE: NAMES = y1-y6 x1-x3;
ANALYSIS: ESTIMATOR = BAYES;
PROCESSORS = 2;
MODEL: f1 BY y1-y3
y4-y6 (xload4-xload6);
f2 BY y4-y6
y1-y3 (xload1-xload3);
f1-f2 ON x1-x3;
y1-y6 ON x1-x3 (dir1-dir18);
MODEL PRIORS:
xload1-xload6~N(0,0.01);
dir1-dir18~N(0,0.01);
PLOT: TYPE = PLOT2;
```

## Explanation

In this example, a MIMIC model with cross-loadings and direct effects with zero-mean and small-variance priors is carried out using the Bayes estimator. This is a Bayesian structural equation model (BSEM; Muthén & Asparouhov, 2012).

In the MODEL command, the first BY statement specifies that f1 is measured by the continuous factor indicators y1 through y6. The second BY statements specifies that f2 is measured by the continuous factor indicators y1 through y6. The first factor loadings are fixed at one to set the metric of the factors. The first line of each BY statement shows the major loadings for each factor. The second line shows the cross-loadings which are assigned labels. For f1, labels are assigned to y4 through y6. For f2, labels are assigned to y1 through y3. The intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. In MODEL PRIORS, the labels assigned in the MODEL command are used to assign zero-mean and small-variance priors to the factor loadings. The first ON statement describes the linear regressions of f1 and f2 on the covariates x1, x2, and x3. The residual variances of f1 and f2 are estimated and the residuals are correlated as the default. The second ON statement describes the linear regressions of y1 through y6 on the covariates x1, x2, and x3. These are direct effects which are assumed to be small. Labels are assigned to these regression coefficients. In MODEL PRIORS, the labels assigned in the MODEL command are used to assign zero-mean and small-variance priors to the factor loadings and regression coefficients. By specifying TYPE=PLOT2 in the PLOT command, the following plots are available: posterior parameter distributions, posterior parameter trace plots, autocorrelation plots, posterior predictive checking scatterplots, and posterior predictive checking distribution plots. An explanation of the other commands can be found in Examples 5.1 and 5.31.
