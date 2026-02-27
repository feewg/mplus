# EXAMPLE 11.3: MODELING WITH DATA NOT MISSING AT RANDOM (NMAR) USING THE DIGGLE-KENWARD SELECTION MODEL

## Description

This example demonstrates a linear growth model at six time points with missing data on a continuous outcome where the data are not missing at random (NMAR). Dropout is related to both past and current outcomes where the current outcome is missing for those who drop out.

The Diggle-Kenward selection model is used to jointly estimate a growth model for the outcome and a discrete-time survival model for the dropout indicators.

## Mplus Input

```mplus
TITLE: this is an example of modeling with data
not missing at random (NMAR) using the
Diggle-Kenward selection model

DATA: FILE = ex11.3.dat;

VARIABLE: NAMES = z1-z5 y0 y1-y5;
USEVARIABLES = y0-y5 d1-d5;
MISSING = ALL (999);
CATEGORICAL = d1-d5;

DATA MISSING:
NAMES = y0-y5;
TYPE = SDROPOUT;
BINARY = d1-d5;

ANALYSIS: ESTIMATOR = ML;
ALGORITHM = INTEGRATION;
INTEGRATION = MONTECARLO;
PROCESSORS = 2;

MODEL: i s | y0@0 y1@1 y2@2 y3@3 y4@4 y5@5;
d1 ON y0 (1)
y1 (2);
d2 ON y1 (1)
y2 (2);
d3 ON y2 (1)
y3 (2);
d4 ON y3 (1)
y4 (2);
d5 ON y4 (1)
y5 (2);

OUTPUT: TECH1;
```

## Explanation

The DATA MISSING command creates dropout indicators:
- TYPE=SDROPOUT specifies binary discrete-time (event-history) survival dropout indicators

The ANALYSIS command specifies:
- ESTIMATOR=ML for maximum likelihood estimation
- ALGORITHM=INTEGRATION because latent continuous variables corresponding to missing data influence the binary dropout indicators
- INTEGRATION=MONTECARLO because dimensions of integration vary across observations

The MODEL command defines:
1. A growth model for the outcome with intercept (i) and slope (s) factors
   - Time scores fixed at 0, 1, 2, 3, 4, and 5

2. Logistic regressions of dropout indicators on outcomes:
   - Each dropout indicator is regressed on the outcome at the previous time point and the current time point
   - The outcome at the current time point is latent (missing) for those who dropped out
   - Logistic regression coefficients are held equal across time using labels (1) and (2)

In the picture, y1 through y5 are shown in both circles and squares where circles imply dropout has occurred and squares imply dropout has not occurred.
