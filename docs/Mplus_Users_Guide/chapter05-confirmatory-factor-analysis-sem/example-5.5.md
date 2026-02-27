# EXAMPLE 5.5: ITEM RESPONSE THEORY (IRT) MODELS

## Description

This example demonstrates four logistic IRT models: the generalized partial credit model (GPCM), the two-parameter logistic model (2PL), the three-parameter logistic model (3PL) with a guessing parameter, and the four-parameter logistic model (4PL) with a lower (guessing) parameter and an upper asymptote parameter. In all examples, a single continuous factor is measured by 20 categorical factor indicators.

## Mplus Input - Part 1: GPCM Model

```mplus
TITLE: this is an example of a generalized
partial credit item response theory (IRT)
model
DATA: FILE IS ex5.5part1.dat;
VARIABLE: NAMES ARE u1-u20;
CATEGORICAL ARE u1-u20 (gpcm);
ANALYSIS: ESTIMATOR = MLR;
MODEL: f BY u1-u20*;
f@1;
OUTPUT: TECH1 TECH8;
PLOT: TYPE = PLOT3;
```

### Explanation for GPCM Model

In the first part of the example shown above, the GPCM model is estimated. The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In the example above, the factor indicators u1 through u20 are ordered categorical (ordinal) variables. The letters gpcm in parentheses specify that a GPCM model is estimated. The program determines the number of categories for each factor indicator. By specifying ESTIMATOR=MLR, a maximum likelihood estimator with robust standard errors using a numerical integration algorithm will be used. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, one dimension of integration is used with 15 integration points. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

In the MODEL command, the BY statement specifies that f is measured by u1 through u20. The asterisk (*) frees the first factor loading which is fixed at one as the default to define the metric of the factor. Instead the metric of the factor is defined by fixing the factor variance at one in line with IRT. For one-factor models with no covariates, results are presented both in a factor model parameterization and in a conventional IRT parameterization.

With the following MODEL command, a partial credit model is estimated:

```mplus
MODEL: f BY u1-u20@1;
f*1;
```

The OUTPUT command is used to request additional output not included as the default. The TECH1 option is used to request the arrays containing parameter specifications and starting values for all free parameters in the model. The TECH8 option is used to request that the optimization history in estimating the model be printed in the output. TECH8 is printed to the screen during the computations as the default. TECH8 screen printing is useful for determining how long the analysis takes. The PLOT command is used to request graphical displays of observed data and analysis results. These graphical displays can be viewed after the analysis is completed using a post-processing graphics module. Item characteristic curves and information curves are available. When covariates are included in the model with direct effects on one or more factor indicators, item characteristic curves can be plotted for each value of the covariate to show differential item functioning (DIF). An explanation of the other commands can be found in Example 5.1.

## Mplus Input - Part 2: Two-Parameter Logistic Model

```mplus
TITLE: this is an example of a two-parameter
logistic item response theory (IRT) model
DATA: FILE IS ex5.5part2.dat;
VARIABLE: NAMES ARE u1-u20;
CATEGORICAL ARE u1-u20;
ANALYSIS: ESTIMATOR = MLR;
MODEL: f BY u1-u20*;
f@1;
OUTPUT: TECH1 TECH8;
PLOT: TYPE = PLOT3;
```

### Explanation for 2PL Model

In the second part of the example shown above, a two-parameter logistic model is estimated. The difference between the specification for the GPCM and the 2PL models is that nothing is placed in parentheses after the variable names in the CATEGORICAL option. The factor indicators u1 through u20 are binary variables. If the factor indicators are ordered categorical (ordinal) variables, the input is the same but a graded-response model is estimated.

## Mplus Input - Part 3: Three-Parameter Logistic Model

```mplus
TITLE: this is an example of a three-parameter
logistic item response theory (IRT) model
using priors for the guessing parameters
DATA: FILE = ex5.5part3.dat;
VARIABLE: NAMES = u1-u20;
CATEGORICAL = u1-u20(3pl);
ANALYSIS: ESTIMATOR = MLR;
MODEL: f BY u1-u20*;
f@1;
[u1$2-u20$2] (a1-a20);
OUTPUT: TECH1 TECH8;
PLOT: TYPE = PLOT3;
MODEL PRIORS:
a1-a20~N(1.386,1);
```

### Explanation for 3PL Model

In the third part of the example shown above, a three-parameter logistic model is estimated. One difference between the specification for the GPCM and the 3PL models is that 3pl is placed in parentheses after the variable names in the CATEGORICAL option. The factor indicators u1 through u20 are binary variables. In addition, because convergence problems are common with the 3PL model, the MODEL PRIORS command is used to provide priors for the second thresholds. The second thresholds are parameters related to the guessing parameters which cannot be referred to directly. The first thresholds are referred to by adding $1 to the variable names. The second thresholds are referred to by adding $2 to the variable names. In the MODEL command, labels are given to the second thresholds. These labels are used in MODEL PRIORS to assign priors to the second thresholds. Prior mean values for the second thresholds of 1.386 correspond to guessing values of 0.25 (Asparouhov & Muthén, 2016).

## Mplus Input - Part 4: Four-Parameter Logistic Model

```mplus
TITLE: this is an example of a four-parameter
logistic item response theory (IRT) model
using priors for the lower (guessing) and
upper asymptote parameters
DATA: FILE = ex5.5part4.dat;
VARIABLE: NAMES = u1-u20;
CATEGORICAL = u1-u20(4pl);
ANALYSIS: ESTIMATOR = MLR;
MODEL: f BY u1-u20*;
f@1;
[u1$2-u20$2] (a1-a20);
[u1$3-u20$3] (b1-b20);
OUTPUT: TECH1 TECH8;
PLOT: TYPE = PLOT3;
MODEL PRIORS:
a1-a20~N(1.386,1);
b1-b20~N(-2,1);
```

### Explanation for 4PL Model

In the fourth part of the example shown above, a four-parameter logistic model is estimated. One difference between the specification for the GPCM and the 4PL models is that 4pl is placed in parentheses after the variable names in the CATEGORICAL option. The factor indicators u1 through u20 are binary variables. In addition, because convergence problems are common with the 4PL model, the MODEL PRIORS command is used to provide priors for the second and third thresholds. The second and third thresholds are parameters related to the upper asymptote (guessing) and lower asymptote parameters, respectively, which cannot be referred to directly. The first thresholds are referred to by adding $1 to the variable names. The second thresholds are referred to by adding $2 to the variable names. The third thresholds are referred to by adding $3 to the variable names. In the MODEL command, labels are given to the second and third thresholds. These labels are used in MODEL PRIORS to assign priors to the second and third thresholds. Prior mean values for the second thresholds of 1.386 correspond to guessing values of 0.25. Prior mean values for the third thresholds of -2 correspond to upper asymptote values of 0.88 (Asparouhov & Muthén, 2016).
