# Chapter 10: Multilevel Mixture Modeling

## 1. Chapter Overview

This chapter covers mixture models with multilevel data structures.

**Topics Covered:**
- Two-level mixture models
- Multilevel growth mixture models

**Data Types:** Continuous, categorical
**Estimators:** ML, MLR

## 2. Examples

### Example 10.1: Two-Level Mixture Model

```mplus
TITLE: two-level mixture model
DATA: FILE IS ex10.1.dat;
VARIABLE: NAMES ARE y1-y4 cluster;
          CLUSTER IS cluster;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE TWOLEVEL;
MODEL: %WITHIN%
        %OVERALL%
        f BY y1-y4;
        %c#1%
        f BY y1-y4;
        %BETWEEN%
        f;
OUTPUT: TECH1 TECH8;
```

### Example 10.2: Multilevel Growth Mixture Model

```mplus
TITLE: multilevel growth mixture model
DATA: FILE IS ex10.2.dat;
VARIABLE: NAMES ARE y1-y4 cluster;
          CLUSTER IS cluster;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE TWOLEVEL;
MODEL: %WITHIN%
        %OVERALL%
        i s | y1@0 y2@1 y3@2 y4@3;
        %c#1%
        [i s];
        %BETWEEN%
        i s;
OUTPUT: TECH1 TECH8;
```

## 3. Related Chapters

- [Chapter 7: Mixture Cross-Sectional](ch07_mixture_crosssectional.md)
- [Chapter 8: Mixture Longitudinal](ch08_mixture_longitudinal.md)
