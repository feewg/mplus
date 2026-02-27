# EXAMPLE 3.11: PATH ANALYSIS WITH CONTINUOUS DEPENDENT VARIABLES

## Description

This example demonstrates a path analysis model with continuous dependent variables. The dependent variables in the analysis are continuous. Two of the dependent variables y1 and y2 mediate the effects of the covariates x1, x2, and x3 on the dependent variable y3.

In path analysis:
- Multiple regression equations are estimated simultaneously
- Dependent variables can serve as both outcomes and predictors
- The model allows for testing of direct and indirect effects

## Mplus Input

```mplus
TITLE: this is an example of a path analysis
       with continuous dependent variables
DATA: FILE IS ex3.11.dat;
VARIABLE: NAMES ARE y1-y6 x1-x4;
          USEVARIABLES ARE y1-y3 x1-x3;
MODEL: y1 y2 ON x1 x2 x3;
       y3 ON y1 y2 x2;
```

## Explanation

The first ON statement describes the linear regressions of y1 and y2 on the covariates x1, x2, and x3. These represent the paths from the exogenous variables to the first set of endogenous variables.

The second ON statement describes the linear regression of y3 on the mediating variables y1 and y2 and the covariate x2. This represents the paths from both the exogenous variables (direct effects) and the mediating variables (indirect effects pathway).

The residual variances of the three dependent variables are estimated as the default. The residuals are not correlated as the default.

As in regression analysis, it is not necessary to refer to the means, variances, and covariances among the x variables in the MODEL command because the parameters of the x variables are not part of the model estimation. Because the model does not impose restrictions on the parameters of the x variables, these parameters can be estimated separately as the sample values.

The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.
