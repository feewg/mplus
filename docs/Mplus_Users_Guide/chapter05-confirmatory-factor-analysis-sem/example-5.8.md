# EXAMPLE 5.8: CFA WITH COVARIATES (MIMIC) WITH CONTINUOUS FACTOR INDICATORS

## Description

This example demonstrates a CFA model with covariates (MIMIC) with continuous factor indicators. The two factors are regressed on three covariates.

## Mplus Input

```mplus
TITLE: this is an example of a CFA with
covariates (MIMIC) with continuous factor
indicators
DATA: FILE IS ex5.8.dat;
VARIABLE: NAMES ARE y1-y6 x1-x3;
MODEL: f1 BY y1-y3;
f2 BY y4-y6;
f1 f2 ON x1-x3;
```

## Explanation

In this example, the CFA model with covariates (MIMIC) shown in the picture above is estimated. The two factors are regressed on three covariates.

The first BY statement specifies that f1 is measured by y1, y2, and y3. The second BY statement specifies that f2 is measured by y4, y5, and y6. The metric of the factors is set automatically by the program by fixing the first factor loading in each BY statement to 1. This option can be overridden. The intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. The residual variances of the factors are estimated as the default. The residuals of the factors are correlated as the default because residuals are correlated for latent variables that do not influence any other variable in the model except their own indicators. The ON statement describes the linear regressions of f1 and f2 on the covariates x1, x2, and x3. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 5.1.
