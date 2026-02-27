# EXAMPLE 6.21: Continuous-time survival analysis using a parametric proportional hazards model

## Description

The difference between this example and Example 6.20 is that a parametric proportional hazards model is used instead of a Cox regression model. In contrast to the Cox regression model, the parametric model estimates parameters and their standard errors for the baseline hazard function (Asparouhov et al., 2006).

## Mplus Input

```mplus
TITLE: this is an example of a continuous-time
survival analysis using a parametric
proportional hazards model
DATA: FILE = ex6.21.dat;
VARIABLE: NAMES = t x tc;
SURVIVAL = t(20*1);
TIMECENSORED = tc (0 = NOT 1 = RIGHT);
ANALYSIS: BASEHAZARD = ON;
MODEL: [t#1-t#21];
t ON x;
```

## Explanation

The SURVIVAL option is used to identify the variables that contain information about time to event and to provide information about the number and lengths of the time intervals in the baseline hazard function to be used in the analysis. The SURVIVAL option must be used in conjunction with the TIMECENSORED option. In this example, t is the variable that contains time-to-event information. The numbers in parentheses following the time-to-event variable specify that twenty time intervals of length one are used in the analysis for the baseline hazard function. The TIMECENSORED option is used to identify the variables that contain information about right censoring. In this example, this variable is named tc. The information in parentheses specifies that the value zero represents no censoring and the value one represents right censoring. This is the default.

The BASEHAZARD option of the ANALYSIS command is used with continuous-time survival analysis to specify whether the baseline hazard parameters are treated as model parameters or as auxiliary parameters. The ON setting specifies that the parameters are treated as model parameters. There are as many baseline hazard parameters as there are time intervals plus one. These parameters can be referred to in the MODEL command by adding to the name of the time-to-event variable the number sign (#) followed by a number. In the MODEL command, the bracket statement specifies that the 21 baseline hazard parameters are part of the model.

The default estimator for this type of analysis is maximum likelihood with robust standard errors. The estimator option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Examples 6.1 and 6.20.
