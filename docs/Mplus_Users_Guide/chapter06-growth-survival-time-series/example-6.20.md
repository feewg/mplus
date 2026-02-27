# EXAMPLE 6.20: Continuous-time survival analysis using the Cox regression model

## Description

In this example, the continuous-time survival analysis model shown in the picture above is estimated. This is the Cox regression model (Singer & Willett, 2003). The profile likelihood method is used for model estimation (Asparouhov et al., 2006).

## Mplus Input

```mplus
TITLE: this is an example of a continuous-time
survival analysis using the Cox regression
model
DATA: FILE = ex6.20.dat;
VARIABLE: NAMES = t x tc;
SURVIVAL = t;
TIMECENSORED = tc (0 = NOT 1 = RIGHT);
MODEL: t ON x;
```

## Explanation

The SURVIVAL option is used to identify the variables that contain information about time to event and to provide information about the number and lengths of the time intervals in the baseline hazard function to be used in the analysis. The SURVIVAL option must be used in conjunction with the TIMECENSORED option. In this example, t is the variable that contains time-to-event information. Because nothing is specified in parentheses behind t, the default baseline hazard function is used. The TIMECENSORED option is used to identify the variables that contain information about right censoring. In this example, the variable is named tc. The information in parentheses specifies that the value zero represents no censoring and the value one represents right censoring. This is the default.

In the MODEL command, the ON statement describes the loglinear regression of the time-to-event variable t on the covariate x. The default estimator for this type of analysis is maximum likelihood with robust standard errors. The estimator option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 6.1.
