# EXAMPLE 7.11: LCA With Binary, Censored, Unordered, And Count Latent Class Indicators Using User-Specified Starting Values Without Random Starts

## Description

The difference between this example and Example 7.4 is that the latent class indicators are a combination of binary, censored, unordered categorical (nominal) and count variables instead of binary variables.

## Mplus Input

```mplus
TITLE: this is an example of a LCA with binary,
       censored, unordered, and count latent
       class indicators using user-specified
       starting values without random starts
DATA: FILE IS ex7.11.dat;
VARIABLE: NAMES ARE u1 y1 u2 u3;
          CLASSES = c (2);
          CATEGORICAL = u1;
          CENSORED = y1 (b);
          NOMINAL = u2;
          COUNT = u3 (i);
ANALYSIS: TYPE = MIXTURE;
          STARTS = 0;
MODEL:
    %OVERALL%
    %c#1%
    [u1$1*-1 y1*3 u2#1*0 u2#2*1 u3*.5
    u3#1*1.5];
    y1*2;
    %c#2%
    [u1$1*0 y1*1 u2#1*-1 u2#2*0 u3*1 u3#1*1];
    y1*1;
OUTPUT: TECH1 TECH8;
```

## Explanation

The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In the example above, the latent class indicator u1 is a binary variable.

The CENSORED option is used to specify which dependent variables are treated as censored variables in the model and its estimation, whether they are censored from above or below, and whether a censored or censored-inflated model will be estimated. In the example above, y1 is a censored variable. The b in parentheses following y1 indicates that y1 is censored from below, that is, has a floor effect, and that the model is a censored regression model.

The NOMINAL option is used to specify which dependent variables are treated as unordered categorical (nominal) variables in the model and its estimation. In the example above, u2 is a three-category unordered variable. The categories of an unordered categorical variable are referred to by adding to the name of the unordered categorical variable the number sign (#) followed by the number of the category.

The COUNT option is used to specify which dependent variables are treated as count variables in the model and its estimation and whether a Poisson or zero-inflated Poisson model will be estimated. In the example above, u3 is a count variable. The i in parentheses following u3 indicates that a zero-inflated model will be estimated. The inflation part of the count variable is referred to by adding to the name of the count variable the number sign (#) followed by the number 1. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
