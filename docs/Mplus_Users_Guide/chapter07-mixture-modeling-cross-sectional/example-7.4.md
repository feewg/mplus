# EXAMPLE 7.4: LCA With Binary Latent Class Indicators Using User-Specified Starting Values Without Random Starts

## Description

The differences between this example and Example 7.3 are that user-specified starting values are used instead of automatic starting values and there are no random starts. By specifying STARTS=0 in the ANALYSIS command, random starts are turned off.

## Mplus Input

```mplus
TITLE: this is an example of a LCA with binary
       latent class indicators using user-
       specified starting values without random
       starts
DATA: FILE IS ex7.4.dat;
VARIABLE: NAMES ARE u1-u4;
          CLASSES = c (2);
          CATEGORICAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
          STARTS = 0;
MODEL:
    %OVERALL%
    %c#1%
    [u1$1*1 u2$1*1 u3$1*-1 u4$1*-1];
    %c#2%
    [u1$1*-1 u2$1*-1 u3$1*1 u4$1*1];
OUTPUT: TECH1 TECH8;
```

## Explanation

In the MODEL command, user-specified starting values are given for the thresholds of the binary latent class indicators. For binary and ordered categorical dependent variables, thresholds are referred to by adding to a variable name a dollar sign ($) followed by a threshold number. The number of thresholds is equal to the number of categories minus one. Because the latent class indicators are binary, they have one threshold. The thresholds of the latent class indicators are referred to as u1$1, u2$1, u3$1, and u4$1. Square brackets are used to specify starting values in the logit scale for the thresholds of the binary latent class indicators. The asterisk (*) is used to assign a starting value. It is placed after a variable with the starting value following it. In the example above, the threshold of u1 is assigned the starting value of 1 for class 1 and -1 for class 2. The threshold of u4 is assigned the starting value of -1 for class 1 and 1 for class 2. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
