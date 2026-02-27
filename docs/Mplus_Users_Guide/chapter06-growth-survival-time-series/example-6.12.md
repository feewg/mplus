# EXAMPLE 6.12: Growth model with individually-varying times of observation and a random slope for time-varying covariates for a continuous outcome

## Description

In this example, the growth model with individually-varying times of observation, a time-invariant covariate, and time-varying covariates with random slopes shown in the picture above is estimated. The st shown in a circle represents the random slope. The broken arrows from st to the arrows from a21 to y1, a22 to y2, a23 to y3, and a24 to y4 indicate that the slopes in these regressions are random.

## Mplus Input

```mplus
TITLE: this is an example of a growth model with
individually-varying times of observation
and a random slope for time-varying
covariates for a continuous outcome
DATA: FILE IS ex6.12.dat;
VARIABLE: NAMES ARE y1-y4 x a11-a14 a21-a24;
TSCORES = a11-a14;
ANALYSIS: TYPE = RANDOM;
MODEL: i s | y1-y4 AT a11-a14;
st | y1 ON a21;
st | y2 ON a22;
st | y3 ON a23;
st | y4 ON a24;
i s st ON x;
```

## Explanation

The TSCORES option is used to identify the variables in the data set that contain information about individually-varying times of observation for the outcomes. The TYPE option is used to describe the type of analysis that is to be performed. By selecting RANDOM, a growth model with random slopes will be estimated.

The | symbol is used in conjunction with TYPE=RANDOM to name and define the random effect variables in the model. The names on the left-hand side of the | symbol name the random effect variables. In the first | statement, the AT option is used on the right-hand side of the | symbol to define a growth model with individually-varying times of observation for the outcome variable. Two growth factors are used in the model, a random intercept, i, and a random slope, s.

In the parameterization of the growth model shown here, the intercepts of the outcome variables are fixed at zero as the default. The residual variances of the outcome variables are free to be estimated as the default. The residual covariances of the outcome variables are fixed at zero as the default. The means, variances, and covariances of the intercept and slope growth factors are free as the default.

The second, third, fourth, and fifth | statements use the ON option to name and define the random slope variables in the model. The name on the left-hand side of the | symbol names the random slope variable. The statement on the right-hand side of the | symbol defines the random slope variable. In the second | statement, the random slope st is defined by the linear regression of the dependent variable y1 on the time-varying covariate a21. In the third | statement, the random slope st is defined by the linear regression of the dependent variable y2 on the time-varying covariate a22. In the fourth | statement, the random slope st is defined by the linear regression of the dependent variable y3 on the time-varying covariate a23. In the fifth | statement, the random slope st is defined by the linear regression of the dependent variable y4 on the time-varying covariate a24. Random slopes with the same name are treated as one variable during model estimation. The ON statement describes the linear regressions of the intercept growth factor i, the slope growth factor s, and the random slope st on the covariate x. The intercepts and residual variances of, i, s, and st, are free as the default. The residual covariance between i and s is estimated as the default. The residual covariances between st and i and s are fixed at zero as the default. The default estimator for this type of analysis is maximum likelihood with robust standard errors. The estimator option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 6.1.
