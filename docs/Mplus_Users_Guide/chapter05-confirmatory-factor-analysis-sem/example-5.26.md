# EXAMPLE 5.26: EFA AT TWO TIME POINTS WITH FACTOR LOADING INVARIANCE AND CORRELATED RESIDUALS ACROSS TIME

## Description

This example demonstrates an EFA at two time points with factor loading invariance and correlated residuals across time. This is an exploratory structural equation model (ESEM; Asparouhov & Muthén, 2009a).

## Mplus Input

```mplus
TITLE: this is an example of an EFA at two time
points with factor loading invariance and
correlated residuals across time
DATA: FILE IS ex5.26.dat;
VARIABLE: NAMES ARE y1-y12;
MODEL: f1-f2 BY y1-y6 (*t1 1);
f3-f4 BY y7-y12 (*t2 1);
y1-y6 PWITH y7-y12;
OUTPUT: TECH1 STANDARDIZED;
```

## Explanation

In this example, the EFA at two time points with factor loading invariance and correlated residuals across time shown in the picture above is estimated. This is an exploratory structural equation model (ESEM; Asparouhov & Muthén, 2009a). The factor indicators y1 through y6 and y7 through y12 are the same variables measured at two time points. The factors f1 and f2 are one set of EFA factors which have the same factor indicators and the factors f3 and f4 are a second set of EFA factors which have the same factor indicators. Unlike CFA, no factor loadings are fixed at zero in either set. Instead, for each set, the four restrictions on the factor loadings, factor variances, and factor covariances necessary for identification are imposed by rotating the factor loading matrix and fixing the factor variances at one at the first time point. For the other time point, factor variances are free to be estimated as the default when factor loadings are constrained to be equal across time.

In the MODEL command, the first BY statement specifies that the factors f1 and f2 are measured by the continuous factor indicators y1 through y6. The label t1 following an asterisk (*) in parentheses following the BY statement is used to indicate that f1 and f2 are a set of EFA factors. The second BY statement specifies that the factors f3 and f4 are measured by the continuous factor indicators y7 through y12. The label t2 following an asterisk (*) in parentheses following the BY statement is used to indicate that f3 and f4 are a set of EFA factors. The number 1 following the labels t1 and t2 specifies that the factor loadings matrices for the two sets of EFA factors are constrained to be equal. When no rotation is specified using the ROTATION option of the ANALYSIS command, the default oblique GEOMIN rotation is used. For EFA factors, the intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. The intercepts are not held equal across time as the default. The means of the factors are fixed at zero at both time points and the variances of the factors are fixed at one as the default. In this example because the factor loadings are constrained to be equal across time, the factor variances are fixed at one at the first time point and are free to be estimated at the other time point. The factors are correlated as the default under the oblique GEOMIN rotation. The PWITH statement specifies that the residuals for each factor indicator are correlated over time. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 5.1.
