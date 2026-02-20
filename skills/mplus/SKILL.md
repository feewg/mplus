---
name: mplus
description: Provides comprehensive MPlus statistical modeling software syntax reference, command documentation, and examples. Use when users need to write MPlus input files, query command syntax, understand model specifications, or troubleshoot errors.
---

# MPlus Skill

## Capabilities

- Complete syntax reference for all MPlus commands
- Detailed explanations of model specifications and parameter options
- Code examples for typical analysis scenarios
- Version-specific feature documentation
- Troubleshooting guidance for common errors

## When to Use

Use this skill when:
- Writing MPlus input files
- Querying command syntax or options
- Understanding model specification requirements
- Troubleshooting estimation errors
- Looking up examples for specific model types
- Converting between wide/long data formats
- Setting up Monte Carlo simulations

## References

### Part 1: Model Example Chapters (Chapters 1-14)

| Chapter | Topic |
|---------|-------|
| [ch01_introduction.md](references/ch01_introduction.md) | Introduction to MPlus |
| [ch02_getting_started.md](references/ch02_getting_started.md) | Getting Started |
| [ch03_regression_path_analysis.md](references/ch03_regression_path_analysis.md) | Regression and Path Analysis |
| [ch04_exploratory_factor_analysis.md](references/ch04_exploratory_factor_analysis.md) | Exploratory Factor Analysis |
| [ch05_cfa_sem.md](references/ch05_cfa_sem.md) | CFA and Structural Equation Modeling |
| [ch06_growth_survival_timeseries.md](references/ch06_growth_survival_timeseries.md) | Growth, Survival, and N=1 Time Series |
| [ch07_mixture_crosssectional.md](references/ch07_mixture_crosssectional.md) | Mixture Modeling with Cross-Sectional Data |
| [ch08_mixture_longitudinal.md](references/ch08_mixture_longitudinal.md) | Mixture Modeling with Longitudinal Data |
| [ch09_multilevel_complex_survey.md](references/ch09_multilevel_complex_survey.md) | Multilevel Modeling with Complex Survey Data |
| [ch10_multilevel_mixture.md](references/ch10_multilevel_mixture.md) | Multilevel Mixture Modeling |
| [ch11_missing_data_bayesian.md](references/ch11_missing_data_bayesian.md) | Missing Data Modeling and Bayesian Analysis |
| [ch12_monte_carlo_simulation.md](references/ch12_monte_carlo_simulation.md) | Monte Carlo Simulation Studies |
| [ch13_special_features.md](references/ch13_special_features.md) | Special Features |
| [ch14_special_modeling_issues.md](references/ch14_special_modeling_issues.md) | Special Modeling Issues |

### Part 2: Command Reference Chapters (Chapters 15-20)

| Chapter | Topic |
|---------|-------|
| [ch15_title_data_variable_define.md](references/ch15_title_data_variable_define.md) | TITLE, DATA, VARIABLE, DEFINE Commands |
| [ch16_analysis_command.md](references/ch16_analysis_command.md) | ANALYSIS Command |
| [ch17_model_command.md](references/ch17_model_command.md) | MODEL Command |
| [ch18_output_savedata_plot.md](references/ch18_output_savedata_plot.md) | OUTPUT, SAVEDATA, PLOT Commands |
| [ch19_montecarlo_command.md](references/ch19_montecarlo_command.md) | MONTECARLO Command |
| [ch20_language_summary.md](references/ch20_language_summary.md) | Summary of the MPlus Language |

### Part 3: Version Addendum

| Addendum | Version |
|----------|---------|
| [addendum_v8_1.md](references/addendum_v8_1.md) | Version 8.1 |
| [addendum_v8_5.md](references/addendum_v8_5.md) | Version 8.5 |
| [addendum_v8_9_10_11.md](references/addendum_v8_9_10_11.md) | Versions 8.9, 8.10, 8.11 |
| [addendum_v9.md](references/addendum_v9.md) | Version 9.0 |

### Legacy Reference
- [language_reference.md](references/language_reference.md) - Complete language specification

## Quick Start

### Basic MPlus Input Structure

```mplus
TITLE: Your analysis title;

DATA: FILE IS yourdata.dat;

VARIABLE: NAMES ARE var1 var2 var3;
          USEVARIABLES ARE var1 var2;

ANALYSIS: ESTIMATOR = ML;

MODEL: [your model specification];

OUTPUT: STDYX;
```

### Common Commands

| Task | Command Pattern |
|------|-----------------|
| CFA | `f BY y1-y5;` |
| Regression | `y ON x1 x2;` |
| Mediation | `MODEL INDIRECT: y IND m x;` |
| Growth | `i s | y1@0 y2@1 y3@2;` |
| Multilevel | `TYPE = TWOLEVEL; %WITHIN% ... %BETWEEN% ...` |
| Mixture | `TYPE = MIXTURE; CLASSES = c (3);` |
| Bayesian | `ESTIMATOR = BAYES;` |

