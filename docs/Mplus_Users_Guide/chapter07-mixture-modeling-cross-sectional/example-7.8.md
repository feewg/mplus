# EXAMPLE 7.8: LCA With Unordered Categorical Latent Class Indicators Using User-Specified Starting Values With Random Starts

## Description

The difference between this example and Example 7.7 is that user-specified starting values are used instead of automatic starting values.

## Mplus Input

```mplus
TITLE: this is an example of a LCA with unordered
       categorical latent class indicators using
       user-specified starting values with random
       starts
DATA: FILE IS ex7.8.dat;
VARIABLE: NAMES ARE u1-u4;
          CLASSES = c (2);
          NOMINAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
MODEL: %OVERALL%
    %c#1%
    [u1#1-u4#1*0];
    [u1#2-u4#2*1];
    %c#2%
    [u1#1-u4#1*-1];
    [u1#2-u4#2*-1];
OUTPUT: TECH1 TECH8;
```

## Explanation

Means are referred to by using bracket statements. The categories of an unordered categorical variable are referred to by adding to the name of the unordered categorical variable the number sign (#) followed by the number of the category. In this example, u1#1 refers to the first category of u1 and u1#2 refers to the second category of u1. Starting values of 0 and 1 are given for the means in class 1 and starting values of -1 are given for the means in class 2. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
