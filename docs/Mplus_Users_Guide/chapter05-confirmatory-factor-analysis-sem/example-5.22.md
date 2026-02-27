# EXAMPLE 5.22: TWO-GROUP TWIN MODEL FOR CATEGORICAL OUTCOMES USING PARAMETER CONSTRAINTS

## Description

This example demonstrates a two-group twin model for categorical outcomes using parameter constraints. The model estimated is the same as the model in Example 5.19.

## Mplus Input

```mplus
TITLE: this is an example of a two-group twin
model for categorical outcomes using
parameter constraints
DATA: FILE = ex5.22.dat;
VARIABLE: NAMES = u1 u2 g;
GROUPING = g(1 = mz 2 = dz);
CATEGORICAL = u1 u2;
MODEL: [u1$1-u2$1](1);
u1 WITH u2(covmz);
MODEL dz: u1 WITH u2(covdz);
MODEL CONSTRAINT:
NEW(a c e h);
covmz = a**2 + c**2;
covdz = 0.5*a**2 + c**2;
e = 1 - (a**2 + c**2);
h = a**2/1;
```

## Explanation

The difference between this example and Example 5.21 is that the outcomes are binary or ordered categorical instead of continuous variables. Because of this, the outcomes have no freely estimated residual variances. The ACE variance and covariance restrictions are placed on normally-distributed latent response variables underlying the categorical outcomes which are also called liabilities. This model is referred to as the threshold model for liabilities (Neale & Cardon, 1992). The model estimated is the same as the model in Example 5.19.

The variance contribution from the E factor is not a freely estimated parameter with categorical outcomes. It is a remainder obtained by subtracting the variance contributions of the A and C factors from the unit variance of the latent response variables underlying u1 and u2 as shown in the MODEL CONSTRAINT command. The denominator for the heritability estimate is one with categorical outcomes because the latent response variables have unit variances.

The default estimator for this type of analysis is a robust weighted least squares estimator. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. With maximum likelihood, logistic or probit regressions are estimated using a numerical integration algorithm. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. An explanation of the other commands can be found in Examples 5.1, 5.14, 5.19 and 5.21.
