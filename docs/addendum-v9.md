# Version 9 Mplus Language Addendum

In this addendum, changes introduced in Version 9 are described. They include new features and corrections to minor problems that have been found since the release of Version 8.11 in May 2024. Three new web talks are available. Web Talk 8 describes how to carry out multistep mixture modeling for models with one categorical latent variable like LCA. Web Talk 9 describes a new method to analyze LCA with direct effects using PSEM. Web Talk 10 describes how to carry out multistep mixture modeling for models with more than one categorical latent variable like LTA.

## New Features in Version 9

- **Penalized Structural Equation Modeling (PSEM)** has been extended (Asparouhov & Muthen, 2025a). For continuous variables, PSEM is now available for TYPE=TWOLEVEL and TYPE=THREELEVEL. For categorical, censored, count, nominal, and continuous-time survival variables, PSEM is available for single-level and TYPE=TWOLEVEL. For categorical variables using WLSMV, PSEM is available for single-level and TYPE=TWOLEVEL. PSEM is available for TYPE=MIXTURE and TYPE=TWOLEVEL MIXTURE. Web Talk 9 discusses applications of PSEM to LCA with direct effects.

- **Latent variable decomposition** (latent variable centering) of observed exogenous independent variables with random slopes for TYPE=THREELEVEL with ESTIMATOR=BAYES (Asparouhov & Muthen, 2025b)

- **DSEM for TYPE=THREELEVEL** with continuous variables (Asparouhov & Muthen, 2025b). This is a first, experimental version of DSEM3.

- **Settings for the AUXILIARY option and multistep mixture modeling extended.** For applications, see Web Talk 8.

- **TYPE=IMPUTATION added for multistep mixture modeling.** See Web Talk 8.

- **Output added for multistep mixture modeling.** For examples, see Web Talks 8, 9, and 10.

- **NAMES option added to DATA IMPUTATION.** For applications, see Web Talk 8.

- **BOOTSTRAP option added for TYPE=TWOLEVEL** (Asparouhov & Muthen, 2025c)

- **ESTIMATOR=BAYES for censored variables** for single-level and TYPE=TWOLEVEL including DSEM

- **Mplus Editors's CALCULATOR available** for models with one latent class variable such as LCA including the computation of probabilities for the latent class indicators as a function of covariates. For applications see Web Talk 9.

- **Variance Inflation Factor (VIF)** for information about collinearity among covariates

- **Effective Sample Size (ESS) for Bayes.** See the FAQ ESS – Effective sample size for Bayes.

- **New choices for ALGORITHM=MH for CT-RDSEM** (Asparouhov & Muthen, 2024)

- **Partial correlation output** (Asparouhov & Muthen, 2025d)

- **MODEL TEST for TYPE=CROSSCLASSIFIED**

- **SAVE=CPROBABILITIES for DATA IMPUTATION and TYPE=IMPUTATION**

- **CONVERGENCE option added to the MONTECARLO command**

- **MODEL command extensions of the dot language for LTA.** For applications, see Web Talk 10.

## Multistep Approaches With Mixture Modeling

The AUXILIARY option is used in conjunction with TYPE=MIXTURE to provide automatic estimation of the 3-step and BCH approaches to multistep mixture modeling. The automatic approach can be used in conjunction with TYPE=IMPUTATION. It is not allowed for models with more than one categorical latent variable or for models for which numerical integration is required. These models must use the manual approach (Asparouhov & Muthén, 2014, 2021, Web Talk 8).

The AUXILIARY option has six settings. One is for covariates used in the multinomial logistic regression for the categorical latent variable. The other five are for testing the differences between the means or probabilities of distal outcomes across classes.

The setting for covariates is **R3STEP** (Vermunt, 2010; Asparouhov & Muthén, 2014). It is used to identify a set of variables not used in the first step of the analysis that is used in the last step as covariates in a multinomial logistic regression for a categorical latent variable. The multinomial logistic regression uses all covariates jointly. Confidence intervals are given for the odds ratio of each covariate.

Of the five settings for distal outcomes, three use the 3-step method and two use the BCH method:

**3-step settings:**
- **D3STEP** (Asparouhov & Muthén, 2014) - tests the equality of means for continuous variables across classes with the variances equal across classes
- **DU3STEP** (Asparouhov & Muthén, 2014) - tests the equality of means for continuous variables across classes with the variances unequal across classes
- **D3STEPC** - tests the equality of probabilities for categorical variables across classes

