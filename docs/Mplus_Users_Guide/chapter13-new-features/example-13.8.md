# EXAMPLE 13.8: FREEING AND FIXING PARAMETERS AND GIVING STARTING VALUES

## Description

This example is based on Example 5.1 where default starting values are used. In this example, parameters are freed, assigned starting values, and fixed. In the two BY statements, the factor loadings for `y1` and `y4` are fixed at one as the default because they are the first variable following the BY statement. This is done to set the metric of the factors. To free these parameters, an asterisk (*) is placed after `y1` and `y4`.

## Mplus Input

```mplus
TITLE: this is an example of a CFA with
continuous factor indicators where
parameters are freed, fixed, and starting
values are given
DATA: FILE IS ex5.1.dat;
VARIABLE: NAMES ARE y1-y6;
MODEL: f1 BY y1* y2*.5 y3;
f2 BY y4* y5 y6*.8;
f1-f2@1;
```

## Explanation

In the two BY statements:
- The factor loadings for `y1` and `y4` are fixed at one as the default because they are the first variables following the BY statement. This is done to set the metric of the factors
- To free these parameters, an asterisk (*) is placed after `y1` and `y4`

The factor loadings for variables `y2`, `y3`, `y5`, and `y6` are free as the default with starting values of one. To assign starting values to `y2` and `y6`:
- An asterisk (*) followed by a number is placed after `y2` and `y6`
- The starting value of .5 is assigned to `y2`
- The starting value of .8 is assigned to `y6`

The variances of `f1` and `f2` are free to be estimated as the default. To fix these variances to one, an @ symbol followed by 1 is placed after `f1` and `f2` in a list statement. This is another way to set the metric of the factors.
