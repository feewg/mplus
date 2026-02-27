# EXAMPLE 5.7: NON-LINEAR CFA

## Description

This example demonstrates a non-linear CFA model (McDonald, 1967). The factor indicators are quadratic functions of the factor.

## Mplus Input

```mplus
TITLE: this is an example of a non-linear CFA
DATA: FILE IS ex5.7.dat;
VARIABLE: NAMES ARE y1-y5;
ANALYSIS: TYPE = RANDOM;
ALGORITHM = INTEGRATION;
MODEL: f BY y1-y5;
fxf | f XWITH f;
y1-y5 ON fxf;
OUTPUT: TECH1 TECH8;
```

## Explanation

In this example, a non-linear CFA model is estimated (McDonald, 1967). The factor indicators are quadratic functions of the factor. The TYPE option is used to describe the type of analysis that is to be performed. By selecting RANDOM, a model with a random effect will be estimated. By specifying ALGORITHM=INTEGRATION, a maximum likelihood estimator with robust standard errors using a numerical integration algorithm will be used. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, one dimension of integration is used with 15 integration points. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

The BY statement specifies that f is measured by y1 through y5. This specifies the linear part of the quadratic function. The | statement in conjunction with the XWITH option of the MODEL command is used to define the quadratic factor term. The name on the left-hand side of the | symbol names the quadratic factor term. The XWITH statement on the right-hand side of the | symbol defines the quadratic factor term fxf. The ON statement specifies the quadratic part of the quadratic function. The OUTPUT command is used to request additional output not included as the default. The TECH1 option is used to request the arrays containing parameter specifications and starting values for all free parameters in the model. The TECH8 option is used to request that the optimization history in estimating the model be printed in the output. TECH8 is printed to the screen during the computations as the default. TECH8 screen printing is useful for determining how long the analysis takes. An explanation of the other commands can be found in Example 5.1.
