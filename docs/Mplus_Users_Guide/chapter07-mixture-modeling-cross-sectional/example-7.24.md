# EXAMPLE 7.24: Mixture Randomized Trials Modeling Using CACE Estimation With Missing Data On The Latent Class Indicator

## Description

The difference between this example and Example 7.23 is that a binary latent class indicator u has been added to the model. This binary variable represents observed compliance status. Treatment compliers have a value of 1 on this variable; treatment non-compliers have a value of 0 on this variable; and individuals in the control group have a missing value on this variable. The latent class indicator u is used instead of training data.

## Mplus Input

```mplus
TITLE: this is an example of mixture randomized
       trials modeling using CACE estimation with
       missing data on the latent class indicator
DATA: FILE IS ex7.24.dat;
VARIABLE: NAMES ARE u y x1 x2;
          CLASSES = c (2);
          CATEGORICAL = u;
          MISSING = u (999);
ANALYSIS: TYPE = MIXTURE;
MODEL:
    %OVERALL%
    y ON x1 x2;
    c ON x1;
    %c#1%
    [u$1@15];
    [y];
    y;
    y ON x2@0;
    %c#2%
    [u$1@-15];
    [y*.5];
    y;
OUTPUT: TECH1 TECH8;
```

## Explanation

In the model for class 1, the threshold of the latent class indicator variable u is set to a logit value of 15. In the model for class 2, the threshold of the latent class indicator variable u is set to a logit value of –15. These logit values reflect that c is perfectly measured by u. Individuals in the non-complier class (class 1) have probability zero of observed compliance and individuals in the complier class (class 2) have probability one of observed compliance.
