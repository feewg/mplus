# EXAMPLE 7.3: LCA With Binary Latent Class Indicators Using Automatic Starting Values With Random Starts

## Description

In this example, the latent class analysis (LCA) model with binary latent class indicators is estimated using automatic starting values and random starts. Because c is a categorical latent variable, the interpretation of the picture is not the same as for models with continuous latent variables. The arrows from c to the latent class indicators u1, u2, u3, and u4 indicate that the thresholds of the latent class indicators vary across the classes of c. This implies that the probabilities of the latent class indicators vary across the classes of c. The arrows correspond to the regressions of the latent class indicators on a set of dummy variables representing the categories of c.

## Mplus Input

```mplus
TITLE: this is an example of a LCA with binary
       latent class indicators using automatic
       starting values with random starts
DATA: FILE IS ex7.3.dat;
VARIABLE: NAMES ARE u1-u4 x1-x10;
          USEVARIABLES = u1-u4;
          CLASSES = c (2);
          CATEGORICAL = u1-u4;
          AUXILIARY = x1-x10 (R3STEP);
ANALYSIS: TYPE = MIXTURE;
OUTPUT: TECH1 TECH8 TECH10;
```

## Explanation

The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In the example above, the latent class indicators u1, u2, u3, and u4, are binary or ordered categorical variables. The program determines the number of categories for each indicator.

The AUXILIARY option is used to specify variables that are not part of the analysis that are important predictors of latent classes using a three-step approach (Vermunt, 2010; Asparouhov & Muthén, 2012b). The letters R3STEP in parentheses is placed behind the variables in the AUXILIARY statement that that will be used as covariates in the third step multinomial logistic regression in a mixture model.

The MODEL command does not need to be specified when automatic starting values are used. The thresholds of the observed variables and the mean of the categorical latent variable are estimated as the default. The thresholds are not held equal across classes as the default. The default estimator for this type of analysis is maximum likelihood with robust standard errors.

The TECH10 option is used to request univariate, bivariate, and response pattern model fit information for the categorical dependent variables in the model. This includes observed and estimated (expected) frequencies and standardized residuals.
