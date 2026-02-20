# Chapter 1: Introduction

## 1. Chapter Overview

This chapter introduces MPlus, a comprehensive statistical modeling software for analyzing data with complex statistical models. MPlus provides a flexible framework for:

- Structural equation modeling (SEM)
- Multilevel modeling
- Mixture modeling
- Longitudinal analysis
- Complex survey data analysis
- Monte Carlo simulations
- Missing data handling

## 2. Key Features

### 2.1 Model Types Supported

| Model Type | Description |
|------------|-------------|
| Regression | Linear, logistic, censored, multinomial |
| Path Analysis | Observed and latent variable models |
| EFA | Exploratory factor analysis with rotations |
| CFA | Confirmatory factor analysis |
| SEM | Full structural equation models |
| Growth Models | Linear and nonlinear growth curves |
| Survival Analysis | Continuous-time survival models |
| Mixture Models | Latent class and growth mixture models |
| Multilevel Models | Two-level and three-level models |
| Complex Survey | Design-based inference |
| Bayesian Analysis | MCMC estimation |

### 2.2 Data Types

MPlus handles various data types:

- **Continuous**: Normal and non-normal distributions
- **Categorical**: Binary and ordered categorical
- **Nominal**: Unordered categorical
- **Count**: Poisson and negative binomial
- **Censored**: Left, right, or interval censored
- **Survival**: Time-to-event data

## 3. Basic Program Structure

```mplus
TITLE: Your analysis title;

DATA: FILE IS yourdata.dat;

VARIABLE: NAMES ARE var1 var2 var3;
          USEVARIABLES ARE var1 var2;

ANALYSIS: ESTIMATOR = ML;

MODEL: [your model specification];

OUTPUT: STDYX;
```

## 4. Command Categories

### 4.1 Required Commands
- **DATA**: Specifies data file
- **VARIABLE**: Defines variables
- **MODEL**: Specifies the model

### 4.2 Optional Commands
- **TITLE**: Provides analysis title
- **DEFINE**: Creates new variables
- **ANALYSIS**: Sets analysis options
- **OUTPUT**: Requests specific output
- **SAVEDATA**: Saves analysis results
- **PLOT**: Requests graphical output
- **MONTECARLO**: Simulation settings

## 5. File Types

| Extension | Purpose |
|-----------|---------|
| .inp | Input file (syntax) |
| .out | Output file (results) |
| .dat | Data file |
| .gh5 | HDF5 results file |

## 6. Getting Help

- Check output file for error messages
- Use TECH1 for parameter specifications
- Consult MPlus User's Guide for detailed syntax
- Visit www.statmodel.com for examples

## 7. Related Chapters

- [Chapter 2: Getting Started](ch02_getting_started.md)
- [Chapter 15: TITLE, DATA, VARIABLE Commands](ch15_title_data_variable_define.md)
