# EXAMPLE 5.18: TWO-GROUP TWIN MODEL FOR CONTINUOUS OUTCOMES WHERE FACTORS REPRESENT THE ACE COMPONENTS

## Description

This example demonstrates a two-group twin model for continuous outcomes where factors represent the ACE components (Neale & Cardon, 1992).

## Mplus Input

```mplus
TITLE: this is an example of a two-group twin
model for continuous outcomes where
factors represent the ACE components
DATA: FILE = ex5.18.dat;
VARIABLE: NAMES = y1 y2 g;
GROUPING = g (1 = mz 2 = dz);
ANALYSIS: MODEL = NOCOVARIANCES;
MODEL: [y1-y2] (1);
y1-y2@0;
a1 BY y1* (2);
a2 BY y2* (2);
c1 BY y1* (3);
c2 BY y2* (3);
e1 BY y1* (4);
e2 BY y2* (4);
a1-e2@1;
[a1-e2@0];
a1 WITH a2@1;
c1 WITH c2@1;
MODEL dz: a1 WITH a2@.5;
```

## Explanation

In this example, the univariate twin model shown in the picture above is estimated. This is a two-group twin model for a continuous outcome where factors represent the ACE components (Neale & Cardon, 1992).

The variables y1 and y2 represent a univariate outcome for each member of the twin pair. The A factors represent the additive genetic components which correlate 1.0 for monozygotic twin pairs and 0.5 for dizygotic twin pairs. The C factors represent common environmental effects which correlate 1.0 for all twin pairs. The E factors represent uncorrelated environmental effects. A simpler alternative way of specifying this model is shown in Example 5.21 where parameter constraints are used instead of the A, C, and E factors.

Exogenous factors are correlated as the default. By specifying MODEL=NOCOVARIANCES in the ANALYSIS command, all covariances in the model are fixed at zero. The WITH option of the MODEL command can be used to override the default for selected covariances as shown in the three WITH statements. In the MODEL command, the (1) following the first bracket statement specifies that the intercepts of y1 and y2 are held equal across twins. The second statement fixes the residual variances of y1 and y2 to zero. The residual variances of y1 and y2 are instead captured by the loadings of the E factors. The six BY statements are used to define the six factors. The asterisk (*) is used to free the factor loadings because the default is that the factor loading for the first factor indicator is fixed at one. The loadings for the A, C, and E factors are held equal across twins by placing (2) following the two BY statements for the A factors, (3) following the two BY statements for the C factors, and (4) following the two BY statements for the E factors. In the next two statements, the A, C, and E factor variances are fixed at one and the A, C, and E factor means are fixed at zero. Because the factor means are fixed at zero, the intercepts of y1 and y2 are their means.

The WITH statement for the A factors is used to fix the covariance (correlation) between the A factors to 1.0 for monozygotic twin pairs. The group-specific MODEL command is used to fix the covariance between the A factors to 0.5 for the dizygotic twin pairs. The WITH statement for the C factors is used to fix the covariance between the C factors to 1. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Examples 5.1 and 5.14.
