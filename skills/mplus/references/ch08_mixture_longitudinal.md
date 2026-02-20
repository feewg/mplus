# Chapter 8: Mixture Modeling with Longitudinal Data

## 1. Chapter Overview

This chapter covers growth mixture models and longitudinal mixture models.

**Topics Covered:**
- Growth Mixture Models (GMM)
- Latent Class Growth Analysis (LCGA)
- Hidden Markov Models

**Data Types:** Continuous, categorical
**Estimators:** ML, MLR

## 2. Examples

### Example 8.1: Growth Mixture Model (GMM)

```mplus
TITLE: this is an example of a GMM
DATA: FILE IS ex8.1.dat;
VARIABLE: NAMES ARE y1-y5;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE;
          STARTS = 400 100;
MODEL: %OVERALL%
        i s | y1@0 y2@1 y3@2 y4@3 y5@4;
        %c#1%
        [i s];
        i (1);
        s (2);
OUTPUT: TECH1 TECH8 TECH11 TECH14;
PLOT: TYPE = PLOT3;
```

### Example 8.2: Latent Class Growth Analysis (LCGA)

```mplus
TITLE: this is an example of a LCGA
DATA: FILE IS ex8.2.dat;
VARIABLE: NAMES ARE y1-y5;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE;
MODEL: %OVERALL%
        i s | y1@0 y2@1 y3@2 y4@3 y5@4;
        i-s@0;  ! No variance within class
OUTPUT: TECH1 TECH8;
```

### Example 8.3: GMM with Covariates

```mplus
TITLE: GMM with covariates
DATA: FILE IS ex8.3.dat;
VARIABLE: NAMES ARE y1-y5 x;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE;
MODEL: %OVERALL%
        i s | y1@0 y2@1 y3@2 y4@3 y5@4;
        c ON x;
OUTPUT: TECH1 TECH8;
```

## 3. Related Chapters

- [Chapter 6: Growth Models](ch06_growth_survival_timeseries.md)
- [Chapter 7: Mixture Cross-Sectional](ch07_mixture_crosssectional.md)
