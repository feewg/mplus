# EXAMPLE 12.2: MONTE CARLO SIMULATION STUDY FOR A LINEAR GROWTH MODEL FOR A CONTINUOUS OUTCOME WITH MISSING DATA WHERE ATTRITION IS PREDICTED BY TIME-INVARIANT COVARIATES (MAR)

## Description

In this example, missing data are generated to illustrate both random missingness and attrition predicted by time-invariant covariates (MAR). This Monte Carlo simulation study can be used to estimate the power to detect that the binary covariate x2 has a significant effect on the growth slope factor s. The binary covariate x2 may correspond to a treatment variable or a gender variable.

## Mplus Input

```mplus
TITLE: this is an example of a Monte Carlo
simulation study for a linear growth model
for a continuous outcome with missing data
where attrition is predicted by time-
invariant covariates (MAR)

MONTECARLO:
NAMES ARE y1-y4 x1 x2;
NOBSERVATIONS = 500;
NREPS = 500;
SEED = 4533;
CUTPOINTS = x2(1);
MISSING = y1-y4;

MODEL POPULATION:
x1-x2@1;
[x1-x2@0];
i s | y1@0 y2@1 y3@2 y4@3;
[i*1 s*2];
i*1; s*.2; i WITH s*.1;
y1-y4*.5;
i ON x1*1 x2*.5;
s ON x1*.4 x2*.25;

MODEL MISSING:
[y1-y4@-1];
y1 ON x1*.4 x2*.2;
y2 ON x1*.8 x2*.4;
y3 ON x1*1.6 x2*.8;
y4 ON x1*3.2 x2*1.6;

MODEL: i s | y1@0 y2@1 y3@2 y4@3;
[i*1 s*2];
i*1; s*.2; i WITH s*.1;
y1-y4*.5;
i ON x1*1 x2*.5;
s ON x1*.4 x2*.25;

OUTPUT: TECH9;
```

## Explanation

The MISSING option in the MONTECARLO command is used to identify the dependent variables in the data generation model for which missing data will be generated. The MODEL MISSING command is used to provide information about the population parameter values for the missing data model to be used in the generation of data. The MODEL MISSING command specifies a logistic regression model for a set of binary dependent variables that represent not missing (scored as 0) and missing (scored as 1) for the dependent variables in the data generation model.

The first statement in the MODEL MISSING command defines the intercepts in the logistic regressions for each of the binary dependent variables. If the covariates predicting missingness all have values of zero, the logistic regression intercept value of -1 corresponds to a probability of 0.27 of having missing data on the dependent variables. This would reflect missing completely at random.

The four ON statements specify the logistic regression of the four binary dependent variables on the two covariates x1 and x2 to reflect attrition predicted by the covariates. Because the values of the logistic regression slopes increase over time as seen in the increase of the slopes from y1 to y4, attrition also increases over time and becomes more selective over time.
