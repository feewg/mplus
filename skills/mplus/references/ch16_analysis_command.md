# Chapter 16: ANALYSIS Command

## 1. Overview

The ANALYSIS command specifies technical analysis details.

## 2. TYPE Options

| Type | Description |
|------|-------------|
| GENERAL | Standard analysis (default) |
| BASIC | Descriptive statistics only |
| EFA n1 n2 | Exploratory factor analysis |
| MIXTURE | Mixture models |
| TWOLEVEL | Two-level models |
| THREELEVEL | Three-level models |
| CROSSCLASSIFIED | Cross-classified models |
| RANDOM | Random effects models |
| COMPLEX | Complex survey data |

## 3. ESTIMATOR Options

| Estimator | Description |
|-----------|-------------|
| ML | Maximum Likelihood |
| MLR | ML with robust SEs |
| MLM | Mean-adjusted ML |
| MLMV | Mean/variance-adjusted ML |
| WLSMV | Robust WLS |
| BAYES | Bayesian estimation |

## 4. Other Options

| Option | Description |
|--------|-------------|
| ALGORITHM | EM, FS, GIBBS, MH |
| INTEGRATION | STANDARD, MONTECARLO, n |
| ITERATIONS | Maximum iterations |
| CONVERGENCE | Convergence criterion |
| BOOTSTRAP | Bootstrap samples |
| PROCESSORS | Number of processors |
| STARTS | Random starts for mixture |

## 5. Examples

```mplus
ANALYSIS: TYPE = TWOLEVEL RANDOM;
          ESTIMATOR = MLR;
          ALGORITHM = EM;
```

```mplus
ANALYSIS: TYPE = MIXTURE;
          STARTS = 500 100;
```

```mplus
ANALYSIS: ESTIMATOR = BAYES;
          PROCESSORS = 2;
```
