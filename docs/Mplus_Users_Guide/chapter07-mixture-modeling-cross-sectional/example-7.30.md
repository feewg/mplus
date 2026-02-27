# EXAMPLE 7.30: Continuous-Time Survival Analysis Using A Cox Regression Model To Estimate A Treatment Effect

## Description

In this example, the continuous-time survival analysis model is estimated. The model is similar to Larsen (2004). A treatment and a control group are analyzed as two known latent classes. The baseline hazards are held equal across the classes and the treatment effect is expressed as the intercept of the survival variable in the treatment group. For applications of this model, see Muthén et al. (2009).

## Mplus Input

```mplus
TITLE: this is an example of continuous-time
       survival analysis using a Cox regression
       model to estimate a treatment effect
DATA: FILE = ex7.30.dat;
VARIABLE: NAMES are t u x tcent class;
          USEVARIABLES = t-tcent;
          SURVIVAL = t;
          TIMECENSORED = tcent;
          CATEGORICAL = u;
          CLASSES = c (2);
ANALYSIS: TYPE = MIXTURE;
MODEL:
    %OVERALL%
    t ON x;
    %c#1%
    [u$1@15];
    [t@0];
    %c#2%
    [u$1@-15];
    [t];
OUTPUT: TECH1 LOGRANK;
PLOT: TYPE = PLOT2;
```

## Explanation

The CATEGORICAL option is used to specify that the variable u is a binary variable. This variable is a treatment dummy variable where zero represents the control group and one represents the treatment group.

In the MODEL command, in the model for class 1, the threshold for u is fixed at 15 so that the probability that u equals one is zero. By this specification, class 1 is the control group. In the model for class 2, the threshold for u is fixed at -15 so that the probability that u equals one is one. By this specification, class 2 is the treatment group.

In the overall model, the ON statement describes the Cox regression for the survival variable t on the covariate x. In class 1, the intercept in the Cox regression is fixed at zero. In class 2, it is free. This intercept represents the treatment effect.

The LOGRANK option of the OUTPUT command provides a logrank test of the equality of the treatment and control survival curves (Mantel, 1966). By specifying PLOT2 in the PLOT command, the following plots are obtained:

- Kaplan-Meier curve
- Sample log cumulative hazard curve
- Estimated baseline hazard curve
- Estimated baseline survival curve
- Estimated log cumulative baseline curve
- Kaplan-Meier curve with estimated baseline survival curve
- Sample log cumulative hazard curve with estimated log cumulative baseline curve
