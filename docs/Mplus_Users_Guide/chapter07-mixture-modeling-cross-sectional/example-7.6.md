# EXAMPLE 7.6: LCA With Three-Category Latent Class Indicators Using User-Specified Starting Values Without Random Starts

## Description

The difference between this example and Example 7.4 is that the latent class indicators are ordered categorical (ordinal) variables with three categories instead of binary variables. When latent class indicators are ordered categorical variables, each latent class indicator has more than one threshold.

## Mplus Input

```mplus
TITLE: this is an example of a LCA with three-
       category latent class indicators using
       user-specified starting values without
       random starts
DATA: FILE IS ex7.6.dat;
VARIABLE: NAMES ARE u1-u4;
          CLASSES = c (2);
          CATEGORICAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
          STARTS = 0;
MODEL:
    %OVERALL%
    %c#1%
    [u1$1*.5 u2$1*.5 u3$1*-.5 u4$1*-.5];
    [u1$2*1 u2$2*1 u3$2*0 u4$2*0];
    %c#2%
    [u1$1*-.5 u2$1*-.5 u3$1*.5 u4$1*.5];
    [u1$2*0 u2$2*0 u3$2*1 u4$2*1];
OUTPUT: TECH1 TECH8;
```

## Explanation

The number of thresholds is equal to the number of categories minus one. When user-specified starting values are used, they must be specified for all thresholds and they must be in increasing order for each variable within each class. For example, in class 1 the threshold starting values for latent class indicator u1 are .5 for the first threshold and 1 for the second threshold. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
