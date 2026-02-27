# EXAMPLE 7.27: Factor (IRT) Mixture Analysis With Binary Latent Class And Factor Indicators

## Description

In this example, the factor (IRT) mixture model is estimated (Muthén, 2008). The model is a generalization of the latent class model where the latent class model assumption of conditional independence between the latent class indicators within class is relaxed using a factor that influences the items within each class (Muthén, 2006; Muthén & Asparouhov, 2006; Muthén, Asparouhov, & Rebollo, 2006). The factor represents individual variation in response probabilities within class. Alternatively, this model may be seen as an Item Response Theory (IRT) mixture model.

## Mplus Input

```mplus
TITLE: this is an example of a factor (IRT)
       mixture analysis with binary latent class
       and factor indicators
DATA: FILE = ex7.27.dat;
VARIABLE: NAMES = u1-u8;
          CATEGORICAL = u1-u8;
          CLASSES = c (2);
ANALYSIS: TYPE = MIXTURE;
          ALGORITHM = INTEGRATION;
          STARTS = 100 20;
MODEL: %OVERALL%
    f BY u1-u8;
    [f@0];
    %c#1%
    f BY u1@1 u2-u8;
    f;
    [u1$1-u8$1];
    %c#2%
    f BY u1@1 u2-u8;
    f;
    [u1$1-u8$1];
OUTPUT: TECH1 TECH8;
```

## Explanation

By specifying ALGORITHM=INTEGRATION, a maximum likelihood estimator with robust standard errors using a numerical integration algorithm will be used. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, one dimension of integration is used with 15 integration points.

The STARTS option is used to specify the number of initial stage random sets of starting values to generate and the number of final stage optimizations to use. The default is 20 random sets of starting values for the initial stage and 4 optimizations for the final stage. In the example above, the STARTS option specifies that 100 random sets of starting values for the initial stage and 20 final stage optimizations will be used.

In the overall model, the BY statement specifies that the factor f is measured by u1, u2, u3, u4, u5, u6, u7, and u8. The mean of the factor is fixed at zero which implies that the mean is zero in both classes. The factor variance is held equal across classes as the default. The statements in the class-specific parts of the model relax the equality constraints across classes for the factor loadings, factor variance, and the thresholds of the indicators.
