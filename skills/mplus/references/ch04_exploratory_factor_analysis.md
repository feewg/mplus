# Chapter 4: Exploratory Factor Analysis

## 1. Chapter Overview

This chapter covers Exploratory Factor Analysis (EFA) using MPlus, including various rotation methods and extensions.

**Topics Covered:**
- EFA with continuous indicators
- EFA with categorical indicators
- Bi-factor EFA
- EFA with covariates (ESEM)
- Multiple-group EFA
- Longitudinal EFA

**Data Types:** Continuous, categorical
**Estimators:** ML, MLR, WLSMV, ULS

## 2. Theoretical Background

### 2.1 Factor Analysis Model

EFA explores the underlying factor structure without imposing a specific pattern:

```
y = Λf + ε
```

Where:
- y = observed variables
- Λ = factor loadings
- f = latent factors
- ε = unique variances

### 2.2 Rotation Methods

| Rotation | Purpose |
|----------|---------|
| VARIMAX | Orthogonal, maximize variance of loadings |
| QUARTIMAX | Orthogonal, minimize factor complexity |
| GEOMIN | Oblique, allows correlated factors |
| PROMAX | Oblique, based on VARIMAX |
| TARGET | Oblique, target specific loadings |

## 3. Examples

### Example 4.1: EFA with Continuous Indicators

**Description:** Basic EFA with continuous factor indicators.

```mplus
TITLE: this is an example of an EFA with
       continuous factor indicators
DATA: FILE IS ex4.1.dat;
VARIABLE: NAMES ARE y1-y12;
ANALYSIS: TYPE = EFA 2 4;
```

**Code Explanation:**

| Line | Code | Explanation |
|------|------|-------------|
| 1-2 | TITLE | Descriptive title |
| 3 | DATA: FILE IS | Specifies data file |
| 4 | VARIABLE | Variable names |
| 5 | ANALYSIS: TYPE = EFA 2 4 | EFA with 2-4 factors |

**Key Parameters:**
- `TYPE = EFA min max`: Specifies range of factors to extract
- Default rotation is GEOMIN (oblique)

---

### Example 4.2: EFA with Categorical Indicators

**Description:** EFA with categorical (binary/ordinal) factor indicators.

```mplus
TITLE: this is an example of an EFA with
       categorical factor indicators
DATA: FILE IS ex4.2.dat;
VARIABLE: NAMES ARE u1-u12;
          CATEGORICAL ARE u1-u12;
ANALYSIS: TYPE = EFA 2 4;
```

**Key Point:** With categorical indicators, WLSMV is the default estimator.

---

### Example 4.3: EFA with Continuous and Categorical Indicators

**Description:** EFA with mixed continuous and categorical indicators.

```mplus
TITLE: this is an example of an EFA with continuous
       and categorical factor indicators
DATA: FILE IS ex4.3.dat;
VARIABLE: NAMES ARE y1-y6 u7-u12;
          CATEGORICAL ARE u7-u12;
ANALYSIS: TYPE = EFA 2 4;
```

---

### Example 4.4: EFA with Covariates

**Description:** EFA with covariates (ESEM approach).

```mplus
TITLE: this is an example of an EFA with covariates
DATA: FILE IS ex4.4.dat;
VARIABLE: NAMES ARE y1-y12 x1-x3;
ANALYSIS: TYPE = EFA 2 2;
MODEL: f1-f2 ON x1-x3;
```

---

### Example 4.5: EFA with Covariates and Direct Effects

**Description:** EFA with covariates and direct effects from covariates to indicators.

```mplus
TITLE: this is an example of an EFA with covariates
       and direct effects
DATA: FILE IS ex4.5.dat;
VARIABLE: NAMES ARE y1-y12 x1-x3;
ANALYSIS: TYPE = EFA 2 2;
MODEL: f1-f2 ON x1-x3;
        y1 ON x1;
        y2 ON x2;
```

---

### Example 4.6: Bi-Factor EFA

**Description:** Bi-factor EFA with general and specific factors.

```mplus
TITLE: this is an example of a bi-factor EFA
DATA: FILE IS ex4.6.dat;
VARIABLE: NAMES ARE y1-y12;
ANALYSIS: TYPE = EFA 1 4;
          ROTATION = BI-GEOMIN;
```

