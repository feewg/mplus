# EXAMPLE 5.20: CFA WITH PARAMETER CONSTRAINTS

## Description

This example demonstrates parameter constraints used to estimate reliabilities, estimate standardized coefficients, constrain functions of parameters to be equal, and constrain parameters to be greater than a value. This example uses the model from Example 5.1.

## Mplus Input

```mplus
TITLE: this is an example of a CFA with parameter
constraints
DATA: FILE = ex5.20.dat;
VARIABLE: NAMES = y1-y6;
MODEL: f1 BY y1
y2-y3(lam2-lam3);
f2 BY y4
y5-y6(lam5-lam6);
f1 (vf1);
f2 (vf2);
y1-y3 (ve1-ve3);
y4-y6 (ve4-ve6);
MODEL CONSTRAINT:
NEW(rel2 rel5 stan3 stan6);
rel2 = lam2**2*vf1/(lam2**2*vf1 + ve2);
rel5 = lam5**2*vf2/(lam5**2*vf2 + ve5);
rel5 = rel2;
stan3 = lam3*SQRT(vf1)/SQRT(lam3**2*vf1 +
ve3);
stan6 = lam6*SQRT(vf2)/SQRT(lam6**2*vf2 +
ve6);
0 = stan6 - stan3;
ve2 > ve5;
ve4 > 0;
OUTPUT: STANDARDIZED;
```

## Explanation

The MODEL CONSTRAINT command specifies parameter constraints using labels defined for parameters in the MODEL command, labels defined for parameters not in the MODEL command using the NEW option of the MODEL CONSTRAINT command, and names of observed variables that are identified using the CONSTRAINT option of the VARIABLE command. This example illustrates constraints using labels defined for parameters in the MODEL command and labels defined using the NEW option. The NEW option is used to assign labels and starting values to parameters not in the analysis model. Parameters in the analysis model are given labels by placing a name in parentheses after the parameter in the MODEL command.

In the MODEL command, labels are defined for twelve parameters. The list function can be used when assigning labels to a list of parameters. The labels lam2, lam3, lam5, and lam6 are assigned to the factor loadings for y2, y3, y5, and y6. The labels vf1 and vf2 are assigned to the factor variances for f1 and f2. The labels ve1, ve2, ve3, ve4, ve5, and ve6 are assigned to the residual variances of y1, y2, y3, y4, y5, and y6.

In the MODEL CONSTRAINT command, the NEW option is used to assign labels to four parameters that are not in the analysis model: rel2, rel5, stan3, and stan6. The parameters rel2 and rel6 estimate the reliability of y2 and y6 where reliability is defined as variance explained divided by total variance. The parameters stan3 and stan6 estimate the standardized coefficients for y3 and y6 using conventional standardization formulas. In the statement that begins 0=, two parameters are held equal to each other by defining their difference as zero. In the last two statements, the residual variance of y2 is constrained to be greater than the residual variance of y5, and the residual variance of y4 is constrained to be greater than zero. The STANDARDIZED option of the OUTPUT command is requested to illustrate that the R-square values found in the output are the same as the estimated reliabilities, and the standardized values found in the output are the same as the estimated standardized values. Standard errors for parameters named using the NEW option are given. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 5.1.
