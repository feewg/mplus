# EXAMPLE 11.8: MULTIPLE IMPUTATION USING A TWO-LEVEL FACTOR MODEL WITH CATEGORICAL OUTCOMES FOLLOWED BY THE ESTIMATION OF A GROWTH MODEL

## Description

This example demonstrates multiple imputation using a two-level factor model with categorical outcomes, followed by the estimation of a two-level multiple indicator growth model with categorical outcomes using two-level weighted least squares estimation.

## Part 1: Multiple Imputation Using Two-Level Factor Model

### Mplus Input

```mplus
TITLE: this is an example of multiple imputation
using a two-level factor model with
categorical outcomes

DATA: FILE = ex11.8.dat;

VARIABLE: NAMES are u11 u21 u31 u12 u22 u32 u13 u23
u33 clus;
CATEGORICAL = u11-u33;
CLUSTER = clus;
MISSING = ALL (999);

ANALYSIS: TYPE = TWOLEVEL;
ESTIMATOR = BAYES;
PROCESSORS = 2;

MODEL: %WITHIN%
f1w BY u11
u21 (1)
u31 (2);
f2w BY u12
u22 (1)
u32 (2);
f3w BY u13
u23 (1)
u33 (2);
%BETWEEN%
fb BY u11-u33*1;
fb@1;

DATA IMPUTATION:
IMPUTE = u11-u33(c);
SAVE = ex11.8imp*.dat;

OUTPUT: TECH1 TECH8;
```

### Explanation for Part 1

The ANALYSIS command specifies:
- TYPE=TWOLEVEL for multilevel model with random intercepts
- ESTIMATOR=BAYES for Bayesian estimation

The MODEL command defines:
1. Within-level factors (f1w, f2w, f3w) with equality constraints on loadings
2. Between-level factor (fb) measured by all indicators

The DATA IMPUTATION command:
- IMPUTE: Imputes missing values for categorical variables (c)
- SAVE: Saves imputed data sets as ex11.8imp*.dat

Data are imputed using the H0 model specified in the MODEL command.

---

## Part 2: Two-Level Multiple Indicator Growth Model Using Imputed Data

### Mplus Input

```mplus
TITLE: this is an example of a two-level multiple
indicator growth model with categorical
outcomes using multiple imputation data

DATA: FILE = ex11.8implist.dat;
TYPE = IMPUTATION;

VARIABLE: NAMES are u11 u21 u31 u12 u22 u32 u13 u23
u33 clus;
CATEGORICAL = u11-u33;
CLUSTER = clus;

ANALYSIS: TYPE = TWOLEVEL;
ESTIMATOR = WLSMV;
PROCESSORS = 2;

MODEL: %WITHIN%
f1w BY u11
u21 (1)
u31 (2);
f2w BY u12
u22 (1)
u32 (2);
f3w BY u13
u23 (1)
u33 (2);
iw sw | f1w@0 f2w@1 f3w@2;
%BETWEEN%
f1b BY u11
u21 (1)
u31 (2);
f2b BY u12
u22 (1)
u32 (2);
f3b BY u13
u23 (1)
u33 (2);
[u11$1 u12$1 u13$1] (3);
[u21$1 u22$1 u23$1] (4);
[u31$1 u32$1 u33$1] (5);
u11-u33;
ib sb | f1b@0 f2b@1 f3b@2;
[f1b-f3b@0 ib@0 sb];
f1b-f3b (6);

OUTPUT: TECH1 TECH8;
SAVEDATA: SWMATRIX = ex11.8sw*.dat;
```

### Explanation for Part 2

The DATA command:
- Uses the list of imputed data sets (ex11.8implist.dat)
- TYPE=IMPUTATION indicates multiple imputation analysis

The ANALYSIS command specifies:
- TYPE=TWOLEVEL for multilevel model
- ESTIMATOR=WLSMV for weighted least squares estimation

The MODEL command defines:
1. Within-level: Factor model and growth model (iw, sw)
2. Between-level: Factor model and growth model (ib, sb)

The SAVEDATA command saves:
- SWMATRIX: Within- and between-level sample statistics and weight matrix

This approach avoids the limitation that WLSMV does not handle missing data using MAR, by doing Bayesian multiple imputation first.
