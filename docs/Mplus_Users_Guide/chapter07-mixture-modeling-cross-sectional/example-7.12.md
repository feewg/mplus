# EXAMPLE 7.12: LCA With Binary Latent Class Indicators Using Automatic Starting Values With Random Starts With A Covariate And A Direct Effect

## Description

The difference between this example and Example 7.3 is that the model contains a covariate and a direct effect.

## Mplus Input

```mplus
TITLE: this is an example of a LCA with binary
       latent class indicators using automatic
       starting values with random starts with a
       covariate and a direct effect
DATA: FILE IS ex7.12.dat;
VARIABLE: NAMES ARE u1-u4 x;
          CLASSES = c (2);
          CATEGORICAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
MODEL:
    %OVERALL%
    c ON x;
    u4 ON x;
OUTPUT: TECH1 TECH8;
```

## Explanation

The first ON statement describes the multinomial logistic regression of the categorical latent variable c on the covariate x when comparing class 1 to class 2. The intercepts of this regression are estimated as the default. The second ON statement describes the logistic regression of the binary indicator u4 on the covariate x. This is referred to as a direct effect from x to u4. The regression coefficient is held equal across classes as the default. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
