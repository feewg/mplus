# EXAMPLE 7.7: LCA With Unordered Categorical Latent Class Indicators Using Automatic Starting Values With Random Starts

## Description

The difference between this example and Example 7.3 is that the latent class indicators are unordered categorical (nominal) variables instead of binary variables.

## Mplus Input

```mplus
TITLE: this is an example of a LCA with unordered
       categorical latent class indicators using
       automatic starting values with random
       starts
DATA: FILE IS ex7.7.dat;
VARIABLE: NAMES ARE u1-u4;
          CLASSES = c (2);
          NOMINAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
OUTPUT: TECH1 TECH8;
```

## Explanation

The NOMINAL option is used to specify which dependent variables are treated as unordered categorical (nominal) variables in the model and its estimation. In the example above, u1, u2, u3, and u4 are three-category unordered variables. The categories of an unordered categorical variable are referred to by adding to the name of the unordered categorical variable the number sign (#) followed by the number of the category. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
