# Chapter 3: Regression and Path Analysis

## 1. Chapter Overview

This chapter covers regression analysis and path analysis using MPlus. These are fundamental techniques for examining relationships between variables.

**Topics Covered:**
- Linear regression
- Censored regression
- Categorical regression (logistic, probit, multinomial)
- Poisson and negative binomial regression
- Path analysis with observed and latent variables
- Mediation and moderation analysis

**Data Types:** Continuous, censored, categorical, count
**Estimators:** ML, MLR, MLM, MLMV, WLSMV, BAYES

## 2. Theoretical Background

### 2.1 Regression Analysis

Regression models the relationship between a dependent variable and one or more independent variables:

```
y = β₀ + β₁x₁ + β₂x₂ + ε
```

### 2.2 Path Analysis

Path analysis extends regression to model complex systems of relationships among observed variables using directed graphs.

## 3. Examples

### Example 3.1: Linear Regression

**Description:** Basic linear regression with continuous dependent variable and two covariates.

```mplus
TITLE: this is an example of a linear regression
       for a continuous observed dependent
       variable with two covariates
DATA: FILE IS ex3.1.dat;
VARIABLE: NAMES ARE y1-y6 x1-x4;
          USEVARIABLES ARE y1 x1 x3;
MODEL: y1 ON x1 x3;
```

**Code Explanation:**

| Line | Code | Explanation |
|------|------|-------------|
| 1-3 | TITLE | Descriptive title |
| 4 | DATA: FILE IS | Specifies data file |
| 5-6 | VARIABLE | Defines variables to use |
| 7 | MODEL: y1 ON x1 x3 | Linear regression model |

**Key Parameters:**
- `USEVARIABLES`: Selects subset of variables for analysis
- `ON`: Defines regression relationship

**Output Interpretation:**
- Regression coefficients (Estimates)
- Standard errors
- t-values and p-values
- R-squared for dependent variable

---

### Example 3.2: Censored Regression

**Description:** Regression with censored dependent variable (values below/above a threshold not observed).

```mplus
TITLE: this is an example of a censored regression
       for a censored dependent variable
       using the default estimator
DATA: FILE IS ex3.2.dat;
VARIABLE: NAMES ARE y1-y6 x1-x4;
          USEVARIABLES ARE y1 x1 x3;
          CENSORED ARE y1 (b);
MODEL: y1 ON x1 x3;
```

**Key Parameters:**
- `CENSORED ARE y1 (b)`: Specifies left-censoring (below)
- `CENSORED ARE y1 (a)`: Specifies right-censoring (above)
- `CENSORED ARE y1 (bi)`: Left-censoring with inflation
- `CENSORED ARE y1 (ai)`: Right-censoring with inflation

---

### Example 3.3: Censored Regression with Covariates Influencing Censoring

**Description:** Censored regression where covariates influence the censoring process.

```mplus
TITLE: this is an example of a censored regression
       with a censored dependent variable
       where censoring is influenced by covariates
DATA: FILE IS ex3.3.dat;
VARIABLE: NAMES ARE y1-y6 x1-x4;
          USEVARIABLES ARE y1 x1 x3;
          CENSORED ARE y1 (bi);
MODEL: y1 ON x1 x3;
        y1#1 ON x1;
```

**Key Point:** `y1#1` refers to the censoring (inflation) part of the model.

---

### Example 3.4: Probit Regression

**Description:** Probit regression for binary outcome with continuous covariates.

```mplus
TITLE: this is an example of a probit regression
       for a binary or ordered categorical
       dependent variable with two covariates
DATA: FILE IS ex3.4.dat;
VARIABLE: NAMES ARE u y1-y5 x1-x4;
          USEVARIABLES ARE u x1 x3;
          CATEGORICAL ARE u;
MODEL: u ON x1 x3;
```

**Key Parameters:**
- `CATEGORICAL ARE u`: Specifies binary/ordinal variable
- Default link is probit for WLSMV, logit for ML

---

### Example 3.5: Logistic Regression

**Description:** Logistic regression for binary outcome.

```mplus
TITLE: this is an example of a logistic regression
       for a binary or ordered categorical
       dependent variable with two covariates
DATA: FILE IS ex3.5.dat;
VARIABLE: NAMES ARE u y1-y5 x1-x4;
          USEVARIABLES ARE u x1 x3;
          CATEGORICAL ARE u;
ANALYSIS: ESTIMATOR = ML;
MODEL: u ON x1 x3;
```

