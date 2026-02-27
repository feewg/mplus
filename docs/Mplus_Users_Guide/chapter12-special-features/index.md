# Chapter 12: Monte Carlo Simulation Studies

This chapter contains examples of Monte Carlo simulation studies using Mplus. Monte Carlo simulation studies are used to investigate the statistical properties of estimators and test statistics under various conditions.

## Examples

- [Example 12.1](example-12.1.md): Monte Carlo simulation study for a CFA with covariates (MIMIC) with continuous factor indicators and patterns of missing data
- [Example 12.2](example-12.2.md): Monte Carlo simulation study for a linear growth model for a continuous outcome with missing data where attrition is predicted by time-invariant covariates (MAR)
- [Example 12.3](example-12.3.md): Monte Carlo simulation study for a growth mixture model with two classes and a misspecified model
- [Example 12.4](example-12.4.md): Monte Carlo simulation study for a two-level growth model for a continuous outcome (three-level analysis)
- [Example 12.5](example-12.5.md): Monte Carlo simulation study for an exploratory factor analysis with continuous factor indicators
- [Example 12.6](example-12.6.md): Monte Carlo simulation study where clustered data are generated, analyzed, and saved for a subsequent external Monte Carlo analysis
- [Example 12.7](example-12.7.md): Monte Carlo simulation study where parameter estimates saved from a real data analysis are used for population parameter values
- [Example 12.8](example-12.8.md): Monte Carlo simulation study for discrete-time survival analysis
- [Example 12.9](example-12.9.md): Monte Carlo simulation study for a two-part (semicontinuous) growth model for a continuous outcome
- [Example 12.10](example-12.10.md): Monte Carlo simulation study for a two-level continuous-time survival analysis using Cox regression with a random intercept and a frailty
- [Example 12.11](example-12.11.md): Monte Carlo simulation study for a two-level mediation model with random slopes

## Overview

Monte Carlo simulation studies in Mplus involve the following key commands and options:

- **MONTECARLO command**: Used to describe the details of a Monte Carlo simulation study
- **NAMES option**: Assigns names to variables in generated data sets
- **NOBSERVATIONS option**: Specifies sample size for data generation and analysis
- **NREPS option**: Specifies the number of replications (samples to draw)
- **SEED option**: Specifies the seed for random draws
- **MODEL POPULATION command**: Provides population parameter values for data generation
- **MODEL command**: Describes the analysis model and provides coverage values
- **OUTPUT command**: TECH9 requests error messages for convergence issues
