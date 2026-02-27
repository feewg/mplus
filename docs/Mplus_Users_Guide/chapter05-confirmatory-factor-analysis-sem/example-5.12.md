# EXAMPLE 5.12: SEM WITH CONTINUOUS FACTOR INDICATORS AND AN INDIRECT EFFECT FOR FACTORS

## Description

This example demonstrates a SEM with continuous factor indicators and an indirect effect for factors.

## Mplus Input

```mplus
TITLE: this is an example of a SEM with
continuous factor indicators and an
indirect effect for factors
DATA: FILE IS ex5.12.dat;
VARIABLE: NAMES ARE y1-y12;
MODEL: f1 BY y1-y3;
f2 BY y4-y6;
f3 BY y7-y9;
f4 BY y10-y12;
f4 ON f3;
f3 ON f1 f2;
MODEL INDIRECT:
f4 IND f3 f1;
```

## Explanation

The difference between this example and Example 5.11 is that an indirect effect is estimated. Indirect effects and their standard errors can be requested using the MODEL INDIRECT command. Total indirect, specific indirect, and total effects are specified by using the IND and VIA statements. Total effects include all indirect effects and the direct effect. The IND statement is used to request a specific indirect effect or set of indirect effects. The VIA statement is used to request a set of indirect effects that include specific mediators.

In the IND statement above, the variable on the left-hand side of IND is the dependent variable. The last variable on the right-hand side of IND is the independent variable. Other variables on the right-hand side of IND are mediating variables. The IND statement requests the specific indirect effect from f1 to f3 to f4. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Examples 5.1 and 5.11.