**Key Point:** With `ESTIMATOR = ML`, the default link is logit.

---

### Example 3.6: Multinomial Logistic Regression

**Description:** Multinomial logistic regression for nominal outcome.

```mplus
TITLE: this is an example of a multinomial logistic
       regression for a nominal dependent
       variable with two covariates
DATA: FILE IS ex3.6.dat;
VARIABLE: NAMES ARE u y1-y5 x1-x4;
          USEVARIABLES ARE u x1 x3;
          NOMINAL ARE u;
MODEL: u ON x1 x3;
```

**Key Parameters:**
- `NOMINAL ARE u`: Specifies unordered categorical variable

---

### Example 3.7: Poisson Regression

**Description:** Poisson regression for count outcomes.

```mplus
TITLE: this is an example of a Poisson regression
       for a count dependent variable with two covariates
DATA: FILE IS ex3.7.dat;
VARIABLE: NAMES ARE u y1-y5 x1-x4;
          USEVARIABLES ARE u x1 x3;
          COUNT ARE u;
MODEL: u ON x1 x3;
```

---

### Example 3.8: Zero-Inflated Poisson Regression

**Description:** Zero-inflated Poisson for count data with excess zeros.

```mplus
TITLE: this is an example of a zero-inflated Poisson
       regression for a count dependent variable
       with two covariates
DATA: FILE IS ex3.8.dat;
VARIABLE: NAMES ARE u y1-y5 x1-x4;
          USEVARIABLES ARE u x1 x3;
          COUNT ARE u (i);
MODEL: u ON x1 x3;
        u#1 ON x1 x3;
```

**Key Parameters:**
- `COUNT ARE u (i)`: Zero-inflated Poisson
- `u#1`: Inflation (zero-generating) part of model

---

### Example 3.9: Negative Binomial Regression

**Description:** Negative binomial regression for overdispersed count data.

```mplus
TITLE: this is an example of a negative binomial
       regression for a count dependent variable
       with two covariates
DATA: FILE IS ex3.9.dat;
VARIABLE: NAMES ARE u y1-y5 x1-x4;
          USEVARIABLES ARE u x1 x3;
          COUNT ARE u (nb);
MODEL: u ON x1 x3;
```

**Key Parameters:**
- `COUNT ARE u (nb)`: Negative binomial
- `COUNT ARE u (nbi)`: Zero-inflated negative binomial

---

### Example 3.10: Random Coefficient Regression

**Description:** Two-level random coefficient (random slope) model.

```mplus
TITLE: this is an example of a two-level
       random coefficient (random slope) model
DATA: FILE IS ex3.10.dat;
VARIABLE: NAMES ARE y x w cluster;
          USEVARIABLES ARE y x w cluster;
          CLUSTER IS cluster;
ANALYSIS: TYPE = TWOLEVEL RANDOM;
MODEL: %WITHIN%
        s | y ON x;
        %BETWEEN%
        y s ON w;
        y WITH s;
```

**Key Parameters:**
- `CLUSTER IS cluster`: Defines clustering variable
- `TYPE = TWOLEVEL RANDOM`: Enables random slopes
- `s | y ON x`: Defines random slope `s`

---

### Example 3.11: Path Analysis with Continuous Dependent Variables

**Description:** Path analysis with continuous dependent variables.

```mplus
TITLE: this is an example of a path analysis
       with continuous dependent variables
DATA: FILE IS ex3.11.dat;
VARIABLE: NAMES ARE y1-y6 x1-x4;
          USEVARIABLES ARE y1-y3 x1-x3;
MODEL: y1 ON x1 x2 x3;
        y2 ON y1 x2;
        y3 ON y1 y2 x1;
```

---

### Example 3.12: Path Analysis with Categorical Dependent Variables

**Description:** Path analysis with categorical dependent variables.

```mplus
TITLE: this is an example of a path analysis
       with categorical dependent variables
DATA: FILE IS ex3.12.dat;
VARIABLE: NAMES ARE u1-u6 x1-x4;
          USEVARIABLES ARE u1-u3 x1-x3;
          CATEGORICAL ARE u1-u3;
MODEL: u1 ON x1 x2 x3;
        u2 ON u1 x2;
        u3 ON u1 u2 x1;
```

---

### Example 3.13: Path Analysis with Categorical Mediator

