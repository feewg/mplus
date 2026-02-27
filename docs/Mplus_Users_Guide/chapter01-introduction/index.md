# Chapter 1: Introduction

## Mplus Overview

Mplus is a statistical modeling program that provides researchers with a flexible tool to analyze their data. Mplus offers researchers a wide choice of models, estimators, and algorithms in a program that has an easy-to-use interface and graphical displays of data and analysis results.

Mplus allows the analysis of both cross-sectional and longitudinal data, single-level and multilevel data, data that come from different populations with either observed or unobserved heterogeneity, and data that contain missing values. Analyses can be carried out for observed variables that are continuous, censored, binary, ordered categorical (ordinal), unordered categorical (nominal), counts, or combinations of these variable types. In addition, Mplus has extensive capabilities for Monte Carlo simulation studies, where data can be generated and analyzed according to most of the models included in the program.

## The Mplus Modeling Framework

The Mplus modeling framework draws on the unifying theme of latent variables. The generality of the Mplus modeling framework comes from the unique use of both continuous and categorical latent variables.

### Continuous Latent Variables

Continuous latent variables are used to represent:
- Factors corresponding to unobserved constructs
- Random effects corresponding to individual differences in development
- Random effects corresponding to variation in coefficients across groups in hierarchical data
- Frailties corresponding to unobserved heterogeneity in survival time
- Liabilities corresponding to genetic susceptibility to disease
- Latent response variable values corresponding to missing data

### Categorical Latent Variables

Categorical latent variables are used to represent:
- Latent classes corresponding to homogeneous groups of individuals
- Latent trajectory classes corresponding to types of development in unobserved populations
- Mixture components corresponding to finite mixtures of unobserved populations
- Latent response variable categories corresponding to missing data

## Modeling Types

### Modeling with Continuous Latent Variables

Following are models that can be estimated using Mplus with continuous latent variables:

- Regression analysis
- Path analysis
- Exploratory factor analysis
- Confirmatory factor analysis
- Item response theory modeling
- Structural equation modeling
- Growth modeling
- Discrete-time survival analysis
- Continuous-time survival analysis
- Time series analysis

**Special features available:**
- Single or multiple group analysis
- Missing data under MCAR, MAR, and NMAR and with multiple imputation
- Complex survey data features including stratification, clustering, unequal probabilities of selection (sampling weights), subpopulation analysis, replicate weights, and finite population correction
- Latent variable interactions and non-linear factor analysis using maximum likelihood
- Random slopes
- Individually-varying times of observations
- Linear and non-linear parameter constraints
- Indirect effects including specific paths
- Maximum likelihood estimation for all outcomes types
- Bootstrap standard errors and confidence intervals
- Wald chi-square test of parameter equalities
- Factor scores and plausible values for latent variables

### Modeling with Categorical Latent Variables

Following are models that can be estimated using Mplus with categorical latent variables:

- Regression mixture modeling
- Path analysis mixture modeling
- Latent class analysis
- Latent class analysis with covariates and direct effects
- Confirmatory latent class analysis
- Latent class analysis with multiple categorical latent variables
- Loglinear modeling
- Non-parametric modeling of latent variable distributions
- Multiple group analysis
- Finite mixture modeling
- Complier Average Causal Effect (CACE) modeling
- Latent transition analysis and hidden Markov modeling including mixtures and covariates
- Latent class growth analysis
- Discrete-time survival mixture analysis
- Continuous-time survival mixture analysis

### Modeling with Both Continuous and Categorical Latent Variables

Following are models in the full modeling framework:

- Latent class analysis with random effects
- Factor mixture modeling
- Structural equation mixture modeling
- Growth mixture modeling with latent trajectory classes
- Discrete-time survival mixture analysis
- Continuous-time survival mixture analysis

## Modeling with Complex Survey Data

There are two approaches to the analysis of complex survey data in Mplus:

1. **Approach 1**: Compute standard errors and a chi-square test of model fit taking into account stratification, non-independence of observations due to cluster sampling, and/or unequal probability of selection.

2. **Approach 2**: Specify a model for each level of the multilevel data thereby modeling the non-independence of observations due to cluster sampling (multilevel modeling).

## Modeling with Missing Data

Mplus provides maximum likelihood estimation under:
- MCAR (missing completely at random)
- MAR (missing at random)
- NMAR (not missing at random)

For continuous, censored, binary, ordered categorical (ordinal), unordered categorical (nominal), counts, or combinations of these variable types.

## Estimators and Algorithms

Mplus provides both Bayesian and frequentist inference:

- **Bayesian analysis**: Uses Markov chain Monte Carlo (MCMC) algorithms
- **Frequentist analysis**: Uses maximum likelihood and weighted least squares estimators

## Monte Carlo Simulation Capabilities

Mplus has extensive Monte Carlo facilities both for data generation and data analysis. Several types of data can be generated:
- Simple random samples
- Clustered (multilevel) data
- Missing data
- Discrete- and continuous-time survival data
- Data from populations that are observed (multiple groups) or unobserved (latent classes)

## Graphics and Diagrammer

Mplus includes:
- A dialog-based, post-processing graphics module
- The Diagrammer for drawing input diagrams and automatically creating output diagrams
- LTA Calculator for computing conditional probabilities
- Language Generator to help users create Mplus input files

## Organization of the User's Guide

The Mplus User's Guide has 20 chapters:

| Chapter | Title | Page |
|---------|-------|------|
| 1 | Introduction | 1 |
| 2 | Getting started with Mplus | 13 |
| 3 | Regression and path analysis | 19 |
| 4 | Exploratory factor analysis | 43 |
| 5 | Confirmatory factor analysis and structural equation modeling | 55 |
| 6 | Growth modeling, survival analysis, and N=1 time series analysis | 113 |
| 7 | Mixture modeling with cross-sectional data | 165 |
| 8 | Mixture modeling with longitudinal data | 221 |
| 9 | Multilevel modeling with complex survey data | 261 |
| 10 | Multilevel mixture modeling | 395 |
| 11 | Missing data modeling and Bayesian analysis | 443 |
| 12 | Monte Carlo simulation studies | 465 |
| 13 | Special features | 499 |
| 14 | Special modeling issues | 515 |
| 15 | TITLE, DATA, VARIABLE, and DEFINE commands | 563 |
| 16 | ANALYSIS command | 651 |
| 17 | MODEL command | 711 |
| 18 | OUTPUT, SAVEDATA, and PLOT commands | 791 |
| 19 | MONTECARLO command | 859 |
| 20 | A summary of the Mplus language | 893 |