**Key Parameters:**
- `ROTATION = BI-GEOMIN`: Bi-factor rotation
- First factor is the general factor
- Remaining factors are specific (orthogonal to general)

---

### Example 4.7: EFA with Target Rotation

**Description:** EFA with target rotation for confirmatory purposes.

```mplus
TITLE: this is an example of an EFA with target rotation
DATA: FILE IS ex4.7.dat;
VARIABLE: NAMES ARE y1-y12;
ANALYSIS: TYPE = EFA 3 3;
          ROTATION = TARGET (OBLIQUE);
MODEL: f1 BY y1-y4 (*1);
        f2 BY y5-y8 (*1);
        f3 BY y9-y12 (*1);
```

**Key Point:** `(*1)` indicates target loadings (approximate zeros elsewhere).

---

### Example 4.8: Multiple-Group EFA

**Description:** EFA with measurement invariance across groups.

```mplus
TITLE: this is an example of a multiple-group EFA
DATA: FILE IS ex4.8.dat;
VARIABLE: NAMES ARE y1-y12 group;
          GROUPING IS group (1=male 2=female);
ANALYSIS: TYPE = EFA 2 2;
          ROTATION = GEOMIN;
```

---

### Example 4.9: EFA with Known Class Membership

**Description:** EFA with known classes (multiple-group with covariates).

```mplus
TITLE: this is an example of an EFA with known class membership
DATA: FILE IS ex4.9.dat;
VARIABLE: NAMES ARE y1-y12 x group;
          USEVARIABLES ARE y1-y12 x;
          CLASSES = c (2);
          KNOWNCLASS = c (group = 1-2);
ANALYSIS: TYPE = MIXTURE EFA 2 2;
MODEL: %OVERALL%
        f1-f2 ON x;
```

---

### Example 4.10: Longitudinal EFA

**Description:** EFA with longitudinal data.

```mplus
TITLE: this is an example of a longitudinal EFA
DATA: FILE IS ex4.10.dat;
VARIABLE: NAMES ARE y11-y14 y21-y24 y31-y34;
ANALYSIS: TYPE = EFA 2 2;
          ROTATION = GEOMIN;
```

---

### Example 4.11: EFA in CFA Framework (ESEM)

**Description:** Using EFA results in a CFA/SEM framework.

```mplus
TITLE: this is an example of ESEM
DATA: FILE IS ex4.11.dat;
VARIABLE: NAMES ARE y1-y12 x;
ANALYSIS: TYPE = EFA 2 2 UW 2 2 UB;
MODEL: f1-f2 BY y1-y12 (*1);
        f1-f2 ON x;
        f1 WITH f2;
OUTPUT: STDYX;
```

**Key Parameters:**
- `UW`: Within-level EFA
- `UB`: Between-level EFA (for multilevel)

## 4. Command Options Summary

### ANALYSIS Command Options

| Option | Example | Description |
|--------|---------|-------------|
| TYPE | TYPE = EFA 2 4 | EFA with 2-4 factors |
| ROTATION | ROTATION = GEOMIN | Rotation method |
| ROTATION | ROTATION = BI-GEOMIN | Bi-factor rotation |
| ROTATION | ROTATION = TARGET | Target rotation |

### Rotation Methods

| Method | Type | Use Case |
|--------|------|----------|
| VARIMAX | Orthogonal | Uncorrelated factors |
| QUARTIMAX | Orthogonal | Simple structure |
| GEOMIN | Oblique | Correlated factors (default) |
| PROMAX | Oblique | Correlated factors |
| BI-GEOMIN | Oblique | General + specific factors |
| TARGET | Oblique | Confirmatory EFA |

## 5. Output Interpretation

### Factor Loadings
- Values > 0.3: Weak loading
- Values > 0.5: Moderate loading
- Values > 0.7: Strong loading

### Model Fit
- Chi-square: Good fit if p > 0.05
- RMSEA: < 0.05 excellent, < 0.08 good
- CFI/TLI: > 0.95 good fit

## 6. Related Chapters

- [Chapter 5: CFA and SEM](ch05_cfa_sem.md)
- [Chapter 16: ANALYSIS Command](ch16_analysis_command.md)
