# EXAMPLE 7.29: Two-Group IRT Twin Model For Factors With Categorical Factor Indicators Using Parameter Constraints

## Description

In this example, the model is estimated. The factors f1 and f2 represent a univariate variable for each member of the twin pair. Monozygotic and dizygotic twins are considered in a two-group twin model for factors with categorical factor indicators using parameter constraints and maximum likelihood estimation. Parameter constraints are used to represent the ACE model restrictions. The ACE variance and covariance restrictions are placed on two factors instead of two observed variables as in Example 7.28. The relationships between the categorical factor indicators and the factors are logistic regressions. Therefore, the factor model for each twin is a two-parameter logistic Item Response Theory model (Muthén, Asparouhov, & Rebollo, 2006).

## Mplus Input

```mplus
TITLE: this is an example of a two-group IRT twin
       model for factors with categorical factor
       indicators using parameter constraints
DATA: FILE = ex7.29.dat;
VARIABLE: NAMES = u11-u14 u21-u24 dz;
          CATEGORICAL = u11-u24;
          CLASSES = cdz (2);
          KNOWNCLASS = cdz (dz = 0 dz = 1);
ANALYSIS: TYPE = MIXTURE;
          ALGORITHM = INTEGRATION;
MODEL: %OVERALL%
    f1 BY u11
    u12-u14 (lam2-lam4);
    f2 BY u21
    u22-u24 (lam2-lam4);
    [f1-f2@0];
    f1-f2 (var);
    [u11$1-u14$1] (t1-t4);
    [u21$1-u24$1] (t1-t4);
    %cdz#1%
    f1 WITH f2(covmz);
    %cdz#2%
    f1 WITH f2(covdz);
MODEL CONSTRAINT:
    NEW(a c e h);
    var = a**2 + c**2 + e**2;
    covmz = a**2 + c**2;
    covdz = 0.5*a**2 + c**2;
    h = a**2/(a**2 + c**2 + e**2);
```

## Explanation

By specifying ALGORITHM=INTEGRATION, a maximum likelihood estimator with robust standard errors using a numerical integration algorithm will be used. In this example, two dimensions of integration are used with 225 integration points.

In the overall model, the two BY statements specify that f1 is measured by u11, u12, u13, and u14 and that f2 is measured by u21, u22, u23, and u24. The means of the factors are fixed at zero.

In the MODEL command, labels are defined for nine parameters. The list function can be used when assigning labels. The label lam2 is assigned to the factor loadings for u12 and u22; the label lam3 is assigned to the factor loadings for u13 and u23; and the label lam4 is assigned to the factor loadings for u14 and u24. Factor loadings with the same label are held equal. The label t1 is assigned to the thresholds of u11 and u21; the label t2 is assigned to the thresholds of u12 and u22; the label t3 is assigned to the thresholds of u13 and u23; and the label t4 is assigned to the thresholds of u14 and u24.

In the MODEL CONSTRAINT command, the NEW option is used to assign labels to four parameters that are not in the analysis model: a, c, e, and h. The three parameters a, c, and e are used to decompose the variances and covariances of f1 and f2 into genetic and environmental components. The parameter h does not impose restrictions on the model parameters but is used to compute the heritability estimate and its standard error.