### Estimators by Data Type

| Data Type | Recommended Estimator |
|-----------|----------------------|
| Continuous, normal | ML |
| Continuous, non-normal | MLR |
| Categorical | WLSMV |
| Small sample | BAYES |
| Complex survey | MLR |

## Model Templates

### Confirmatory Factor Analysis

```mplus
TITLE: CFA Example;
DATA: FILE IS cfa.dat;
VARIABLE: NAMES ARE y1-y12;
MODEL: f1 BY y1-y4;
       f2 BY y5-y8;
       f3 BY y9-y12;
       f1-f3@1;  ! Standardize factors
OUTPUT: STDYX MODINDICES;
```

### Structural Equation Model

```mplus
TITLE: SEM with Mediation;
DATA: FILE IS sem.dat;
VARIABLE: NAMES ARE y1-y4 m x1 x2;
MODEL: f1 BY y1-y2;
       f2 BY y3-y4;
       f2 ON f1 m;
       m ON x1 x2;
       f1 ON x1;
MODEL INDIRECT: f2 IND m x1;
OUTPUT: STDYX CINTERVAL;
```

### Linear Growth Model

```mplus
TITLE: Growth Model;
DATA: FILE IS growth.dat;
VARIABLE: NAMES ARE y1-y4 x;
MODEL: i s | y1@0 y2@1 y3@2 y4@3;
       i ON x;
       s ON x;
OUTPUT: STDYX TECH1;
```

### Two-Level Random Slope

```mplus
TITLE: Multilevel Model;
DATA: FILE IS ml.dat;
VARIABLE: NAMES ARE y x cluster;
          CLUSTER IS cluster;
ANALYSIS: TYPE = TWOLEVEL RANDOM;
MODEL: %WITHIN%
       s | y ON x;
       %BETWEEN%
       y s ON w;
       y WITH s;
OUTPUT: STDYX;
```

### Latent Class Analysis

```mplus
TITLE: LCA;
DATA: FILE IS lca.dat;
VARIABLE: NAMES ARE u1-u10;
          CATEGORICAL ARE u1-u10;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE;
          STARTS = 200 50;
MODEL: %OVERALL%
       %c#1%
       [u1$1-u10$1];
OUTPUT: TECH1 TECH8 TECH11 TECH14;
```

### Growth Mixture Model

```mplus
TITLE: GMM;
DATA: FILE IS gmm.dat;
VARIABLE: NAMES ARE y1-y5;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE;
          STARTS = 400 100;
MODEL: %OVERALL%
       i s | y1@0 y2@1 y3@2 y4@3 y5@4;
       %c#1%
       [i* s*];
       i (1);
       s (2);
OUTPUT: STDYX TECH1 TECH8;
PLOT: TYPE = PLOT3;
```

### Bayesian CFA

```mplus
TITLE: Bayesian CFA;
DATA: FILE IS bfa.dat;
VARIABLE: NAMES ARE y1-y8;
ANALYSIS: ESTIMATOR = BAYES;
          PROCESSORS = 2;
MODEL: f1 BY y1-y4*;
       f2 BY y5-y8*;
       f1-f2@1;
       MODEL PRIORS:
       f1 BY y1-y4 ~ N(0.7, 0.1);
       f2 BY y5-y8 ~ N(0.7, 0.1);
OUTPUT: STDYX TECH8;
PLOT: TYPE = PLOT2;
```

## Troubleshooting

### Convergence Issues

1. **Increase iterations**:
   ```mplus
   ANALYSIS: ITERATIONS = 2000;
   ```

2. **Use starting values**:
   ```mplus
   MODEL: f BY y1-y5*0.8;
   ```

3. **Check model identification**:
   - Ensure enough constraints
   - Fix factor scale (variance or loading)

### Non-Positive Definite Matrix

- Check for multicollinearity
- Add small value to diagonal: `f@0.01;`
- Use `SWMATRIX` with WLS estimators

### Mixture Model Non-Convergence

```mplus
ANALYSIS: TYPE = MIXTURE;
          STARTS = 500 100;  ! Increase random starts
          STITERATIONS = 50; ! Increase stage 2 iterations
```

## Version Notes

- **Version 9.0**: Added TYPE=IMPUTATION, BOOTSTRAP for TWOLEVEL
- **Version 8.11**: Added H5RESULTS option
- **Version 8.10**: Added PSEM with LASSO/GEOMIN penalties
- **Version 8.9**: Added ALIGNMENT=FIXED, PSEM

For complete syntax details, see the chapter reference files in `references/`.
