# EXAMPLE 7.9: LCA With Continuous Latent Class Indicators Using Automatic Starting Values With Random Starts

## Description

The difference between this example and Example 7.3 is that the latent class indicators are continuous variables instead of binary variables. When there is no specification in the VARIABLE command regarding the scale of the dependent variables, it is assumed that they are continuous. Latent class analysis with continuous latent class indicators is often referred to as latent profile analysis.

## Mplus Input

```mplus
TITLE: this is an example of a LCA with
       continuous latent class indicators using
       automatic starting values with random
       starts
DATA: FILE IS ex7.9.dat;
VARIABLE: NAMES ARE y1-y4;
          CLASSES = c (2);
ANALYSIS: TYPE = MIXTURE;
OUTPUT: TECH1 TECH8;
```

## Explanation

The MODEL command does not need to be specified when automatic starting values are used. The means and variances of the latent class indicators and the mean of the categorical latent variable are estimated as the default. The means of the latent class indicators are not held equal across classes as the default. The variances are held equal across classes as the default and the covariances among the latent class indicators are fixed at zero as the default. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