**BCH settings:**
- **BCH** (Vermunt, 2010; Bakk & Vermunt, 2016) - tests the equality of means for continuous variables across classes with the variances equal across classes
- **BCHC** - tests the equality of probabilities for categorical variables across classes

### Example Specifications

R3STEP setting:
```mplus
AUXILIARY = race (R3STEP) ses (R3STEP) x1-x5 (R3STEP);
```

Or alternatively:
```mplus
AUXILIARY = (R3STEP) race ses x1-x5;
```

Combined settings:
```mplus
AUXILIARY = abuse (BCH) dropout (BCHC) y1-y5 (D3STEP);
```

## NAMES Option

The NAMES option of the DATA IMPUTATION command is used to specify the names of the variables to use to impute missing values when variables beyond those listed in the USEVARIABLES list of the VARIABLE command are used.

## ALGORITHM for Bayes

The ALGORITHM option for Bayes estimation is used to specify the Markov chain Monte Carlo (MCMC) algorithm to use for generating the posterior distribution of the parameters (Gelman et al., 2004).

**Settings:**
- **GIBBS** (default) - uses the Gibbs sampler algorithm
  - PX1 (default) - described in Asparouhov and Muthén (2023)
  - PX2 - described in Boscardin et al. (2008)
  - PX3 - described in Liu and Daniels (2006)
  - RW - uses a random walk, Metropolis-Hastings algorithm

- **MH** - uses the Metropolis-Hastings algorithm
  - MH1 (default) - uses multivariate updating within each block of parameters
  - UNIMH, MH2, MH3, MH4, MH5 - for Continuous-time Dynamic Structural Equation Models (CT-DSEM)

Example:
```mplus
ALGORITHM = GIBBS (PX3);
```

## CONVERGENCE for MONTECARLO

The CONVERGENCE option of the MONTECARLO command is used to determine whether a replication is considered completed or not.

- **BASIC** (default) - considers a converged replication completed even if it gets a non-positive definite warning
- **STRICT** - does not consider a converged replication completed if it gets a non-positive definite warning

## References

- Asparouhov, T. & Muthén, B. (2014). Auxiliary variables in mixture modeling: A 3-step approach using Mplus. Mplus Web Notes: No. 15. www.statmodel.com.
- Asparouhov, T. & Muthén, B. (2021). Auxiliary variables in mixture modeling: Using the BCH method in Mplus to estimate a distal outcome model and an arbitrary secondary model. Mplus Web Notes: No. 21. www.statmodel.com.
- Asparouhov, T. & Muthén, B. (2023). Bayesian analysis using Mplus: Technical implementation. Technical Report. Los Angeles: Muthén & Muthén.
- Asparouhov, T. & Muthén, B. (2024). Continuous time dynamic structural equation models. Technical Report. Los Angeles: Muthén & Muthén.
- Asparouhov, T. & Muthén, B. (2025a). Methodological advances with penalized structural equation models. Structural Equation Modeling, 32 (4), 688-716.
- Asparouhov, T. & Muthén, B. (2025b). Three-level dynamic modeling. Technical Report. Los Angeles: Muthén & Muthén.
- Asparouhov, T. & Muthén, B. (2025c). Bootstrap in two-level models. Technical Report. Los Angeles: Muthén & Muthén.
- Asparouhov, T. & Muthén, B. (2025d). Partial correlations. Mplus Web Notes: No. 26. www.statmodel.com.
- Bakk, Z, & Vermunt, J.K. (2016). Robustness of stepwise latent class modeling with continuous distal outcomes. Structural Equation Modeling, 23, 20-31.
- Boscardin, J., Zhang, X., & Belin, T. (2008). Modeling a mixture of ordinal and continuous repeated measures. Journal of Statistical Computation and Simulation, 78, 873-886.
- Carlin, B.P. & Louis, T.A. (2009). Bayesian methods for data analysis. Third edition. Boca Raton, FL: Chapman and Hall/CRC Press.
- Chib, S. & Greenberg, E. (1998). Bayesian analysis of multivariate probit models. Biometrika, 85, 347-361.
- Gelman, A., Carlin, J.B., Stern, H.S., and Rubin, D.B. (2004). Bayesian data analysis. Second edition. New York: Chapman & Hall.
- Liu, X. & Daniels, M.J. (2006). A new algorithm for simulating a correlation matrix based on parameter expansion and re-parameterization. Journal of Computational and Graphical Statistics, 15, 897-914.
- Vermunt, J.K. (2010). Latent class modeling with covariates: Two improved three-step approaches. Political Analysis, 18, 450-469.
