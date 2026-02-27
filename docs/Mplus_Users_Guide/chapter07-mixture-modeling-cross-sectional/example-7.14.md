# EXAMPLE 7.14: Confirmatory LCA With Two Categorical Latent Variables

## Description

In this example, the confirmatory LCA with two categorical latent variables is estimated. The two categorical latent variables are correlated and have their own sets of latent class indicators.

## Mplus Input

```mplus
TITLE: this is an example of a confirmatory LCA
       with two categorical latent variables
DATA: FILE IS ex7.14.dat;
VARIABLE: NAMES ARE u1-u4 y1-y4;
          CLASSES = cu (2) cy (3);
          CATEGORICAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
          PARAMETERIZATION = LOGLINEAR;
MODEL:
    %OVERALL%
    cu WITH cy;
MODEL cu:
    %cu#1%
    [u1$1-u4$1];
    %cu#2%
    [u1$1-u4$1];
MODEL cy:
    %cy#1%
    [y1-y4];
    %cy#2%
    [y1-y4];
    %cy#3%
    [y1-y4];
OUTPUT: TECH1 TECH8;
```

## Explanation

The CLASSES option is used to assign names to the categorical latent variables in the model and to specify the number of latent classes in the model for each categorical latent variable. In the example above, there are two categorical latent variables cu and cy. The categorical latent variable cu has two latent classes and the categorical latent variable cy has three latent classes.

PARAMETERIZATION=LOGLINEAR is used to specify associations among categorical latent variables. In the LOGLINEAR parameterization, the WITH option of the MODEL command is used to specify the relationships between the categorical latent variables. When a model has more than one categorical latent variable, MODEL followed by a label is used to describe the analysis model for each categorical latent variable. Labels are defined by using the names of the categorical latent variables.

The categorical latent variable cu has four binary indicators u1 through u4. Their thresholds are specified to vary only across the classes of the categorical latent variable cu. The categorical latent variable cy has four continuous indicators y1 through y4. Their means are specified to vary only across the classes of the categorical latent variable cy. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