**Description:** Path analysis where the mediator is categorical.

```mplus
TITLE: this is an example of a path analysis
       with a categorical mediator variable
DATA: FILE IS ex3.13.dat;
VARIABLE: NAMES ARE y u x1-x3;
          USEVARIABLES ARE y u x1-x3;
          CATEGORICAL ARE u;
MODEL: u ON x1 x2 x3;
        y ON u x1;
```

---

### Example 3.14: Moderation Analysis

**Description:** Regression with interaction (moderation).

```mplus
TITLE: this is an example of a moderation analysis
DATA: FILE IS ex3.14.dat;
VARIABLE: NAMES ARE y x z xz;
          USEVARIABLES ARE y x z xz;
DEFINE: xz = x * z;
MODEL: y ON x z xz;
```

**Alternative:** Use `XWITH` for latent variable interactions.

---

### Example 3.15: Mediation Analysis

**Description:** Simple mediation model with indirect effect.

```mplus
TITLE: this is an example of a mediation analysis
DATA: FILE IS ex3.15.dat;
VARIABLE: NAMES ARE y m x;
          USEVARIABLES ARE y m x;
MODEL: y ON m x;
        m ON x;
MODEL INDIRECT: y IND m x;
```

**Key Parameters:**
- `MODEL INDIRECT`: Requests indirect effects
- `y IND m x`: Specific indirect effect x → m → y

---

### Example 3.16: Multiple Mediation Analysis

**Description:** Multiple mediation with specific indirect effects.

```mplus
TITLE: this is an example of a multiple mediation analysis
DATA: FILE IS ex3.16.dat;
VARIABLE: NAMES ARE y m1 m2 x;
          USEVARIABLES ARE y m1 m2 x;
MODEL: y ON m1 m2 x;
        m1 ON x;
        m2 ON x;
MODEL INDIRECT: y IND m1 x;
                y IND m2 x;
```

---

### Example 3.17: Moderated Mediation Analysis

**Description:** Conditional process analysis (moderated mediation).

```mplus
TITLE: this is an example of a moderated mediation analysis
DATA: FILE IS ex3.17.dat;
VARIABLE: NAMES ARE y m x z;
          USEVARIABLES ARE y m x z;
DEFINE: xz = x * z;
MODEL: y ON m x z xz;
        m ON x;
MODEL INDIRECT: y MOD m x z;
```

---

### Example 3.18: Multilevel Path Analysis

**Description:** Two-level path analysis with random intercepts.

```mplus
TITLE: this is an example of a two-level path analysis
DATA: FILE IS ex3.18.dat;
VARIABLE: NAMES ARE y1 y2 x1 x2 cluster;
          USEVARIABLES ARE y1 y2 x1 x2 cluster;
          CLUSTER IS cluster;
ANALYSIS: TYPE = TWOLEVEL;
MODEL: %WITHIN%
        y1 ON x1 x2;
        y2 ON y1 x2;
        %BETWEEN%
        y1 ON x1;
        y2 ON y1;
```

## 4. Command Options Summary

### VARIABLE Command Options

| Option | Example | Description |
|--------|---------|-------------|
| USEVARIABLES | USEVARIABLES ARE y1 x1 x3; | Select variables for analysis |
| CATEGORICAL | CATEGORICAL ARE u1; | Binary/ordinal variables |
| NOMINAL | NOMINAL ARE u1; | Unordered categorical |
| COUNT | COUNT ARE u1 (i); | Count variables |
| CENSORED | CENSORED ARE y1 (b); | Censored variables |

### MODEL Command Statements

| Statement | Syntax | Description |
|-----------|--------|-------------|
| ON | y ON x1 x2; | Regression |
| WITH | y1 WITH y2; | Covariance/correlation |
| PON | y1-y3 PON x1-x3; | Paired regression |

## 5. Common Issues and Solutions

### Issue: Non-convergence
**Solution:** Check model specification, starting values, increase iterations

### Issue: Standard errors not computed
**Solution:** Check for model identification, boundary constraints

### Issue: Negative variance
**Solution:** Add lower bounds or respecify model

## 6. Related Chapters

- [Chapter 4: EFA](ch04_exploratory_factor_analysis.md)
- [Chapter 5: CFA and SEM](ch05_cfa_sem.md)
- [Chapter 15: Command Reference](ch15_title_data_variable_define.md)
