# MPlus Language Reference

Complete syntax reference for MPlus statistical modeling software based on MPlus User's Guide and Version 9 documentation.

---

## Chapter Reference

This language reference is organized according to the MPlus User's Guide chapters. For detailed examples and explanations, see the chapter files:

### Part 1: Model Example Chapters
| Chapter | File | Topic |
|---------|------|-------|
| 1 | [ch01_introduction.md](ch01_introduction.md) | Introduction |
| 2 | [ch02_getting_started.md](ch02_getting_started.md) | Getting Started |
| 3 | [ch03_regression_path_analysis.md](ch03_regression_path_analysis.md) | Regression and Path Analysis |
| 4 | [ch04_exploratory_factor_analysis.md](ch04_exploratory_factor_analysis.md) | Exploratory Factor Analysis |
| 5 | [ch05_cfa_sem.md](ch05_cfa_sem.md) | CFA and SEM |
| 6 | [ch06_growth_survival_timeseries.md](ch06_growth_survival_timeseries.md) | Growth, Survival, and Time Series |
| 7 | [ch07_mixture_crosssectional.md](ch07_mixture_crosssectional.md) | Mixture Modeling (Cross-Sectional) |
| 8 | [ch08_mixture_longitudinal.md](ch08_mixture_longitudinal.md) | Mixture Modeling (Longitudinal) |
| 9 | [ch09_multilevel_complex_survey.md](ch09_multilevel_complex_survey.md) | Multilevel and Complex Survey |
| 10 | [ch10_multilevel_mixture.md](ch10_multilevel_mixture.md) | Multilevel Mixture |
| 11 | [ch11_missing_data_bayesian.md](ch11_missing_data_bayesian.md) | Missing Data and Bayesian |
| 12 | [ch12_monte_carlo_simulation.md](ch12_monte_carlo_simulation.md) | Monte Carlo Simulation |
| 13 | [ch13_special_features.md](ch13_special_features.md) | Special Features |
| 14 | [ch14_special_modeling_issues.md](ch14_special_modeling_issues.md) | Special Modeling Issues |

### Part 2: Command Reference Chapters
| Chapter | File | Topic |
|---------|------|-------|
| 15 | [ch15_title_data_variable_define.md](ch15_title_data_variable_define.md) | TITLE, DATA, VARIABLE, DEFINE |
| 16 | [ch16_analysis_command.md](ch16_analysis_command.md) | ANALYSIS Command |
| 17 | [ch17_model_command.md](ch17_model_command.md) | MODEL Command |
| 18 | [ch18_output_savedata_plot.md](ch18_output_savedata_plot.md) | OUTPUT, SAVEDATA, PLOT |
| 19 | [ch19_montecarlo_command.md](ch19_montecarlo_command.md) | MONTECARLO Command |
| 20 | [ch20_language_summary.md](ch20_language_summary.md) | Language Summary |

### Part 3: Version Addendum
| Version | File |
|---------|------|
| 8.1 | [addendum_v8_1.md](addendum_v8_1.md) |
| 8.5 | [addendum_v8_5.md](addendum_v8_5.md) |
| 8.9-8.11 | [addendum_v8_9_10_11.md](addendum_v8_9_10_11.md) |
| 9.0 | [addendum_v9.md](addendum_v9.md) |

---

## Table of Contents

