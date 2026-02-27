# EXAMPLE 7.13: Confirmatory LCA With Binary Latent Class Indicators And Parameter Constraints

## Description

In this example, constraints are placed on the measurement parameters of the latent class indicators to reflect three hypotheses: (1) u2 and u3 are parallel measurements, (2) u1 has a probability of one in class 2, and (3) the error rate for u4 is the same in the two classes (McCutcheon, 2002, pp. 70-72).

## Mplus Input

```mplus
TITLE: this is an example of a confirmatory LCA
       with binary latent class indicators and
       parameter constraints
DATA: FILE IS ex7.13.dat;
VARIABLE: NAMES ARE u1-u4;
          CLASSES = c (2);
          CATEGORICAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
MODEL:
    %OVERALL%
    %c#1%
    [u1$1*-1];
    [u2$1-u3$1*-1] (1);
    [u4$1*-1] (p1);
    %c#2%
    [u1$1@-15];
    [u2$1-u3$1*1] (2);
    [u4$1*1] (p2);
MODEL CONSTRAINT:
    p2 = - p1;
OUTPUT: TECH1 TECH8;
```

## Explanation

The first hypothesis is specified by placing (1) following the threshold parameters for u2 and u3 in class 1 and (2) following the threshold parameters for u2 and u3 in class 2. This holds the thresholds for the two latent class indicators equal to each other but not equal across classes.

The second hypothesis is specified by fixing the threshold of u1 in class 2 to the logit value of -15.

The third hypothesis is specified using the MODEL CONSTRAINT command. The MODEL CONSTRAINT command is used to define linear and non-linear constraints on the parameters in the model. Parameters are given labels by placing a name in parentheses after the parameter in the MODEL command. In the MODEL command, the threshold of u4 in class 1 is given the label p1 and the threshold of u4 in class 2 is given the label p2. In the MODEL CONSTRAINT command, the linear constraint is defined. The threshold of u4 in class 1 is equal to the negative value of the threshold of u4 in class 2. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
