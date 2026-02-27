# EXAMPLE 5.23: QTL SIBLING MODEL FOR A CONTINUOUS OUTCOME USING PARAMETER CONSTRAINTS

## Description

This example demonstrates a QTL sibling model for two siblings (Marlow et al. 2003; Posthuma et al. 2004) for continuous outcomes where parameter constraints are used to represent the A, E, and Q components.

## Mplus Input

```mplus
TITLE: this is an example of a QTL sibling model
for a continuous outcome using parameter
constraints
DATA: FILE = ex5.23.dat;
VARIABLE: NAMES = y1 y2 pihat;
USEVARIABLES = y1 y2;
CONSTRAINT = pihat;
MODEL: [y1-y2] (1);
y1-y2 (var);
y1 WITH y2 (cov);
MODEL CONSTRAINT:
NEW(a e q);
var = a**2 + e**2 + q**2;
cov = 0.5*a**2 + pihat*q**2;
```

## Explanation

In this example, the model shown in the picture above is estimated. This is a QTL model for two siblings (Marlow et al. 2003; Posthuma et al. 2004) for continuous outcomes where parameter constraints are used to represent the A, E, and Q components. The A component represents the additive genetic effects which correlate 0.5 for siblings. The E component represents uncorrelated environmental effects. The Q component represents a quantitative trait locus (QTL). The observed variable pihat contains the estimated proportion alleles shared identity-by-descent (IBD) by the siblings and moderates the effect of the Q component on the covariance between the outcomes.

The CONSTRAINT option in the VARIABLE command is used to identify the variables that can be used in the MODEL CONSTRAINT command. These can be not only variables used in the MODEL command but also other variables. In this example, the variable pihat is used in the MODEL CONSTRAINT command although it is not used in the MODEL command.

In the MODEL command, the (1) following the first bracket statement specifies that the intercepts of y1 and y2 are held equal across the two siblings. In addition, labels are defined for two parameters. The label var is assigned to the variances of y1 and y2. Because they are given the same label, these parameters are held equal. The label cov is assigned to the covariance between y1 and y2.

In the MODEL CONSTRAINT command, the NEW option is used to assign labels to three parameters that are not in the analysis model: a, e, and q. The three parameters a, e, and q and the variable pihat are used to decompose the variances and covariances of y1 and y2 into genetic, environmental, and QTL components. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Examples 5.1 and 5.20.
