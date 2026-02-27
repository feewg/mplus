# EXAMPLE 7.18: LCA With A Second-Order Factor (Twin Analysis)

## Description

In this example, the second-order factor model is estimated. The first-order factors are categorical latent variables and the second-order factor is a continuous latent variable. This is a model that can be used for studies of twin associations where the categorical latent variable c1 refers to twin 1 and the categorical latent variable c2 refers to twin 2.

## Mplus Input

```mplus
TITLE: this is an example of a LCA with a second-
       order factor (twin analysis)
DATA: FILE IS ex7.18.dat;
VARIABLE: NAMES ARE u11-u13 u21-u23;
          CLASSES = c1(2) c2(2);
          CATEGORICAL = u11-u23;
ANALYSIS: TYPE = MIXTURE;
          ALGORITHM = INTEGRATION;
MODEL:
    %OVERALL%
    f BY;
    f@1;
    c1 c2 ON f*1 (1);
MODEL c1:
    %c1#1%
    [u11$1-u13$1*-1];
    %c1#2%
    [u11$1-u13$1*1];
MODEL c2:
    %c2#1%
    [u21$1-u23$1*-1];
    %c2#2%
    [u21$1-u23$1*1];
OUTPUT: TECH1 TECH8;
```

## Explanation

By specifying ALGORITHM=INTEGRATION, a maximum likelihood estimator with robust standard errors using a numerical integration algorithm will be used. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, one dimension of integration is used with 15 integration points.

When a model has more than one categorical latent variable, MODEL followed by a label is used to describe the analysis model for each categorical latent variable. Labels are defined by using the names of the categorical latent variables.

In the overall model, the BY statement names the second order factor f. The ON statement specifies that f influences both categorical latent variables in the same amount by imposing an equality constraint on the two multinomial logistic regression coefficients. The slope in the multinomial regression of c on f reflects the strength of association between the two categorical latent variables.
