# Chapter 5: Confirmatory Factor Analysis and Structural Equation Modeling

## 1. Chapter Overview

This chapter covers Confirmatory Factor Analysis (CFA) and full Structural Equation Modeling (SEM) in MPlus.

**Topics Covered:**
- CFA with continuous indicators
- CFA with categorical indicators
- Multiple-group CFA
- SEM with mediation
- SEM with moderation
- SEM with latent growth
- ESEM (Exploratory SEM)

**Data Types:** Continuous, categorical, censored, count
**Estimators:** ML, MLR, MLM, MLMV, WLSMV, BAYES

## 2. Theoretical Background

### 2.1 CFA Model

CFA tests a hypothesized factor structure:

```
y = Λf + ε
```

Where factor loadings (Λ) are specified a priori.

### 2.2 SEM Components

| Component | Description |
|-----------|-------------|
| Measurement model | Factor-indicator relationships |
| Structural model | Factor-factor relationships |

## 3. Examples

### Example 5.1: CFA with Continuous Indicators

**Description:** Basic CFA with continuous factor indicators.

```mplus
TITLE: this is an example of a CFA with
       continuous factor indicators
DATA: FILE IS ex5.1.dat;
VARIABLE: NAMES ARE y1-y12;
MODEL: f1 BY y1-y4;
        f2 BY y5-y8;
        f3 BY y9-y12;
OUTPUT: STDYX MODINDICES;
```

**Key Parameters:**
- `BY`: Defines factor loadings
- First loading fixed to 1.0 (default)
- Factor variances free to estimate

---

### Example 5.2: CFA with Categorical Indicators

**Description:** CFA with categorical (binary/ordinal) factor indicators.

```mplus
TITLE: this is an example of a CFA with
       categorical factor indicators
DATA: FILE IS ex5.2.dat;
VARIABLE: NAMES ARE u1-u12;
          CATEGORICAL ARE u1-u12;
MODEL: f1 BY u1-u4;
        f2 BY u5-u8;
        f3 BY u9-u12;
OUTPUT: STDYX;
```

---

### Example 5.3: CFA with Covariates

**Description:** CFA with covariates (MIMIC model).

```mplus
TITLE: this is an example of a CFA with covariates
DATA: FILE IS ex5.3.dat;
VARIABLE: NAMES ARE y1-y12 x1-x3;
MODEL: f1 BY y1-y4;
        f2 BY y5-y8;
        f3 BY y9-y12;
        f1-f3 ON x1-x3;
OUTPUT: STDYX;
```

---

### Example 5.4: Multiple-Group CFA with Equality Constraints

**Description:** CFA with equal factor loadings across groups.

```mplus
TITLE: this is an example of a multiple-group CFA
DATA: FILE IS ex5.4.dat;
VARIABLE: NAMES ARE y1-y12 group;
          GROUPING IS group (1=male 2=female);
MODEL: f1 BY y1-y4;
        f2 BY y5-y8;
        f3 BY y9-y12;
MODEL female:
        f1 BY y1-y4 (1-4);
        f2 BY y5-y8 (5-8);
        f3 BY y9-y12 (9-12);
OUTPUT: STDYX;
```

---

### Example 5.5: Second-Order Factor Analysis

**Description:** Second-order CFA with first-order factors loading on second-order factor.

```mplus
TITLE: this is an example of a second-order factor analysis
DATA: FILE IS ex5.5.dat;
VARIABLE: NAMES ARE y1-y12;
MODEL: f1 BY y1-y4;
        f2 BY y5-y8;
        f3 BY y9-y12;
        g BY f1-f3;
OUTPUT: STDYX;
```

---

### Example 5.6: SEM with Continuous Indicators

**Description:** Full SEM with measurement and structural components.

```mplus
TITLE: this is an example of a SEM with continuous indicators
DATA: FILE IS ex5.6.dat;
VARIABLE: NAMES ARE y1-y12 x1-x3;
MODEL: f1 BY y1-y4;
        f2 BY y5-y8;
        f3 BY y9-y12;
        f3 ON f1 f2 x1-x3;
        f1 WITH f2;
OUTPUT: STDYX;
```

---

### Example 5.7: SEM with Mediation

**Description:** SEM with mediation analysis.

```mplus
TITLE: this is an example of a SEM with mediation
DATA: FILE IS ex5.7.dat;
VARIABLE: NAMES ARE y1-y8 m1-m4 x1-x3;
MODEL: f1 BY y1-y4;
        f2 BY y5-y8;
        fm BY m1-m4;
        f2 ON fm f1 x1-x3;
        fm ON f1 x1-x3;
MODEL INDIRECT: f2 IND fm f1;
OUTPUT: STDYX;
```

---

### Example 5.8: Bayesian CFA

**Description:** CFA using Bayesian estimation with informative priors.

```mplus
TITLE: this is an example of a Bayesian CFA
DATA: FILE IS ex5.8.dat;
VARIABLE: NAMES ARE y1-y12;
ANALYSIS: ESTIMATOR = BAYES;
          PROCESSORS = 2;
MODEL: f1 BY y1-y4*;
        f2 BY y5-y8*;
        f3 BY y9-y12*;
        f1-f3@1;
        MODEL PRIORS:
        f1 BY y1-y4 ~ N(0.8, 0.1);
        f2 BY y5-y8 ~ N(0.8, 0.1);
        f3 BY y9-y12 ~ N(0.8, 0.1);
OUTPUT: STDYX TECH8;
PLOT: TYPE = PLOT2;
```

## 4. Command Options Summary

### MODEL Command Statements

| Statement | Syntax | Description |
|-----------|--------|-------------|
| BY | f BY y1-y4; | Factor definition |
| ON | f2 ON f1; | Regression |
| WITH | f1 WITH f2; | Covariance |
| [ ] | [y1]; | Intercept/mean |
| @ | y1@1; | Fixed value |
| * | y1*; | Free parameter |
| (n) | (1) | Equality constraint |

## 5. Model Fit Evaluation

| Index | Good Fit | Acceptable |
|-------|----------|------------|
| Chi-square p-value | > 0.05 | > 0.01 |
| RMSEA | < 0.05 | < 0.08 |
| CFI/TLI | > 0.95 | > 0.90 |
| SRMR | < 0.05 | < 0.08 |

## 6. Related Chapters

- [Chapter 4: EFA](ch04_exploratory_factor_analysis.md)
- [Chapter 17: MODEL Command](ch17_model_command.md)
