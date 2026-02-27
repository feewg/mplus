# EXAMPLE 12.8: MONTE CARLO SIMULATION STUDY FOR DISCRETE-TIME SURVIVAL ANALYSIS

## Description

In this example, data are generated and analyzed for a discrete-time survival model like the one shown in Example 6.19. Maximum likelihood estimation with discrete-time survival analysis for a non-repeatable event requires that the event history indicators for an individual are scored as missing after an event has occurred (Muthén & Masyn, 2005). This is accomplished using the MODEL MISSING command.

## Mplus Input

```mplus
TITLE: this is an example of a Monte Carlo
simulation study for discrete-time
survival analysis

MONTECARLO:
NAMES = u1-u4 x;
NOBSERVATIONS = 1000;
NREPS = 100;
GENERATE = u1-u4(1);
MISSING = u2-u4;
CATEGORICAL = u1-u4;

MODEL POPULATION:
[x@0]; x@1;
[u1$1*2 u2$1*1.5 u3$1*1 u4$1*1];
f BY u1-u4@1;
f ON x*.5;
f@0;

MODEL MISSING:
[u2-u4@-15];
u2 ON u1@30;
u3 ON u1-u2@30;
u4 ON u1-u3@30;

ANALYSIS: ESTIMATOR = MLR;

MODEL: [u1$1*2 u2$1*1.5 u3$1*1 u4$1*1];
f BY u1-u4@1;
f ON x*.5;
f@0;

OUTPUT: TECH8 TECH9;
```

## Explanation

The MISSING option in the MONTECARLO command is used to identify the dependent variables in the data generation model for which missing data will be generated. The MODEL MISSING command is used to provide information about the population parameter values for the missing data model to be used in the generation of data.

The MODEL MISSING command specifies a logistic regression model for a set of binary dependent variables that represent not missing (scored as 0) and missing (scored as 1) for the dependent variables in the data generation model. The binary missing data indicators have the same names as the dependent variables in the data generation model.

The first statement in the MODEL MISSING command defines the intercepts in the logistic regressions for the binary dependent variables u2, u3, and u4. If the covariates predicting missingness all have values of zero, the logistic regression intercept value of -15 corresponds to a probability of zero of having missing data on the dependent variables. The variable u1 has no missing values.

The first ON statement describes the regression of the missing value indicator u2 on the event-history variable u1 where the logistic regression coefficient is fixed at 30 indicating that observations with the value one on the event-history variable u1 result in a logit value 15 for the missing value indicator u2 indicating that the probability that the event-history variable u2 is missing is one.

The second ON statement describes the regression of the missing value indicator u3 on the event-history variables u1 and u2 where the logistic regression coefficients are fixed at 30 indicating that observations with the value one on either or both of the event-history variables u1 and u2 result in a logit value of at least 15 for the missing value indicator u3 indicating that the probability that the event-history variable u3 is missing is one.

The third ON statement describes the regression of the missing value indicator u4 on the event-history variables u1, u2, and u3 where the logistic regression coefficients are fixed at 30 indicating that observations with the value one on one or more of the event-history variables u1, u2, and u3 result in a logit value of at least 15 for the missing value indicator u4 indicating that the probability that the event-history variable u4 is missing is one.
