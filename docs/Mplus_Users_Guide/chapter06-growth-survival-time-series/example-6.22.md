# EXAMPLE 6.22: Continuous-time survival analysis using a parametric proportional hazards model with a factor influencing survival

## Description

In this example, the continuous-time survival analysis model shown in the picture above is estimated. The model is similar to Larsen (2005) although in this example the analysis uses a parametric baseline hazard function (Asparouhov et al., 2006).

## Mplus Input

```mplus
TITLE: this is an example of a continuous-time
survival analysis using a parametric
proportional hazards model with a factor
influencing survival
DATA: FILE = ex6.22.dat;
VARIABLE: NAMES = t u1-u4 x tc;
SURVIVAL = t (20*1);
TIMECENSORED = tc;
CATEGORICAL = u1-u4;
ANALYSIS: ALGORITHM = INTEGRATION;
BASEHAZARD = ON;
MODEL: f BY u1-u4;
[t#1-t#21];
t ON x f;
f ON x;
OUTPUT: TECH1 TECH8;
```

## Explanation

By specifying ALGORITHM=INTEGRATION, a maximum likelihood estimator with robust standard errors using a numerical integration algorithm will be used. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, one dimension of integration is used with a total of 15 integration points. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

In the MODEL command the BY statement specifies that f is measured by the binary indicators u1, u2, u3, and u4. The bracket statement specifies that the 21 baseline hazard parameters are part of the model. The first ON statement describes the loglinear regression of the time-to-event variable t on the covariate x and the factor f. The second ON statement describes the linear regression of f on the covariate x. An explanation of the other commands can be found in Examples 6.1 and 6.21.
