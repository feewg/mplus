# EXAMPLE 13.1: A COVARIANCE MATRIX AS DATA

## Description

This example is based on Example 5.1 in which individual data are analyzed. In this example, a covariance matrix is analyzed. The TYPE option is used to specify that the input data set is a covariance matrix. The NOBSERVATIONS option is required for summary data and is used to indicate how many observations are in the data set used to create the covariance matrix. Summary data are required to be in an external data file in free format.

## Mplus Input

```mplus
TITLE: this is an example of a CFA with
continuous factor indicators using a
covariance matrix as data
DATA: FILE IS ex5.1.dat;
TYPE = COVARIANCE;
NOBSERVATIONS = 1000;
VARIABLE: NAMES ARE y1-y6;
MODEL: f1 BY y1-y3;
f2 BY y4-y6;
```

## Explanation

Following is an example of the data:
```
1.0
.86 1.0
.56 .76 1.0
.78 .34 .48 1.0
.65 .87 .32 .56 1.0
.66 .78 .43 .45 .33 1.0
```

The TYPE option is used to specify that the input data set is a covariance matrix. The NOBSERVATIONS option is required for summary data and is used to indicate how many observations are in the data set used to create the covariance matrix. Summary data are required to be in an external data file in free format.
