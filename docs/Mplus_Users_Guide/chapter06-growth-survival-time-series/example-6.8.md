# EXAMPLE 6.8: Growth model for a continuous outcome with estimated time scores

## Description

The difference between this example and Example 6.1 is that two of the time scores are estimated.

## Mplus Input

```mplus
TITLE: this is an example of a growth model for a
continuous outcome with estimated time
scores
DATA: FILE IS ex6.8.dat;
VARIABLE: NAMES ARE y11-y14 x1 x2 x31-x34;
USEVARIABLES ARE y11-y14;
MODEL: i s | y11@0 y12@1 y13*2 y14*3;
```

## Explanation

The | statement highlighted above shows how to specify free time scores by using the asterisk (*) to designate a free parameter. Starting values are specified as the value following the asterisk (*). For purposes of model identification, two time scores must be fixed for a growth model with two growth factors. In the example above, the first two time scores are fixed at zero and one, respectively. The third and fourth time scores are free to be estimated at starting values of 2 and 3, respectively. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 6.1.
