# EXAMPLE 12.9: MONTE CARLO SIMULATION STUDY FOR A TWO-PART (SEMICONTINUOUS) GROWTH MODEL FOR A CONTINUOUS OUTCOME

## Description

In this example, data are generated and analyzed for a two-part (semicontinuous) growth model for a continuous outcome like the one shown in Example 6.16. If these data are saved for subsequent two-part analysis using the DATA TWOPART command, an adjustment to the saved data must be made using the DEFINE command as part of the analysis. If the values of the continuous outcomes y are not 999 which is the value used as the missing data flag in the saved data, the exponential function must be applied to the continuous variables. After that transformation, the value 999 must be changed to zero for the continuous variables. This represents the floor of the scale.

## Mplus Input

```mplus
TITLE: this is an example of a Monte Carlo
simulation study for a two-part
(semicontinuous) growth model for a
continuous outcome

MONTECARLO:
NAMES = u1-u4 y1-y4;
NOBSERVATIONS = 500;
NREPS = 100;
GENERATE = u1-u4(1);
MISSING = y1-y4;
CATEGORICAL = u1-u4;

MODEL POPULATION:
iu su | u1@0 u2@1 u3@2 u4@3;
[u1$1-u4$1*-.5] (1);
[iu@0 su*.85];
iu*1.45;
iy sy | y1@0 y2@1 y3@2 y4@3;
[y1-y4@0];
y1-y4*.5;
[iy*.5 sy*1];
iy*1;
sy*.2;
iy WITH sy*.1;
iu WITH iy*0.9;

MODEL MISSING:
[y1-y4@15];
y1 ON u1@-30;
y2 ON u2@-30;
y3 ON u3@-30;
y4 ON u4@-30;

ANALYSIS: ESTIMATOR = MLR;

MODEL: iu su | u1@0 u2@1 u3@2 u4@3;
[u1$1-u4$1*-.5] (1);
[iu@0 su*.85];
iu*1.45;
su@0;
iy sy | y1@0 y2@1 y3@2 y4@3;
[y1-y4@0];
y1-y4*.5;
[iy*.5 sy*1];
iy*1;
sy*.2;
iy WITH sy*.1;
iu WITH iy*0.9;
iu WITH sy@0;

OUTPUT: TECH8;
```

## Explanation

The MISSING option in the MONTECARLO command is used to identify the dependent variables in the data generation model for which missing data will be generated. The MODEL MISSING command is used to provide information about the population parameter values for the missing data model to be used in the generation of data.

The MODEL MISSING command specifies a logistic regression model for a set of binary dependent variables that represent not missing (scored as 0) and missing (scored as 1) for the dependent variables in the data generation model. The binary missing data indicators have the same names as the dependent variables in the data generation model.

The first statement in the MODEL MISSING command defines the intercepts in the logistic regressions for the binary dependent variables y1, y2, y3, and y4. If the covariates predicting missingness all have values of zero, the logistic regression intercept value of 15 corresponds to a probability of one of having missing data on the dependent variables.

The four ON statements describe the regressions of the missing value indicators y1, y2, y3, and y4 on the binary outcomes u1, u2, u3, and u4 where the logistic regression coefficient is fixed at -30. This results in observations with the value one on u1, u2, u3, and u4 giving logit values -15 for the binary missing data indicators. A logit value -15 implies that the probability that the continuous outcomes y are missing is zero.
