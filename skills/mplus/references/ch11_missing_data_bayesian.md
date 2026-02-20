# Chapter 11: Missing Data Modeling and Bayesian Analysis

## 1. Chapter Overview

This chapter covers missing data handling using FIML and Bayesian estimation methods.

**Topics Covered:**
- Full Information Maximum Likelihood (FIML)
- Multiple imputation
- Bayesian estimation

## 2. Examples

### Example 11.1: FIML for Missing Data

```mplus
TITLE: FIML for missing data
DATA: FILE IS ex11.1.dat;
VARIABLE: NAMES ARE y1-y4 x;
          MISSING ARE ALL (-999);
MODEL: f BY y1-y4;
        f ON x;
OUTPUT: STDYX;
```

### Example 11.2: Multiple Imputation

```mplus
TITLE: multiple imputation
DATA: FILE IS ex11.2.dat;
VARIABLE: NAMES ARE y1-y4 x;
DATA IMPUTATION:
        IMPUTE = y1-y4 x;
        NDATASETS = 20;
        SAVE = imputed_data.dat;
```

### Example 11.3: Bayesian CFA

```mplus
TITLE: Bayesian CFA
DATA: FILE IS ex11.3.dat;
VARIABLE: NAMES ARE y1-y8;
ANALYSIS: ESTIMATOR = BAYES;
          PROCESSORS = 2;
MODEL: f1 BY y1-y4*;
        f2 BY y5-y8*;
        f1-f2@1;
        MODEL PRIORS:
        f1 BY y1-y4 ~ N(0.8, 0.1);
OUTPUT: STDYX TECH8;
PLOT: TYPE = PLOT2;
```

## 3. Related Chapters

- [Chapter 5: CFA and SEM](ch05_cfa_sem.md)