1. [General Language Rules](#1-general-language-rules)
2. [Commands Reference](#2-commands-reference)
3. [Model Types](#3-model-types)
4. [Estimators and Algorithms](#4-estimators-and-algorithms)
5. [Code Examples](#5-code-examples)
6. [Version History](#6-version-history)
7. [Diagrammer Syntax](#7-diagrammer-syntax)

---

## 1. General Language Rules

### 1.1 Command Structure

MPlus uses a command-based language where each command begins with a keyword followed by a colon (`:`).

```mplus
COMMAND: option = value;
```

### 1.2 Statement Termination

All statements must end with a semicolon (`;`).

```mplus
TITLE: My Analysis;
DATA: FILE IS data.dat;
```

### 1.3 Comments

Comments are indicated by an exclamation mark (`!`) or `/* */` for block comments:

```mplus
! This is a single-line comment
/* This is a
   block comment */
```

### 1.4 Case Sensitivity

Command names are case-insensitive, but variable names are case-sensitive.

### 1.5 Order of Commands

Recommended order:
1. TITLE (optional)
2. DATA (required)
3. VARIABLE (required)
4. DEFINE (optional)
5. ANALYSIS (optional)
6. MODEL (required for most analyses)
7. OUTPUT (optional)
8. SAVEDATA (optional)
9. PLOT (optional)
10. MONTECARLO (optional)

---

## 2. Commands Reference

### 2.1 TITLE Command

**Purpose**: Provide a title for the analysis.

**Syntax**:
```mplus
TITLE: [any text describing the analysis];
```

**Example**:
```mplus
TITLE: CFA with continuous factor indicators;
```

---

### 2.2 DATA Command

**Purpose**: Specify data file information.

**Syntax**:
```mplus
DATA: FILE IS filename;
```

**Options**:
- `FILE IS filename` - Specifies the data file
- `TYPE = IMPUTATION` - For multiple imputation datasets
- `NOBSERVATIONS = n` - Number of observations

**Example**:
```mplus
DATA: FILE IS example.dat;
      NOBSERVATIONS = 500;
```

---

### 2.3 VARIABLE Command

**Purpose**: Define variables used in the analysis.

**Syntax**:
```mplus
VARIABLE: NAMES ARE var1 var2 var3;
          USEVARIABLES ARE var1 var2;
```

**Key Options**:
| Option | Description |
|--------|-------------|
| `NAMES ARE` | List all variables in the dataset |
| `USEVARIABLES ARE` | Variables to use in analysis |
| `CATEGORICAL ARE` | Binary/ordered categorical variables |
| `NOMINAL ARE` | Unordered categorical variables |
| `COUNT ARE` | Count variables |
| `CENSORED ARE` | Censored variables |
| `MISSING ARE` | Missing value codes |
| `CLUSTER IS` | Clustering variable |
| `WEIGHT IS` | Sampling weight variable |
| `STRATIFICATION IS` | Stratification variable |
| `GROUPING IS` | Grouping variable for multiple group |
| `WITHIN ARE` | Within-level variables (multilevel) |
| `BETWEEN ARE` | Between-level variables (multilevel) |
| `IDVARIABLE IS` | ID variable for long/wide conversion |
| `TSCORES ARE` | Time scores for growth models |

**Example**:
```mplus
VARIABLE: NAMES ARE y1-y5 x1-x3 gender;
          USEVARIABLES ARE y1-y5 x1;
          CATEGORICAL ARE y1;
          CLUSTER IS school;
```

---

### 2.4 DEFINE Command

**Purpose**: Create new variables or transform existing ones.

**Syntax**:
```mplus
DEFINE: newvar = expression;
```

**Operations**:
- Arithmetic: `+`, `-`, `*`, `/`
- Functions: `LOG`, `EXP`, `SQRT`
- Standardization: `STANDARDIZE(var)`
- Centering: `CENTER(var, GRANDMEAN)` or `CENTER(var, GROUPMEAN)`
- Cutpoints: `CUT(var, cutpoint)`

**Example**:
```mplus
DEFINE: y_std = STANDARDIZE(y);
        x_cen = CENTER(x, GRANDMEAN);
        interaction = x * z;
```

---

### 2.5 ANALYSIS Command

**Purpose**: Specify technical analysis details.

**Syntax**:
```mplus
ANALYSIS: TYPE = GENERAL;
          ESTIMATOR = ML;
```

**TYPE Options**:
| Type | Description |
|------|-------------|
| `GENERAL` | Standard analysis (default) |
| `BASIC` | Descriptive statistics only |
| `EFA n1 n2` | Exploratory factor analysis |
| `MIXTURE` | Mixture models |
| `TWOLEVEL` | Two-level models |
| `THREELEVEL` | Three-level models |
| `CROSSCLASSIFIED` | Cross-classified models |
| `RANDOM` | Models with random effects |
| `COMPLEX` | Complex survey data |

**ESTIMATOR Options**:
- `ML` - Maximum Likelihood
- `MLR` - ML with robust standard errors
- `MLM` - ML with mean-adjusted chi-square
- `MLMV` - ML with mean/variance-adjusted chi-square
- `MLF` - ML with first-order derivatives
- `WLS` - Weighted Least Squares
- `WLSM` - Robust WLS, mean-adjusted
- `WLSMV` - Robust WLS, mean/variance-adjusted
- `ULS` - Unweighted Least Squares
- `BAYES` - Bayesian estimation

**Other Options**:
- `ALGORITHM = EM | FS | ODLL | GIBBS | MH`
- `INTEGRATION = STANDARD | MONTECARLO`
- `ITERATIONS = n`
- `CONVERGENCE = value`
- `BOOTSTRAP = n`
- `PROCESSORS = n`

**Example**:
```mplus
ANALYSIS: TYPE = TWOLEVEL RANDOM;
          ESTIMATOR = MLR;
          ALGORITHM = EM;
          INTEGRATION = 10;
```

---

### 2.6 MODEL Command

**Purpose**: Specify the model to be estimated.

**Syntax**:
```mplus
MODEL: [model statements];
```

#### Basic Statements

| Statement | Meaning | Example |
|-----------|---------|---------|
| `BY` | Measured by (factor loadings) | `f1 BY y1-y5;` |
| `ON` | Regressed on | `y ON x1 x2;` |
| `WITH` | Correlated with | `y1 WITH y2;` |
| `PON` | Paired regression | `y1-y3 PON x1-x3;` |
| `PWITH` | Paired correlation | `y1-y3 PWITH y4-y6;` |

#### Parameter Constraints

- Fix parameter: `f1 BY y1@1;`
- Free parameter: `y1 WITH y2@0;`
- Equal parameters: `f1 BY y1-y5 (1);`
- Starting values: `f1 BY y1*1.0;`

#### Growth Model Syntax (| symbol)

```mplus
MODEL: i s | y1@0 y2@1 y3@2 y4@3;
```

#### Multiple Group Analysis

```mplus
MODEL g1: [factor means differ]
MODEL g2: f1 BY y1-y5;
```

**Example - CFA**:
```mplus
MODEL: f1 BY y1-y5;
       f2 BY y6-y10;
       f1 WITH f2;
       f1@1 f2@1;  ! Fix factor variances
```

**Example - Growth Model**:
```mplus
MODEL: i s | y1@0 y2@1 y3@2 y4@3 y5@4;
       i ON x1 x2;
       s ON x1 x2;
```

---

### 2.7 MODEL INDIRECT Command

**Purpose**: Request indirect effects.

**Syntax**:
```mplus
MODEL INDIRECT: y IND x;
                y VIA m x;
```

**Options**:
- `IND` - Specific indirect effect
- `VIA` - All indirect effects through mediators
- `MOD` - Indirect effects with moderation

**Example**:
```mplus
MODEL: y ON m x;
       m ON x;
MODEL INDIRECT: y IND m x;
```

---

### 2.8 MODEL CONSTRAINT Command

**Purpose**: Define linear and non-linear constraints on parameters.

**Syntax**:
```mplus
MODEL CONSTRAINT: expression;
                  NEW(parameter);
```

**Example**:
```mplus
MODEL: y ON x (b1);
       y ON z (b2);
MODEL CONSTRAINT: b1 = 2*b2;
```

---

### 2.9 MODEL TEST Command

**Purpose**: Test linear restrictions using Wald test.

**Syntax**:
```mplus
MODEL TEST: hypothesis1 = 0;
            hypothesis2 = 0;
```

**Example**:
```mplus
MODEL: y ON x1 (b1);
       y ON x2 (b2);
MODEL TEST: b1 = b2;
```

---

### 2.10 MODEL PRIORS Command

**Purpose**: Specify priors for Bayesian analysis.

**Syntax**:
```mplus
MODEL PRIORS: parameter ~ distribution;
```

**Distributions**:
- `N(mean, variance)` - Normal
- `IG(shape, scale)` - Inverse Gamma
- `B(alpha, beta)` - Beta

**Example**:
```mplus
ANALYSIS: ESTIMATOR = BAYES;
MODEL PRIORS: f1 BY y1-y5 ~ N(0.8, 0.1);
```

---

### 2.11 OUTPUT Command

**Purpose**: Request additional output.

**Options**:
| Option | Description |
|--------|-------------|
| `STDYX` | Standardized output (with respect to y and x) |
| `STDY` | Standardized output (with respect to y) |
| `STD` | Standardized output (with respect to latent variables) |
| `TECH1` | Parameter specification and starting values |
| `TECH2` | Technical output for derivatives |
| `TECH3` | Asymptotic covariance matrix |
| `TECH4` | Estimated means/covariances/probabilities |
| `TECH5` | Optimization history |
| `TECH6` | Optimization history for EM |
| `TECH7` | Optimization history for M-step |
| `TECH8` | Optimization history for DEMAX |
| `TECH9` | Monte Carlo error messages |
| `TECH10` | Univariate/bivariate model fit info (mixture) |
| `TECH11` | LMR-LRT for mixture models |
| `TECH12` | BLRT for mixture models |
| `TECH13` | LMR-LRT for multilevel mixture |
| `TECH14` | BLRT for multilevel mixture |
| `TECH15` | Latent class output |
| `CINTERVAL` | Confidence intervals |
| `MODINDICES` | Modification indices |
| `SAMPSTAT` | Sample statistics |
| `RESIDUAL` | Residual output |
| `PATTERNS` | Missing data patterns |
| `PLOT` | Request plots |

**Example**:
```mplus
OUTPUT: STDYX TECH1 TECH8 MODINDICES;
```

---

### 2.12 SAVEDATA Command

**Purpose**: Save analysis results to files.

**Options**:
| Option | Description |
|--------|-------------|
| `FILE IS` | Save data file |
| `SAVE = FSCORES` | Save factor scores |
| `SAVE = CPROB` | Save class probabilities |
| `SAVE = LOGLIKELIHOOD` | Save loglikelihood |
| `TECH3 IS` | Save asymptotic covariance matrix |
| `TECH4 IS` | Save estimated means/covariances |

**Example**:
```mplus
SAVEDATA: FILE IS factor_scores.dat;
          SAVE = FSCORES;
```

---

### 2.13 PLOT Command

**Purpose**: Request graphical displays.

**TYPE Options**:
- `PLOT1` - Basic plots
- `PLOT2` - Additional plots
- `PLOT3` - Advanced plots

**Example**:
```mplus
PLOT: TYPE IS PLOT2;
```

---

### 2.14 MONTECARLO Command

**Purpose**: Set up Monte Carlo simulation studies.

**Options**:
| Option | Description |
|--------|-------------|
| `NAMES ARE` | Variable names |
| `NOBSERVATIONS = n` | Sample size |
| `NREPS = n` | Number of replications |
| `SEED = n` | Random seed |
| `DATA GENERATOR` | Data generation settings |
| `MODEL POPULATION` | Population model |
| `MODEL MISSING` | Missing data model |
| `MODEL COVERAGE` | Coverage model |
| `SAVE = filename` | Save generated data |
| `REPSAVE = n` | Save every nth replication |

**Example**:
```mplus
MONTECARLO: NAMES ARE y1-y5 x;
            NOBSERVATIONS = 500;
            NREPS = 1000;
            SEED = 53487;
            MODEL POPULATION: f BY y1-y5*0.8;
                              f@1;
```

---

### 2.15 DATA Transformation Commands

#### DATA IMPUTATION

```mplus
DATA IMPUTATION: IMPUTE = y1 y2 y3;
                 NDATASETS = 20;
                 SAVE = imputed_data.dat;
```

#### DATA WIDETOLONG

```mplus
DATA WIDETOLONG: WIDE = y1-y4 | x1-x4;
                 LONG = y | x;
                 IDVARIABLE = id;
                 REPETITION = time;
```

#### DATA LONGTOWIDE

```mplus
DATA LONGTOWIDE: LONG = y;
                 WIDE = y1-y4;
                 IDVARIABLE = id;
                 REPETITION = time;
```

#### DATA TWOPART

```mplus
DATA TWOPART: NAMES = y1-y4;
              CUTPOINT = 0;
              BINARY = bin1-bin4;
              CONTINUOUS = cont1-cont4;
```

#### DATA MISSING

```mplus
DATA MISSING: NAMES = y0-y5;
              TYPE = SDROPOUT | DDROPOUT;
              BINARY = d1-d5;
              DESCRIPTIVE = y0-y5;
```

#### DATA SURVIVAL

```mplus
DATA SURVIVAL: NAMES = t1-t5;
               CUTPOINT = 5;
               BINARY = event1-event5;
```

#### DATA COHORT

```mplus
DATA COHORT: COHORT IS cohort_var (0 = a 1 = b);
             COHRECODE = c (0 = 1988 1 = 1989);
             TNAMES = y;
             TIMEMEASURES = y1988-y1990 | y1989-y1991;
```

---

## 3. Model Types

### 3.1 Regression Analysis

**Linear Regression**:
```mplus
MODEL: y ON x1 x2 x3;
```

**Logistic Regression**:
```mplus
VARIABLE: CATEGORICAL ARE y;
MODEL: y ON x1 x2 x3;
```

### 3.2 Path Analysis

```mplus
MODEL: y1 ON x1 x2;
       y2 ON y1 x1;
       y3 ON y2 y1 x2;
```

### 3.3 Exploratory Factor Analysis (EFA)

```mplus
ANALYSIS: TYPE = EFA 2 4 ULS;  ! 2 to 4 factors, ULS estimator
```

With rotation:
```mplus
ANALYSIS: TYPE = EFA 2 4;
          ROTATION = GEOMIN;  ! or VARIMAX, QUARTIMAX, PROMAX, etc.
```

### 3.4 Confirmatory Factor Analysis (CFA)

```mplus
MODEL: f1 BY y1-y5;
       f2 BY y6-y10;
       f1 WITH f2;
```

### 3.5 Structural Equation Modeling (SEM)

```mplus
MODEL: f1 BY y1-y5;
       f2 BY y6-y10;
       f3 BY y11-y15;
       f3 ON f1 f2;
       f1 WITH f2;
```

### 3.6 Growth Modeling

**Linear Growth**:
```mplus
MODEL: i s | y1@0 y2@1 y3@2 y4@3;
       i ON x;
       s ON x;
```

**Quadratic Growth**:
```mplus
MODEL: i s q | y1@0 y2@1 y3@2 y4@3;
```

### 3.7 Survival Analysis

```mplus
VARIABLE: SURVIVAL ARE t (ALL);
MODEL: t ON x;
```

### 3.8 Mixture Models

**LCA (Latent Class Analysis)**:
```mplus
VARIABLE: CATEGORICAL ARE u1-u10;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE;
MODEL: %OVERALL%
       c ON x;
       %c#1%
       [u1$1-u10$1];
```

**GMM (Growth Mixture Model)**:
```mplus
VARIABLE: CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE;
MODEL: %OVERALL%
       i s | y1@0 y2@1 y3@2 y4@3;
       %c#1%
       [i s];
       i;
       s;
```

### 3.9 Multilevel Models

**Two-Level Random Intercept**:
```mplus
VARIABLE: CLUSTER IS school;
ANALYSIS: TYPE = TWOLEVEL;
MODEL: %WITHIN%
       y ON x;
       %BETWEEN%
       y ON w;
```

**Two-Level Random Slope**:
```mplus
VARIABLE: CLUSTER IS school;
ANALYSIS: TYPE = TWOLEVEL RANDOM;
MODEL: %WITHIN%
       s | y ON x;
       %BETWEEN%
       y s ON w;
       y WITH s;
```

### 3.10 Bayesian Analysis

```mplus
ANALYSIS: ESTIMATOR = BAYES;
          PROCESSORS = 2;
MODEL: f1 BY y1-y5*;
       f1@1;
       MODEL PRIORS:
       f1 BY y1-y5 ~ N(0.8, 0.1);
```

---

## 4. Estimators and Algorithms

### 4.1 Estimator Comparison

| Estimator | Description | Use Case |
|-----------|-------------|----------|
| ML | Maximum Likelihood | Continuous outcomes, normal data |
| MLR | ML with robust SEs | Non-normal data, complex sampling |
| MLM | Mean-adjusted ML | Non-normal continuous data |
| MLMV | Mean/variance-adjusted ML | Non-normal data with missing |
| MLF | ML with first-order derivatives | Large models |
| WLS | Weighted Least Squares | Categorical outcomes |
| WLSM/WLSMV | Robust WLS | Categorical data, non-normal |
| ULS | Unweighted LS | Small samples |
| BAYES | Bayesian estimation | Small samples, complex models |

### 4.2 Algorithms

| Algorithm | Description |
|-----------|-------------|
| EM | Expectation-Maximization |
| FS | Fisher Scoring |
| ODLL | Observed Data Log Likelihood |
| GIBBS | Gibbs Sampling (Bayesian) |
| MH | Metropolis-Hastings (Bayesian) |

### 4.3 Integration Methods

```mplus
INTEGRATION = STANDARD;    ! Adaptive quadrature
INTEGRATION = MONTECARLO;  ! Monte Carlo integration
INTEGRATION = 15;          ! Number of integration points
```

---

## 5. Code Examples

### Example 1: Basic CFA

```mplus
TITLE: Confirmatory Factor Analysis
DATA: FILE IS cfa_data.dat;
VARIABLE: NAMES ARE y1-y12;
MODEL: f1 BY y1-y4;
       f2 BY y5-y8;
       f3 BY y9-y12;
OUTPUT: STDYX MODINDICES;
```

### Example 2: SEM with Mediators

```mplus
TITLE: Mediation Analysis
DATA: FILE IS mediation.dat;
VARIABLE: NAMES ARE y m x1-x3;
MODEL: y ON m x1-x3;
       m ON x1-x3;
MODEL INDIRECT: y IND m x1;
OUTPUT: STDYX CINTERVAL(BOOTSTRAP);
```

### Example 3: Two-Level Model

```mplus
TITLE: Two-Level Random Slope Model
DATA: FILE IS multilevel.dat;
VARIABLE: NAMES ARE y x school;
          CLUSTER IS school;
ANALYSIS: TYPE = TWOLEVEL RANDOM;
MODEL: %WITHIN%
       s | y ON x;
       %BETWEEN%
       y s ON w;
       y WITH s;
OUTPUT: STDYX TECH1 TECH8;
```

### Example 4: Growth Mixture Model

```mplus
TITLE: Growth Mixture Model
DATA: FILE IS gmm_data.dat;
VARIABLE: NAMES ARE id y1-y5;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE;
          STARTS = 500 100;
MODEL: %OVERALL%
       i s | y1@0 y2@1 y3@2 y4@3 y5@4;
       %c#1%
       [i s];
       i (1);
       s (2);
OUTPUT: TECH1 TECH8 TECH11 TECH14;
PLOT: TYPE = PLOT3;
```

### Example 5: ESEM (Exploratory SEM)

```mplus
TITLE: ESEM with Target Rotation
DATA: FILE IS esem_data.dat;
VARIABLE: NAMES ARE y1-y24;
ANALYSIS: TYPE = EFA 3 3 UW 3 3 UB;
           ROTATION = TARGET (OBLIQUE);
MODEL: f1-f3 BY y1-y24 (*1);
       f4-f6 BY y1-y24 (*1);
OUTPUT: STDYX;
```

---

## 6. Version History

### Version 9.0 (2024)

New features:
- `TYPE=IMPUTATION` for multistep mixture modeling
- `NAMES` option for `DATA IMPUTATION`
- `BOOTSTRAP` option for `TYPE=TWOLEVEL`
- New choices for `ALGORITHM=MH` for CT-RDSEM
- `CONVERGENCE` option for `MONTECARLO`

### Version 8.11

New features:
- `H5RESULTS` option for SAVEDATA
- Enhanced PSEM capabilities

### Version 8.10

New features:
- PSEM penalty functions: LASSO and GEOMIN

### Version 8.9

New features:
- `ALIGNMENT=FIXED` setting
- PSEM (Penalized Structural Equation Modeling)
- DSEM enhancements (random correlations)

### Version 8.5

Language updates and feature enhancements.

### Version 8.1

Language updates.

---

## 7. Diagrammer Syntax

The MPlus Diagrammer allows creating path diagrams using specific syntax.

### Basic Elements

| Element | Syntax | Description |
|---------|--------|-------------|
| Observed variable | `y` | Rectangle |
| Latent variable | `f` | Ellipse/Circle |
| Factor loading | `f --> y` | Arrow from factor to indicator |
| Regression | `x --> y` | Arrow from predictor to outcome |
| Covariance | `x <-> y` | Double-headed arrow |
| Mean/Intercept | `[y]` | Triangle |

### Example Diagram Syntax

```
! Measurement model
f1 --> y1
f1 --> y2
f1 --> y3
f2 --> y4
f2 --> y5
f2 --> y6
f1 <-> f2

! Structural model
f1 --> f2
x1 --> f1
x2 --> f1
f2 --> y7
```

---

## Appendix: Quick Reference

### Special Symbols

| Symbol | Meaning |
|--------|---------|
| `;` | End of statement |
| `:` | Command separator |
| `@` | Fix parameter |
| `*` | Starting value or free parameter |
| `(` `)` | Parameter label/equality |
| `[` `]` | Mean/intercept/threshold |
| `{` `}` | Scale factor |
| `|` | Random effect/growth factor |
| `@0` | Fixed to zero |
| `@1` | Fixed to one |

### Default Settings

- Missing data: FIML (Full Information Maximum Likelihood)
- Estimator: ML (continuous), WLSMV (categorical)
- Integration: 15 points
- Iterations: 1000
- Convergence: 0.00005

---

*Based on MPlus Version 9.0 User's Guide*
