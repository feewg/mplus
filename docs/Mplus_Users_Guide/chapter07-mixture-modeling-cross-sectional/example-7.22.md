# EXAMPLE 7.22: Mixture Modeling With Continuous Variables That Correlate Within Class (Multivariate Normal Mixture Model)

## Description

In this example, the mixture model is estimated. Because c is a categorical latent variable, the interpretation of the picture is not the same as for models with continuous latent variables. The arrows from c to the observed variables y1, y2, y3, and y4 indicate that the means of the observed variables vary across the classes of c. The arrows correspond to the regressions of the observed variables on a set of dummy variables representing the categories of c. The observed variables correlate within class. This is a conventional multivariate mixture model (Everitt & Hand, 1981; McLachlan & Peel, 2000).

## Mplus Input

```mplus
TITLE: this is an example of mixture modeling
       with continuous variables that correlate
       within class (multivariate normal mixture
       model)
DATA: FILE IS ex7.22.dat;
VARIABLE: NAMES ARE y1-y4;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE;
MODEL:
    %OVERALL%
    y1 WITH y2-y4;
    y2 WITH y3 y4;
    y3 WITH y4;
    %c#2%
    [y1–y4*-1];
    %c#3%
    [y1–y4*1];
OUTPUT: TECH1 TECH8;
```

## Explanation

In the overall model, by specifying the three WITH statements the default of zero covariances within class is relaxed and the covariances among y1, y2, y3, and y4 are estimated. These covariances are held equal across classes as the default. The variances of y1, y2, y3, and y4 are estimated and held equal as the default.

When WITH statements are included in a mixture model, starting values may be useful. In the class-specific model for class 2, starting values of -1 are given for the means of y1, y2, y3, and y4. In the class-specific model for class 3, starting values of 1 are given for the means of y1, y2, y3, and y4. The default estimator for this type of analysis is maximum likelihood with robust standard errors.
