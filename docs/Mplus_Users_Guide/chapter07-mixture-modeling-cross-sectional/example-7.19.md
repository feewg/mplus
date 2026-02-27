# EXAMPLE 7.19: SEM With A Categorical Latent Variable Regressed On A Continuous Latent Variable

## Description

In this example, the model with both a continuous and categorical latent variable is estimated. The categorical latent variable c is regressed on the continuous latent variable f in a multinomial logistic regression.

## Mplus Input

```mplus
TITLE: this is an example of a SEM with a
       categorical latent variable regressed on a
       continuous latent variable
DATA: FILE IS ex7.19.dat;
VARIABLE: NAMES ARE u1-u8;
          CATEGORICAL = u1-u8;
          CLASSES = c (2);
ANALYSIS: TYPE = MIXTURE;
          ALGORITHM = INTEGRATION;
MODEL:
    %OVERALL%
    f BY u1-u4;
    c ON f;
    %c#1%
    [u5$1-u8$1];
    %c#2%
    [u5$1-u8$1];
OUTPUT: TECH1 TECH8;
```

## Explanation

By specifying ALGORITHM=INTEGRATION, a maximum likelihood estimator with robust standard errors using a numerical integration algorithm will be used. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, one dimension of integration is used with 15 integration points.

In the overall model, the BY statement specifies that f is measured by the categorical factor indicators u1 through u4. The categorical latent variable c has four binary latent class indicators u5 through u8. The ON statement specifies the multinomial logistic regression of the categorical latent variable c on the continuous latent variable f.
