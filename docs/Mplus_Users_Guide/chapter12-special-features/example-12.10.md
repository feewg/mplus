# EXAMPLE 12.10: MONTE CARLO SIMULATION STUDY FOR A TWO-LEVEL CONTINUOUS-TIME SURVIVAL ANALYSIS USING COX REGRESSION WITH A RANDOM INTERCEPT AND A FRAILTY

## Description

In this example, data are generated and analyzed for the two-level continuous-time survival analysis using Cox regression with a random intercept and a frailty shown in Example 9.16. Monte Carlo simulation of continuous-time survival models is described in Asparouhov et al. (2006).

## Mplus Input

```mplus
TITLE: this is an example of a Monte Carlo
simulation study for a two-level
continuous-time survival analysis using
Cox regression with a random intercept and
a frailty

MONTECARLO:
NAMES = t x w;
NOBSERVATIONS = 1000;
NREPS = 100;
GENERATE = t(s 20*1);
NCSIZES = 3;
CSIZES = 40 (5) 50 (10) 20 (15);
HAZARDC = t (.5);
SURVIVAL = t (ALL);
WITHIN = x;
BETWEEN = w;

MODEL POPULATION:
%WITHIN%
x@1;
t ON x*.5;
%BETWEEN%
w@1;
[t#1-t#21*1];
t ON w*.2;
t*0.5;

ANALYSIS: TYPE = TWOLEVEL;
BASEHAZARD = OFF;

MODEL: %WITHIN%
t ON x*.5;
%BETWEEN%
t ON w*.2;
t*0.5;
```

## Explanation

The GENERATE option is used to specify the scale of the dependent variables for data generation. In this example, the dependent variable t is a time-to-event variable. The numbers in parentheses specify that twenty time intervals of length one will be used for data generation.

The HAZARDC option is used to specify the hazard for the censoring process in continuous-time survival analysis when time-to-event variables are generated. This information is used to create a censoring indicator variable where zero is not censored and one is right censored. A hazard for censoring of .5 is specified for the time-to-event variable t by placing the number .5 in parentheses following the variable name.

The SURVIVAL option is used to identify the analysis variables that contain information about time to event and to provide information about the time intervals in the baseline hazard function to be used in the analysis. The keyword ALL is used if the time intervals are taken from the data.

The ANALYSIS command is used to describe the technical details of the analysis. By selecting TYPE=TWOLEVEL, a multilevel model will be estimated. The BASEHAZARD option is used with continuous-time survival analysis to specify if a non-parametric or a parametric baseline hazard function is used in the estimation of the model. The default is OFF which uses the non-parametric baseline hazard function.

The MODEL command is used to describe the analysis model as in regular analyses. In the within part of the model, the ON statement describes the loglinear regression of the time-to-event variable t on the covariate x. In the between part of the model, the ON statement describes the linear regression of the random intercept of the time-to-event variable t on the covariate w. The residual variance of t is estimated and represents a frailty parameter.
