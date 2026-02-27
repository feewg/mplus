# EXAMPLE 6.16: Two-part (semicontinuous) growth model for a continuous outcome

## Description

In this example, the two-part (semicontinuous) growth model (Olsen & Schafer, 2001) for a continuous outcome shown in the picture above is estimated. This is one type of model that can be considered when a variable has a floor effect, for example, a preponderance of zeroes. The analysis requires that one binary variable and one continuous variable be created from the outcome being studied.

## Mplus Input

```mplus
TITLE: this is an example of a two-part
(semicontinuous) growth model for a
continuous outcome
DATA: FILE = ex6.16.dat;
DATA TWOPART:
NAMES = y1-y4;
BINARY = bin1-bin4;
CONTINUOUS = cont1-cont4;
VARIABLE: NAMES = x y1-y4;
USEVARIABLES = bin1-bin4 cont1-cont4;
CATEGORICAL = bin1-bin4;
MISSING = ALL(999);
ANALYSIS: ESTIMATOR = MLR;
MODEL: iu su | bin1@0 bin2@1 bin3@2 bin4@3;
iy sy | cont1@0 cont2@1 cont3@2 cont4@3;
su@0; iu WITH sy@0;
OUTPUT: TECH1 TECH8;
```

## Explanation

The DATA TWOPART command is used to create a binary and a continuous variable from a variable with a floor effect. In this example, a set of binary and continuous variables are created using the default value of zero as the cutpoint. The CUTPOINT option of the DATA TWOPART command can be used to select another value. The two variables are created using the following rules:

1. If the value of the original variable is missing, both the new binary and the new continuous variable values are missing.
2. If the value of the original variable is greater than the cutpoint value, the new binary variable value is one and the new continuous variable value is the log of the original variable as the default.
3. If the value of the original variable is less than or equal to the cutpoint value, the new binary variable value is zero and the new continuous variable value is missing.

The TRANSFORM option of the DATA TWOPART command can be used to select an alternative to the default log transformation of the new continuous variables. One choice is no transformation.

The NAMES option of the DATA TWOPART command is used to identify the variables from the NAMES option of the VARIABLE command that are used to create a set of binary and continuous variables. Variables y1, y2, y3, and y4 are used. The BINARY option is used to assign names to the new set of binary variables. The names for the new binary variables are bin1, bin2, bin3, and bin4. The CONTINUOUS option is used to assign names to the new set of continuous variables. The names for the new continuous variables are cont1, cont2, cont3, and cont4. The new variables must be placed on the USEVARIABLES statement of the VARIABLE command if they are used in the analysis.

The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In the example above, bin1, bin2, bin3, and bin4 are binary variables. The MISSING option is used to identify the values or symbols in the analysis data set that are to be treated as missing or invalid. In this example, the number 999 is the missing value flag. The default is to estimate the model under missing data theory using all available data. By specifying ESTIMATOR=MLR, a maximum likelihood estimator with robust standard errors using a numerical integration algorithm will be used. Note that numerical integration becomes increasingly more computationally demanding as the number of growth factors and the sample size increase. In this example, one dimension of integration is used with a total of 15 integration points. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

The first | statement specifies a linear growth model for the binary outcome. The second | statement specifies a linear growth model for the continuous outcome. In the parameterization of the growth model for the binary outcome, the thresholds of the outcome variable at the four time points are held equal as the default. The mean of the intercept growth factor is fixed at zero. The mean of the slope growth factor and the variances of the intercept and slope growth factors are estimated as the default. In this example, the variance of the slope growth factor is fixed at zero for simplicity. In the parameterization of the growth model for the continuous outcome, the intercepts of the outcome variables at the four time points are fixed at zero as the default. The means and variances of the growth factors are estimated as the default, and the growth factors are correlated as the default because they are independent (exogenous) variables.

It is often the case that not all growth factor covariances are significant in two-part growth modeling. Fixing these at zero stabilizes the estimation. This is why the growth factor covariance between iu and sy is fixed at zero. The OUTPUT command is used to request additional output not included as the default. The TECH1 option is used to request the arrays containing parameter specifications and starting values for all free parameters in the model. The TECH8 option is used to request that the optimization history in estimating the model be printed in the output. TECH8 is printed to the screen during the computations as the default. TECH8 screen printing is useful for determining how long the analysis takes. An explanation of the other commands can be found in Example 6.1.
