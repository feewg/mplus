# Chapter 7: Mixture Modeling with Cross-Sectional Data

## 1. Chapter Overview

This chapter covers mixture models for cross-sectional data, including Latent Class Analysis (LCA) and Latent Profile Analysis (LPA).

**Topics Covered:**
- Latent Class Analysis (LCA)
- Latent Profile Analysis (LPA)
- Factor mixture models
- Mixture models with covariates
- Mixture models with distal outcomes

**Data Types:** Continuous, categorical, count
**Estimators:** ML, MLR

## 2. Theoretical Background

### 2.1 Mixture Model Concept

Mixture models identify unobserved subpopulations (latent classes):

```
f(y) = Σ π_c * f_c(y)
```

Where:
- π_c = class probability
- f_c(y) = class-specific distribution

## 3. Examples

### Example 7.1: Latent Class Analysis (LCA)

```mplus
TITLE: this is an example of a LCA
DATA: FILE IS ex7.1.dat;
VARIABLE: NAMES ARE u1-u10;
          USEVARIABLES ARE u1-u10;
          CATEGORICAL ARE u1-u10;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE;
          STARTS = 200 50;
MODEL: %OVERALL%
        %c#1%
        [u1$1-u10$1];
        %c#2%
        [u1$1-u10$1];
        %c#3%
        [u1$1-u10$1];
OUTPUT: TECH1 TECH8 TECH11 TECH14;
```

### Example 7.2: Latent Profile Analysis (LPA)

```mplus
TITLE: this is an example of a LPA
DATA: FILE IS ex7.2.dat;
VARIABLE: NAMES ARE y1-y6;
          USEVARIABLES ARE y1-y6;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE;
          STARTS = 200 50;
OUTPUT: TECH1 TECH8 TECH11 TECH14;
```

### Example 7.3: Mixture Model with Covariates

```mplus
TITLE: mixture model with covariates
DATA: FILE IS ex7.3.dat;
VARIABLE: NAMES ARE u1-u10 x1-x3;
          USEVARIABLES ARE u1-u10 x1-x3;
          CATEGORICAL ARE u1-u10;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE;
MODEL: %OVERALL%
        c ON x1-x3;
        %c#1%
        [u1$1-u10$1];
OUTPUT: TECH1 TECH8 TECH11 TECH14;
```

### Example 7.4: Mixture Model with Distal Outcomes

```mplus
TITLE: mixture model with distal outcomes
DATA: FILE IS ex7.4.dat;
VARIABLE: NAMES ARE u1-u10 y;
          USEVARIABLES ARE u1-u10 y;
          CATEGORICAL ARE u1-u10;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE;
MODEL: %OVERALL%
        %c#1%
        [u1$1-u10$1];
        y;
        [y];
        %c#2%
        [u1$1-u10$1];
        y;
        [y];
        %c#3%
        [u1$1-u10$1];
        y;
        [y];
OUTPUT: TECH1 TECH8 TECH11 TECH14;
```

### Example 7.5: Factor Mixture Model

```mplus
TITLE: factor mixture model
DATA: FILE IS ex7.5.dat;
VARIABLE: NAMES ARE y1-y8;
          USEVARIABLES ARE y1-y8;
          CLASSES = c (2);
ANALYSIS: TYPE = MIXTURE;
          STARTS = 200 50;
MODEL: %OVERALL%
        f BY y1-y8;
        %c#1%
        f BY y1-y8;
        [f@0];
        f@1;
        %c#2%
        f BY y1-y8;
        [f];
        f;
OUTPUT: TECH1 TECH8 TECH11 TECH14;
```

## 4. Key Options

| Option | Description |
|--------|-------------|
| CLASSES = c (n) | Define n latent classes |
| STARTS | Random start values |
| TECH11 | LMR-LRT test |
| TECH14 | BLRT test |

## 5. Related Chapters

- [Chapter 8: Mixture Longitudinal](ch08_mixture_longitudinal.md)
- [Chapter 10: Multilevel Mixture](ch10_multilevel_mixture.md)
