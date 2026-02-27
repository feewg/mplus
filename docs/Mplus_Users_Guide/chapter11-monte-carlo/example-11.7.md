# EXAMPLE 11.7: MULTIPLE IMPUTATION OF PLAUSIBLE VALUES USING BAYESIAN ESTIMATION OF A GROWTH MODEL

## Description

This example demonstrates obtaining plausible values by multiple imputation based on a multiple indicator linear growth model for categorical outcomes using Bayesian estimation. Plausible values are multiple imputations of latent variable scores that can be used for subsequent analysis.

## Mplus Input

```mplus
TITLE: this is an example of multiple imputation
of plausible values generated from a
multiple indicator linear growth model for
categorical outcomes using Bayesian
estimation

DATA: FILE = ex11.7.dat;

VARIABLE: NAMES = u11 u21 u31 u12 u22 u32 u13 u23
u33;
CATEGORICAL = u11-u33;

ANALYSIS: ESTIMATOR = BAYES;
PROCESSORS = 2;

MODEL: f1 BY u11
u21-u31 (1-2);
f2 BY u12
u22-u32 (1-2);
f3 BY u13
u23-u33 (1-2);
[u11$1 u12$1 u13$1] (3);
[u21$1 u22$1 u23$1] (4);
[u31$1 u32$1 u33$1] (5);
i s | f1@0 f2@1 f3@2;

DATA IMPUTATION:
NDATASETS = 20;
SAVE = ex11.7imp*.dat;

SAVEDATA: FILE = ex11.7plaus.dat;
SAVE = FSCORES (20);
FACTORS = f1-f3 i s;
SAVE = LRESPONSES (20);
LRESPONSES = u11-u33;

OUTPUT: TECH1 TECH8;
```

## Explanation

The ANALYSIS command specifies BAYES for Bayesian estimation.

The MODEL command defines:
1. Three factors (f1, f2, f3) measured by categorical indicators:
   - f1 measured by u11, u21, u31
   - f2 measured by u12, u22, u32
   - f3 measured by u13, u23, u33
   - Equality constraints on factor loadings (labels 1-2)
   - Equality constraints on thresholds (labels 3-5)

2. Growth model for the factors:
   - Intercept (i) and slope (s) growth factors
   - Time scores: f1@0, f2@1, f3@2

The DATA IMPUTATION command:
- Creates 20 imputed data sets to represent variability in latent variables
- Saves them as ex11.7imp*.dat

The SAVEDATA command saves plausible values:
- SAVE=FSCORES(20): Saves distributions of factor scores (plausible values)
- FACTORS: Specifies factors to save (f1, f2, f3, i, s)
- SAVE=LRESPONSES(20): Saves latent response variable distributions
- LRESPONSES: Specifies categorical outcomes for latent response variables

The saved summaries include: mean, median, standard deviation, lower 2.5% limit, and upper 97.5% limit.
