# EXAMPLE 5.21: TWO-GROUP TWIN MODEL FOR CONTINUOUS OUTCOMES USING PARAMETER CONSTRAINTS

## Description

This example demonstrates a two-group twin model for continuous outcomes using parameter constraints. The model estimated is the same as the model in Example 5.18.

## Mplus Input

```mplus
TITLE: this is an example of a two-group twin
model for continuous outcomes using
parameter constraints
DATA: FILE = ex5.21.dat;
VARIABLE: NAMES = y1 y2 g;
GROUPING = g(1 = mz 2 = dz);
MODEL: [y1-y2] (1);
y1-y2 (var);
y1 WITH y2 (covmz);
MODEL dz: y1 WITH y2 (covdz);
MODEL CONSTRAINT:
NEW(a c e h);
var = a**2 + c**2 + e**2;
covmz = a**2 + c**2;
covdz = 0.5*a**2 + c**2;
h = a**2/(a**2 + c**2 + e**2);
```

## Explanation

In this example, the model shown in the picture above is estimated using parameter constraints. The model estimated is the same as the model in Example 5.18.

In the MODEL command, labels are defined for three parameters. The label var is assigned to the variances of y1 and y2. Because they are given the same label, these parameters are held equal. In the overall MODEL command, the label covmz is assigned to the covariance between y1 and y2 for the monozygotic twins. In the group-specific MODEL command, the label covdz is assigned to the covariance between y1 and y2 for the dizygotic twins.

In the MODEL CONSTRAINT command, the NEW option is used to assign labels to four parameters that are not in the analysis model: a, c, e, and h. The three parameters a, c, and e are used to decompose the variances and covariances of y1 and y2 into genetic and environmental components. The parameter h does not impose restrictions on the model parameters but is used to compute the heritability estimate and its standard error. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Examples 5.1, 5.14, 5.18, and 5.20.
