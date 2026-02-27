# EXAMPLE 7.5: LCA With Binary Latent Class Indicators Using User-Specified Starting Values With Random Starts

## Description

The difference between this example and Example 7.4 is that random starts are used. In this example, the random perturbations are based on user-specified starting values.

## Mplus Input

```mplus
TITLE: this is an example of a LCA with binary
       latent class indicators using user-
       specified starting values with random
       starts
DATA: FILE IS ex7.5.dat;
VARIABLE: NAMES ARE u1-u4;
          CLASSES = c (2);
          CATEGORICAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
          STARTS = 100 10;
          STITERATIONS = 20;
MODEL:
    %OVERALL%
    %c#1%
    [u1$1*1 u2$1*1 u3$1*-1 u4$1*-1];
    %c#2%
    [u1$1*-1 u2$1*-1 u3$1*1 u4$1*1];
OUTPUT: TECH1 TECH8;
```

## Explanation

The STARTS option is used to specify the number of initial stage random sets of starting values to generate and the number of final stage optimizations to use. The default is 20 random sets of starting values for the initial stage and 4 optimizations for the final stage. In the example above, the STARTS option specifies that 100 random sets of starting values for the initial stage and 10 final stage optimizations will be used. The STITERATIONS option is used to specify the maximum number of iterations allowed in the initial stage. In this example, 20 iterations are allowed in the initial stage instead of the default of 10. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
