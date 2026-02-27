# EXAMPLE 7.21: Mixture Modeling With Known Classes (Multiple Group Analysis)

## Description

In this example, the multiple group mixture model is estimated. The groups are represented by the classes of the categorical latent variable cg, which has known class (group) membership.

## Mplus Input

```mplus
TITLE: this is an example of mixture modeling
       with known classes (multiple group
       analysis)
DATA: FILE IS ex7.21.dat;
VARIABLE: NAMES = g y1-y4;
          CLASSES = cg (2) c (2);
          KNOWNCLASS = cg (g = 0 g = 1);
ANALYSIS: TYPE = MIXTURE;
MODEL:
    %OVERALL%
    c ON cg;
MODEL c:
    %c#1%
    [y1-y4];
    %c#2%
    [y1-y4];
MODEL cg:
    %cg#1%
    y1-y4;
    %cg#2%
    y1-y4;
OUTPUT: TECH1 TECH8;
```

## Explanation

The KNOWNCLASS option is used for multiple group analysis with TYPE=MIXTURE. It is used to identify the categorical latent variable for which latent class membership is known and is equal to observed groups in the sample. The KNOWNCLASS option identifies cg as the categorical latent variable for which latent class membership is known. The information in parentheses following the categorical latent variable name defines the known classes using an observed variable. In this example, the observed variable g is used to define the known classes. The first class consists of individuals with the value 0 on the variable g. The second class consists of individuals with the value 1 on the variable g.

The means of y1, y2, y3, and y4 vary across the classes of c, while the variances of y1, y2, y3, and y4 vary across the classes of cg.
