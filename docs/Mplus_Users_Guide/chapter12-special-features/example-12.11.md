# EXAMPLE 12.11: MONTE CARLO SIMULATION STUDY FOR A TWO-LEVEL MEDIATION MODEL WITH RANDOM SLOPES

## Description

In this example, data for a two-level mediation model with a random slope are generated and analyzed. For related modeling see Bauer et al. (2006).

## Mplus Input

```mplus
TITLE: this is an example of a Monte Carlo
simulation study for a two-level mediation
model with random slopes

MONTECARLO:
NAMES ARE y m x;
WITHIN = x;
NOBSERVATIONS = 1000;
NCSIZES = 1;
CSIZES = 100 (10);
NREP = 100;

ANALYSIS: TYPE = TWOLEVEL RANDOM;

MODEL POPULATION:
%WITHIN%
x@1;
c | y ON x;
b | y ON m;
a | m ON x;
m*1; y*1;
%BETWEEN%
y WITH m*0.1 b*0.1 a*0.1 c*0.1;
m WITH b*0.1 a*0.1 c*0.1;
a WITH b*0.1 (cab);
a WITH c*0.1;
b WITH c*0.1;
y*1 m*1 a*1 b*1 c*1;
[a*0.4] (ma);
[b*0.5] (mb);
[c*0.6];

MODEL:
%WITHIN%
c | y ON x;
b | y ON m;
a | m ON x;
m*1; y*1;
%BETWEEN%
y WITH m*0.1 b*0.1 a*0.1 c*0.1;
m WITH b*0.1 a*0.1 c*0.1;
a WITH b*0.1 (cab);
a WITH c*0.1;
b WITH c*0.1;
y*1 m*1 a*1 b*1 c*1;
[a*0.4] (ma);
[b*0.5] (mb);
[c*0.6];

MODEL CONSTRAINT:
NEW(m*0.3);
m=ma*mb+cab;
```

## Explanation

The TYPE option is used to describe the type of analysis that is to be performed. By selecting TWOLEVEL RANDOM, a multilevel model with random intercepts and random slopes will be estimated.

In the MODEL command, the | statement is used to name and define the random slopes c, b, and a. The random intercept uses the name of the dependent variables c, b, and a. The ON statements on the right-hand side of the | statements describe the linear regressions that have a random slope.

The label cab is assigned to the covariance between the random slopes a and b. The labels ma and mb are assigned to the means of the random slopes a and b. These labels are used in the MODEL CONSTRAINT command.

The MODEL CONSTRAINT command is used to define linear and non-linear constraints on the parameters in the model. In the MODEL CONSTRAINT command, the NEW option is used to introduce a new parameter that is not part of the MODEL command. The new parameter m is the indirect effect of the covariate x on the outcome y. The two outcomes y and m can also be categorical. For a discussion of indirect effects when the outcome y is categorical, see MacKinnon et al. (2007).

The default estimator for this type of analysis is maximum likelihood with robust standard errors.
