# EXAMPLE 12.3: MONTE CARLO SIMULATION STUDY FOR A GROWTH MIXTURE MODEL WITH TWO CLASSES AND A MISSPECIFIED MODEL

## Description

In this example, data are generated according to the two class model described in Example 8.1 and analyzed as a one class model. This results in a misspecified model. Differences between the parameter values that generated the data and the estimated parameters can be studied to determine the extent of the distortion.

## Mplus Input

```mplus
TITLE: this is an example of a Monte Carlo
simulation study for a growth mixture
model with two classes and a misspecified
model

MONTECARLO:
NAMES ARE u y1-y4 x;
NOBSERVATIONS = 500;
NREPS = 10;
SEED = 53487;
GENERATE = u (1);
CATEGORICAL = u;
GENCLASSES = c (2);
CLASSES = c (1);

MODEL POPULATION:
%OVERALL%
[x@0];
x@1;
i s | y1@0 y2@1 y3@2 y4@3;
i*.25 s*.04;
i WITH s*0;
y1*.4 y2*.35 y3*.3 y4*.25;
i ON x*.5;
s ON x*.1;
c#1 ON x*.2;
[c#1*0];
%c#1%
[u$1*1 i*3 s*.5];
%c#2%
[u$1*-1 i*1 s*0];

ANALYSIS: TYPE = MIXTURE;

MODEL:
%OVERALL%
i s | y1@0 y2@1 y3@2 y4@3;
i*.25 s*.04;
i WITH s*0;
y1*.4 y2*.35 y3*.3 y4*.25;
i ON x*.5;
s ON x*.1;
! c#1 ON x*.2;
! [c#1*0];
u ON x;
%c#1%
[u$1*1 i*3 s*.5];
! %c#2%
! [u$1*-1 i*1 s*0];

OUTPUT: TECH9;
```

## Explanation

The GENERATE option is used to specify the scale of the dependent variables for data generation. In this example, the dependent variable u is binary because it has one threshold. For binary variables, this is specified by placing the number one in parenthesis following the variable name. The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In the example above, the variable u is generated and analyzed as a binary variable.

The GENCLASSES option is used to assign names to the categorical latent variables in the data generation model and to specify the number of latent classes to be used for data generation. In the example above, there is one categorical latent variable c that has two latent classes for data generation.

The CLASSES option is used to assign names to the categorical latent variables in the analysis model and to specify the number of latent classes to be used for analysis. In the example above, there is one categorical latent variable c that has one latent class for analysis.

The ANALYSIS command is used to describe the technical details of the analysis. The TYPE option is used to describe the type of analysis that is to be performed. By selecting MIXTURE, a mixture model will be estimated.

The commented out lines in the MODEL command show how the MODEL command is changed from a two class model to a one class model.
