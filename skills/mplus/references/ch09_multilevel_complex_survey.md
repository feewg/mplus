# Chapter 9: Multilevel Modeling with Complex Survey Data

## 1. Chapter Overview

This chapter covers two-level and three-level models with complex survey features.

**Topics Covered:**
- Two-level models (random intercept, random slope)
- Three-level models
- Cross-classified models
- Complex survey data

**Data Types:** Continuous, categorical
**Estimators:** ML, MLR, WLSMV

## 2. Examples

### Example 9.1: Two-Level Random Intercept

```mplus
TITLE: two-level random intercept model
DATA: FILE IS ex9.1.dat;
VARIABLE: NAMES ARE y x w cluster;
          CLUSTER IS cluster;
ANALYSIS: TYPE = TWOLEVEL;
MODEL: %WITHIN%
        y ON x;
        %BETWEEN%
        y ON w;
OUTPUT: STDYX;
```

### Example 9.2: Two-Level Random Slope

```mplus
TITLE: two-level random slope model
DATA: FILE IS ex9.2.dat;
VARIABLE: NAMES ARE y x w cluster;
          CLUSTER IS cluster;
ANALYSIS: TYPE = TWOLEVEL RANDOM;
MODEL: %WITHIN%
        s | y ON x;
        %BETWEEN%
        y s ON w;
        y WITH s;
OUTPUT: STDYX;
```

### Example 9.3: Three-Level Model

```mplus
TITLE: three-level model
DATA: FILE IS ex9.3.dat;
VARIABLE: NAMES ARE y x school class;
          CLUSTER IS school class;
ANALYSIS: TYPE = THREELEVEL;
MODEL: %WITHIN%
        y ON x;
        %BETWEEN class%
        y;
        %BETWEEN school%
        y;
OUTPUT: STDYX;
```

## 3. Related Chapters

- [Chapter 10: Multilevel Mixture](ch10_multilevel_mixture.md)
