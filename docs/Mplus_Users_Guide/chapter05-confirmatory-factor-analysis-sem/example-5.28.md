# EXAMPLE 5.28: EFA WITH RESIDUAL VARIANCES CONSTRAINED TO BE GREATER THAN ZERO

## Description

This example demonstrates an exploratory factor analysis with residual variances constrained to be greater than zero. This is an exploratory structural equation model (ESEM; Asparouhov & Muthén, 2009a).

## Mplus Input

```mplus
TITLE: this is an example of an EFA with residual
variances constrained to be greater than
zero
DATA: FILE = ex5.28.dat;
VARIABLE: NAMES = y1-y10;
ANALYSIS: ROTATION = GEOMIN;
MODEL: f1-f2 BY y1-y10 (*1);
y1-y10 (v1-v10);
MODEL CONSTRAINT:
DO(1,10) v#>0;
OUTPUT: STDY;
```

## Explanation

In this example, an exploratory factor analysis with residual variances constrained to be greater than zero is carried out using a Geomin rotation. This is an exploratory structural equation model (ESEM; Asparouhov & Muthén, 2009a). The factors f1 and f2 are EFA factors which have the same factor indicators. By specifying GEOMIN, an EFA will be carried out using the Geomin rotation. The default is an oblique rotation. An orthogonal rotation can be obtained by specifying ROTATION=GEOMIN(ORTHOGONAL). The ROTATION option can be used to specify other rotations.

In the MODEL command, the BY statement specifies that the factors f1 and f2 are measured by the continuous factor indicators y1 through y10. The label 1 following an asterisk (*) in parentheses following the BY statement is used to indicate that f1 and f2 are a set of EFA factors. The intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. The variances of the factors are fixed at one as the default. The DO option of the MODEL CONSTRAINT command is used to constrain the residual variances of the factor indicators to be greater than zero. The DO option provides a do loop to facilitate specifying the same expression for a set of parameters. The parameters are given labels in the MODEL command. In the DO option, the numbers in parentheses give the range of values for the do loop. The number sign (#) is replaced by these values during the execution of the do loop. In the OUTPUT command, the STDY option is chosen for standardization with respect to y. This puts the results in the metric of an EFA. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Examples 5.1.
