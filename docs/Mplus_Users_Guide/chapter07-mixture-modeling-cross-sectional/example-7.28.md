# EXAMPLE 7.28: Two-Group Twin Model For Categorical Outcomes Using Maximum Likelihood And Parameter Constraints

## Description

In this example, the model is estimated. The variables u1 and u2 represent a univariate outcome for each member of a twin pair. Monozygotic and dizygotic twins are considered in a two-group twin model for categorical outcomes using maximum likelihood estimation. Parameter constraints are used to represent the ACE model restrictions. The ACE variance and covariance restrictions are placed on normally-distributed latent response variables, which are also called liabilities, underlying the categorical outcomes. This model is referred to as the threshold model for liabilities (Neale & Cardon, 1992). The monozygotic and dizygotic twin groups are represented by latent classes with known class membership.

## Mplus Input

```mplus
TITLE: this is an example of a two-group twin
       model for categorical outcomes using
       maximum likelihood and parameter
       constraints
DATA: FILE = ex7.28.dat;
VARIABLE: NAMES = u1 u2 dz;
          CATEGORICAL = u1 u2;
          CLASSES = cdz (2);
          KNOWNCLASS = cdz (dz = 0 dz = 1);
ANALYSIS: TYPE = MIXTURE;
          ALGORITHM = INTEGRATION;
          LINK = PROBIT;
MODEL: %OVERALL%
    [u1$1-u2$1] (1);
    f1 BY u1;
    f2 BY u2;
    [f1-f2@0];
    f1-f2 (varf);
    %cdz#1%
    f1 WITH f2(covmz);
    %cdz#2%
    f1 WITH f2(covdz);
MODEL CONSTRAINT:
    NEW(a c h);
    varf = a**2 + c**2 + .001;
    covmz = a**2 + c**2;
    covdz = 0.5*a**2 + c**2;
    h = a**2/(a**2 + c**2 + 1);
```

## Explanation

By specifying ALGORITHM=INTEGRATION, a maximum likelihood estimator with robust standard errors using a numerical integration algorithm will be used. In this example, two dimensions of integration are used with 225 integration points.

The LINK option is used with maximum likelihood estimation to select a logit or a probit link for models with categorical outcomes. The default is a logit link. In this example, the probit link is used because the threshold model for liabilities uses normally-distributed latent response variables.

In the overall model, the (1) following the first bracket statement specifies that the thresholds of u1 and u2 are held equal across twins. The two BY statements define a factor behind each outcome. This is done because covariances of categorical outcomes are not part of the model when maximum likelihood estimation is used. The covariances of the factors become the covariances of the categorical outcomes or more precisely the covariances of the latent response variables underlying the categorical outcomes.

In the MODEL command, labels are defined for three parameters. The label varf is assigned to the variances of f1 and f2. The label covmz is assigned to the covariance between f1 and f2 for the monozygotic twins and the label covdz is assigned to the covariance between f1 and f2 for the dizygotic twins.

In the MODEL CONSTRAINT command, the NEW option is used to assign labels to three parameters that are not in the analysis model: a, c, and h. The two parameters a and c are used to decompose the covariances of u1 and u2 into genetic and environmental components. The parameter h does not impose restrictions on the model parameters but is used to compute the heritability estimate and its standard error.
