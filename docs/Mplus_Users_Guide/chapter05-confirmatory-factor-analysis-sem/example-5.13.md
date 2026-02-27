# EXAMPLE 5.13: SEM WITH CONTINUOUS FACTOR INDICATORS AND AN INTERACTION BETWEEN TWO LATENT VARIABLES

## Description

This example demonstrates a SEM with continuous factor indicators and an interaction between two latent variables.

## Mplus Input

```mplus
TITLE: this is an example of a SEM with
continuous factor indicators and an
interaction between two latent variables
DATA: FILE IS ex5.13.dat;
VARIABLE: NAMES ARE y1-y12;
ANALYSIS: TYPE = RANDOM;
ALGORITHM = INTEGRATION;
MODEL: f1 BY y1-y3;
f2 BY y4-y6;
f3 BY y7-y9;
f4 BY y10-y12;
f4 ON f3;
f3 ON f1 f2;
f1xf2 | f1 XWITH f2;
f3 ON f1xf2;
OUTPUT: TECH1 TECH8;
```

## Explanation

The difference between this example and Example 5.11 is that an interaction between two latent variables is included in the model. The interaction is shown in the picture above as a filled circle. The model is estimated using maximum likelihood (Klein & Moosbrugger, 2000).

The TYPE option is used to describe the type of analysis that is to be performed. By selecting RANDOM, a model with a random effect will be estimated. By specifying ALGORITHM=INTEGRATION, a maximum likelihood estimator with robust standard errors using a numerical integration algorithm will be used. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, two dimensions of integration are used with a total of 225 integration points. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

Latent variable interactions are specified by using the | statement in conjunction with the XWITH option of the MODEL command. The name on the left-hand side of the | symbol names the latent variable interaction. The XWITH statement on the right-hand side of the | symbol defines the latent variable interaction. The latent variable f1xf2 is the interaction between f1 and f2. The last ON statement uses the latent variable interaction as an independent variable. The OUTPUT command is used to request additional output not included as the default. The TECH1 option is used to request the arrays containing parameter specifications and starting values for all free parameters in the model. The TECH8 option is used to request that the optimization history in estimating the model be printed in the output. TECH8 is printed to the screen during the computations as the default. TECH8 screen printing is useful for determining how long the analysis takes. An explanation of the other commands can be found in Examples 5.1 and 5.11.
