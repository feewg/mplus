# EXAMPLE 13.2: MEANS AND A COVARIANCE MATRIX AS DATA

## Description

This example is based on Example 5.9 in which individual data are analyzed. In this example, means and a covariance matrix are analyzed. The TYPE option is used to specify that the input data set contains means and a covariance matrix. The NOBSERVATIONS option is required for summary data and is used to indicate how many observations are in the data set used to create the means and covariance matrix.

## Mplus Input

```mplus
TITLE: this is an example of a mean structure CFA
with continuous factor indicators using
means and a covariance matrix as data
DATA: FILE IS ex5.9.dat;
TYPE IS MEANS COVARIANCE;
NOBSERVATIONS = 1000;
VARIABLE: NAMES ARE y1a-y1c y2a-y2c;
MODEL: f1 BY y1a y1b@1 y1c@1;
f2 BY y2a y2b@1 y2c@1;
[y1a y1b y1c] (1);
[y2a y2b y2c] (2);
```

## Explanation

Summary data are required to be in an external data file in free format. Following is an example of the data. The means come first followed by the covariances. The covariances must start on a new record.

```
.4 .6 .3 .5
1.0
.86 1.0
.56 .76 1.0
.78 .34 .48 1.0
```

The TYPE option is used to specify that the input data set contains means and a covariance matrix. The NOBSERVATIONS option is required for summary data and is used to indicate how many observations are in the data set used to create the means and covariance matrix.
