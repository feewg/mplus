# Chapter 15: TITLE, DATA, VARIABLE, and DEFINE Commands

## 1. TITLE Command

```mplus
TITLE: CFA with continuous factor indicators
       Sample analysis for demonstration;
```

## 2. DATA Command

| Option | Syntax | Description |
|--------|--------|-------------|
| FILE IS | FILE IS filename; | Data file location |
| TYPE | TYPE = INDIVIDUAL; | Data type |
| NOBSERVATIONS | NOBSERVATIONS = 500; | Sample size |
| MISSING | MISSING = -999; | Missing value code |

### Data Transformation Commands
- DATA IMPUTATION
- DATA WIDETOLONG
- DATA LONGTOWIDE
- DATA TWOPART
- DATA MISSING
- DATA SURVIVAL
- DATA COHORT

## 3. VARIABLE Command

| Option | Syntax | Description |
|--------|--------|-------------|
| NAMES ARE | NAMES ARE y1-y10; | All variables |
| USEVARIABLES ARE | USEVARIABLES ARE y1-y5; | Analysis variables |
| CATEGORICAL ARE | CATEGORICAL ARE u1-u5; | Binary/ordinal |
| NOMINAL ARE | NOMINAL ARE u1-u5; | Nominal |
| COUNT ARE | COUNT ARE u1 (i); | Count variables |
| CENSORED ARE | CENSORED ARE y1 (b); | Censored |
| CLUSTER IS | CLUSTER IS school; | Clustering |
| WEIGHT IS | WEIGHT IS wt; | Sampling weight |
| CLASSES = | CLASSES = c (3); | Latent classes |

## 4. DEFINE Command

```mplus
DEFINE:
    y_std = STANDARDIZE(y);
    x_cen = CENTER(x, GRANDMEAN);
    xz = x * z;
```

Functions: LOG, EXP, SQRT, ABS, STANDARDIZE, CENTER, CUT
