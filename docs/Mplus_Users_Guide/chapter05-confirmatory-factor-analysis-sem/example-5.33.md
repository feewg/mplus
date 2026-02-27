# EXAMPLE 5.33: BAYESIAN MULTIPLE GROUP MODEL WITH APPROXIMATE MEASUREMENT INVARIANCE USING ZERO-MEAN AND SMALL-VARIANCE PRIORS

## Description

This example demonstrates a multiple group model with approximate measurement invariance using zero-mean and small-variance priors using the Bayes estimator. This is a Bayesian structural equation model (BSEM; Muthén & Asparouhov, 2012).

## Mplus Input

```mplus
TITLE: this is an example of a Bayesian
multiple group model with approximate
measurement invariance using zero-mean and
small-variance priors
DATA: FILE = ex5.33.dat;
VARIABLE: NAMES = u y1-y6 group;
USEVARIABLES = y1-y6 group;
CLASSES = c(10);
KNOWNCLASS = c(group = 1-10);
ANALYSIS: TYPE = MIXTURE;
ESTIMATOR = BAYES;
PROCESSORS = 2;
MODEL = ALLFREE;
MODEL: %OVERALL%
f1 BY y1-y3* (lam#_1-lam#_3);
f2 BY y4-y6* (lam#_4-lam#_6);
[y1-y6] (nu#_1-nu#_6);
%c#10%
f1-f2@1;
[f1-f2@0];
MODEL PRIORS:
DO(1,6) DIFF(lam1_#-lam10_#)~N(0,0.01);
DO(1,6) DIFF(nu1_#-nu10_#)~N(0,0.01);
PLOT: TYPE = PLOT2;
OUTPUT: TECH1 TECH8;
```

## Explanation

In this example, a multiple group model with approximate measurement invariance using zero-mean and small-variance priors is carried out using the Bayes estimator. This is a Bayesian structural equation model (BSEM; Muthén & Asparouhov, 2012). In Bayesian estimation, multiple group analysis is carried out using the CLASSES and KNOWNCLASS options and TYPE=MIXTURE. The CLASSES option is used to assign names to the categorical latent variables in the model and to specify the number of latent classes in the model for each categorical latent variable. In the example above, there is one categorical latent variable c that has ten latent classes. The KNOWNCLASS option identifies c as the categorical latent variable for which latent class membership is known. The information in parentheses following the categorical latent variable name defines the known classes using an observed variable. In this example, the observed variable group is used to define the known classes. The first class consists of individuals with the value 1 on the variable group. The second class consists of individuals with the value 2 on the variable group etc.

MODEL=ALLFREE is used with TYPE=MIXTURE, the KNOWNCLASS option, ESTIMATOR=BAYES, and a special labeling function to assign zero-mean and small-variance priors to differences in intercepts, thresholds, and factor loadings across groups. By specifying MODEL=ALLFREE, factor means, variances, and covariances are free across groups except for factor means in the last group which are fixed at zero. In addition, intercepts, thresholds, factor loadings, and residual variances of the factor indicators are free across the groups.

In the overall model, the first BY statement specifies that f1 is measured by the continuous factor indicators y1 through y3. The second BY statement specifies that f2 is measured by the continuous factor indicators y4 through y6. In both BY statements the asterisk (*) frees the first factor loadings which are fixed at one as the default to set the metric of the factors. The metric of the factors is set instead by fixing the factor variances to one in class 10. The residual variances of the factor indicators are estimated and the residuals are not correlated as the default.

In the overall part of the model, labels are assigned to the factor loadings and the intercepts using automatic labeling for groups. The labels must include the number sign (#) followed by the underscore (_) symbol followed by a number. The number sign (#) refers to a group and the number refers to a parameter. The label lam#_1 is assigned to the factor loading for y1; the label lam#_2 is assigned to the factor loading for y2; and the label lam#_3 is assigned to the factor loading for y3. These labels are expanded to include group information. For example, the label for parameter 1 is expanded across the ten groups to give labels lam1_1, lam2_1 through lam10_1. In MODEL PRIORS, these expanded labels are used to assign zero-mean and small-variance priors to the differences across groups of the factor loadings and intercepts using the DO and DIFFERENCE options. They can be used together to simplify the assignment of priors to a large set of difference parameters for models with multiple groups and multiple time points. For the DO option, the numbers in parentheses give the range of values for the do loop. The number sign (#) is replaced by these values during the execution of the do loop. The numbers refer to the six factor indicators.

By specifying TYPE=PLOT2 in the PLOT command, the following plots are available: posterior parameter distributions, posterior parameter trace plots, autocorrelation plots, posterior predictive checking scatterplots, and posterior predictive checking distribution plots. An explanation of the other commands can be found in Example 5.1 and 5.31.
