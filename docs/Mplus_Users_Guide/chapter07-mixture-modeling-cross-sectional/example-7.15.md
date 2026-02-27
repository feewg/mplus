# EXAMPLE 7.15: Loglinear Model For A Three-Way Table With Conditional Independence Between The First Two Variables

## Description

In this example, a loglinear model for a three-way frequency table with conditional independence between the first two variables is estimated. The loglinear model is estimated using categorical latent variables that are perfectly measured by observed categorical variables. The conditional independence is specified by the two-way interaction between the first two variables being zero for each of the two levels of the third variable.

## Mplus Input

```mplus
TITLE: this is an example of a loglinear model
       for a three-way table with conditional
       independence between the first two
       variables
DATA: FILE IS ex7.15.dat;
VARIABLE: NAMES ARE u1 u2 u3 w;
          FREQWEIGHT = w;
          CATEGORICAL = u1-u3;
          CLASSES = c1 (2) c2 (2) c3 (2);
ANALYSIS: TYPE = MIXTURE;
          STARTS = 0;
          PARAMETERIZATION = LOGLINEAR;
MODEL:
    %OVERALL%
    c1 WITH c3;
    c2 WITH c3;
MODEL c1:
    %c1#1%
    [u1$1@15];
    %c1#2%
    [u1$1@-15];
MODEL c2:
    %c2#1%
    [u2$1@15];
    %c2#2%
    [u2$1@-15];
MODEL c3:
    %c3#1%
    [u3$1@15];
    %c3#2%
    [u3$1@-15];
OUTPUT: TECH1 TECH8;
```

## Explanation

PARAMETERIZATION=LOGLINEAR is used to estimate loglinear models with two- and three-way interactions. In the LOGLINEAR parameterization, the WITH option of the MODEL command is used to specify the associations among the categorical latent variables. When a model has more than one categorical latent variable, MODEL followed by a label is used to describe the analysis model for each categorical latent variable. Labels are defined by using the names of the categorical latent variables.

In the example above, the categorical latent variables are perfectly measured by the latent class indicators. This is specified by fixing their thresholds to the logit value of plus or minus 15, corresponding to probabilities of zero and one. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
