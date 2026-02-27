# EXAMPLE 12.5: MONTE CARLO SIMULATION STUDY FOR AN EXPLORATORY FACTOR ANALYSIS WITH CONTINUOUS FACTOR INDICATORS

## Description

In this example, data are generated according to a two-factor CFA model with continuous outcomes and analyzed as an exploratory factor analysis using exploratory structural equation modeling (ESEM; Asparouhov & Muthén, 2009a).

## Mplus Input

```mplus
TITLE: this is an example of a Monte Carlo
simulation study for an exploratory factor
analysis with continuous factor indicators

MONTECARLO:
NAMES ARE y1-y10;
NOBSERVATIONS = 500;
NREPS = 500;

MODEL POPULATION:
f1 BY y1-y7*.5;
f2 BY y4-y5*.25 y6-y10*.8;
f1-f2@1;
f1 WITH f2*.5;
y1-y10*.36;

MODEL: f1 BY y1-y7*.5 y8-y10*0 (*1);
f2 BY y1-y3*.0 y4-y5*.25 y6-y10*.8 (*1);
f1 WITH f2*.5;
y1-y10*.36;

OUTPUT: TECH9;
```

## Explanation

In the MODEL command, the BY statements specify that the factors f1 and f2 are measured by the continuous factor indicators y1 through y10. The label 1 following an asterisk (*) in parentheses following the BY statements is used to indicate that f1 and f2 are a set of EFA factors. When no rotation is specified using the ROTATION option of the ANALYSIS command, the default oblique GEOMIN rotation is used to obtain factor loadings and factor correlations.

The intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. The variances of the factors are fixed at one as the default. The factors are correlated under the default oblique GEOMIN rotation.

The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.
