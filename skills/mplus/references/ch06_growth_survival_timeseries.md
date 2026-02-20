# Chapter 6: Growth, Survival, and N=1 Time Series

## 1. Chapter Overview

This chapter covers growth modeling, survival analysis, and intensive longitudinal (N=1 time series) analysis.

**Topics Covered:**
- Linear and nonlinear growth models
- Growth models with covariates
- Parallel process growth models
- Survival analysis
- Intensive longitudinal models (DSEM, RDSEM)

**Data Types:** Continuous, censored, categorical, count
**Estimators:** ML, MLR, MLM, BAYES

## 2. Theoretical Background

### 2.1 Growth Model Structure

Growth models estimate individual trajectories:

```
y_ij = η_0i + η_1i*time_j + ε_ij
```

Where:
- η_0i = random intercept (initial status)
- η_1i = random slope (growth rate)

## 3. Examples

### Example 6.1: Linear Growth Model

```mplus
TITLE: this is an example of a linear growth model
DATA: FILE IS ex6.1.dat;
VARIABLE: NAMES ARE y1-y4 x;
MODEL: i s | y1@0 y2@1 y3@2 y4@3;
        i s ON x;
OUTPUT: STDYX;
```

### Example 6.2: Quadratic Growth Model

```mplus
TITLE: this is an example of a quadratic growth model
DATA: FILE IS ex6.2.dat;
VARIABLE: NAMES ARE y1-y5;
MODEL: i s q | y1@0 y2@1 y3@2 y4@3 y5@4;
OUTPUT: STDYX;
```

### Example 6.3: Parallel Process Growth Model

```mplus
TITLE: parallel process growth model
DATA: FILE IS ex6.3.dat;
VARIABLE: NAMES ARE y11-y14 y21-y24;
MODEL: i1 s1 | y11@0 y12@1 y13@2 y14@3;
        i2 s2 | y21@0 y22@1 y23@2 y24@3;
        i1 WITH i2 s2;
        s1 WITH i2 s2;
OUTPUT: STDYX;
```

### Example 6.4: Survival Analysis

```mplus
TITLE: this is an example of a survival analysis
DATA: FILE IS ex6.4.dat;
VARIABLE: NAMES ARE t x u;
          SURVIVAL ARE t (ALL);
          TIMECENSORED ARE u (0 = NOT 1 = RIGHT);
MODEL: t ON x;
OUTPUT: STDYX;
```

### Example 6.5: DSEM

```mplus
TITLE: this is an example of a DSEM
DATA: FILE IS ex6.5.dat;
VARIABLE: NAMES ARE id time y x;
          USEVARIABLES ARE y x;
          LAGGED = y(1) x(1);
          CLUSTER IS id;
ANALYSIS: TYPE = TWOLEVEL RANDOM;
          ESTIMATOR = BAYES;
          PROCESSORS = 2;
MODEL: %WITHIN%
        s | y ON y&1;
        y ON x;
        %BETWEEN%
        y s ON x;
OUTPUT: STDYX TECH8;
PLOT: TYPE = PLOT3;
```

## 4. Command Options Summary

| Symbol | Syntax | Description |
|--------|--------|-------------|
| \| | i s \| y1@0 y2@1; | Define growth factors |
| TSCORES | TSCORES ARE t1-t4; | Individual time scores |
| SURVIVAL | SURVIVAL ARE t (ALL); | Survival variable |
| LAGGED | LAGGED = y(1); | Lagged variable |

## 5. Related Chapters

- [Chapter 7: Mixture Cross-Sectional](ch07_mixture_crosssectional.md)
- [Chapter 8: Mixture Longitudinal](ch08_mixture_longitudinal.md)
