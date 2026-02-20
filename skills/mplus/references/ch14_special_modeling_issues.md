# Chapter 14: Special Modeling Issues

## 1. Chapter Overview

This chapter addresses special modeling issues and advanced topics.

**Topics Covered:**
- Model identification
- Non-convergence
- Small sample estimation

## 2. Examples

### Example 14.1: Handling Non-Convergence

```mplus
TITLE: handling non-convergence
DATA: FILE IS ex14.1.dat;
VARIABLE: NAMES ARE y1-y8;
ANALYSIS: ITERATIONS = 2000;
          CONVERGENCE = 0.0001;
MODEL: f1 BY y1-y4;
        f2 BY y5-y8;
        f1 WITH f2;
OUTPUT: STDYX;
```

### Example 14.2: Small Sample Estimation

```mplus
TITLE: small sample estimation
DATA: FILE IS ex14.2.dat;
VARIABLE: NAMES ARE y1-y4;
ANALYSIS: ESTIMATOR = BAYES;
          PROCESSORS = 2;
MODEL: f BY y1-y4;
OUTPUT: STDYX TECH8;
```

## 3. Troubleshooting Guide

| Issue | Solution |
|-------|----------|
| Non-convergence | Increase iterations, check model |
| Negative variance | Add constraints, check data |
| Non-positive definite | Check multicollinearity |

## 4. Related Chapters

- [Chapter 11: Bayesian Analysis](ch11_missing_data_bayesian.md)
