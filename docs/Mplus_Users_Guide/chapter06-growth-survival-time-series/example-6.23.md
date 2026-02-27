# EXAMPLE 6.23: N=1 time series analysis with a univariate first-order autoregressive AR(1) model for a continuous dependent variable

## Description

In this example, the N=1 time series analysis with a univariate first-order autoregressive AR(1) model for a continuous dependent variable shown in the picture above is estimated (Shumway & Stoffer, 2011). The subscript t refers to a time point and the subscript t-1 refers to the previous time point. The dots indicate that the process includes both previous and future time points using the same model.

## Mplus Input

```mplus
TITLE: this is an example of an N=1 time series
analysis with a univariate first-order
autoregressive AR(1) model for a
continuous dependent variable
DATA: FILE = ex6.23.dat;
VARIABLE: NAMES = y;
LAGGED = y(1);
ANALYSIS: ESTIMATOR = BAYES;
PROCESSORS = 2;
BITERATIONS = (2000);
MODEL: y ON y&1;
OUTPUT: TECH1 TECH8;
PLOT: TYPE = PLOT3;
```

## Explanation

In the VARIABLE command, the NAMES option is used to assign names to the variables in the data set. The data set in this example contains one variable y. The variable y is measured over multiple time points. The number of times it is measured is equal to the number of records in the data set. The records must be ordered by time. The LAGGED option is used to specify the maximum lag to use for an observed variable during model estimation. The variable y has lag 1. The lagged variable is referred to by adding to the name of the variable an ampersand (&) and the number of the lag.

In the ANALYSIS command, by specifying ESTIMATOR=BAYES, a Bayesian analysis will be carried out. In Bayesian estimation, the default is to use two independent Markov chain Monte Carlo (MCMC) chains. If multiple processors are available, using PROCESSORS=2 will speed up computations. The BITERATIONS option is used to specify the maximum and minimum number of iterations for each Markov chain Monte Carlo (MCMC) chain when the potential scale reduction (PSR) convergence criterion (Gelman & Rubin, 1992) is used. Using a number in parentheses, the BITERATIONS option specifies that a minimum of 2,000 and a maximum of the default of 50,000 iterations will be used.

In the MODEL command, the ON statement describes the linear regression over multiple time points of the dependent variable y on the dependent variable y&1 which is y at the previous time point. An intercept, regression coefficient, and residual variance are estimated.

An N=1 time series analysis with a univariate second-order autoregressive AR(2) model can also be estimated. For this analysis, the LAGGED option is specified as LAGGED = y (2); and the MODEL command is specified as follows:

```mplus
MODEL: y ON y&1 y&2;
```

In the MODEL command, the ON statement describes the linear regression over multiple time points of the dependent variable y on the dependent variable y&1 which is y at the previous time point and the dependent variable y&2 which is y at two time points prior. An intercept, two regression coefficients, and a residual variance are estimated. A model where only y at lag 2 is used is specified as follows:

```mplus
MODEL: y ON y&1@0 y&2;
```

where the coefficient for y at lag 1 is fixed at zero. An intercept, regression coefficient, and residual variance are estimated.

The OUTPUT command is used to request additional output not included as the default. The TECH1 option is used to request the arrays containing parameter specifications and starting values for all free parameters in the model. The TECH8 option is used to request that the optimization history in estimating the model be printed in the output. TECH8 is printed to the screen during the computations as the default. TECH8 screen printing is useful for determining how long the analysis takes and to check convergence using the PSR convergence criterion.

The PLOT command is used to request graphical displays of observed data and analysis results. These graphical displays can be viewed after the analysis is completed using a post-processing graphics module. The trace plot and autocorrelation plot can be used to monitor the MCMC iterations in terms of convergence and quality of the posterior distribution for each parameter. The posterior distribution plot shows the complete posterior distribution of the parameter estimate. Also available are time series plots of observed values, autocorrelations at different lags, and partial autocorrelations at different lags. An explanation of the other commands can be found in Example 6.1.
