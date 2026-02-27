# EXAMPLE 5.25: SEM WITH EFA AND CFA FACTORS WITH CONTINUOUS FACTOR INDICATORS

## Description

This example demonstrates a SEM with EFA and CFA factors with continuous factor indicators. This is an exploratory structural equation model (ESEM; Asparouhov & Muthén, 2009a).

## Mplus Input

```mplus
TITLE: this is an example of a SEM with EFA and
CFA factors with continuous factor
indicators
DATA: FILE IS ex5.25.dat;
VARIABLE: NAMES ARE y1-y12;
MODEL: f1-f2 BY y1-y6 (*1);
f3 BY y7-y9;
f4 BY y10-y12;
f3 ON f1-f2;
f4 ON f3;
```

## Explanation

In this example, the SEM with EFA and CFA factors with continuous factor indicators shown in the picture above is estimated. This is an exploratory structural equation model (ESEM; Asparouhov & Muthén, 2009a). The factors f1 and f2 are EFA factors which have the same factor indicators. Unlike CFA, no factor loadings are fixed at zero. Instead, the four restrictions on the factor loadings, factor variances, and factor covariances necessary for identification are imposed by rotating the factor loading matrix and fixing the factor variances at one. The factors f3 and f4 are CFA factors.

In the MODEL command, the first BY statement specifies that the factors f1 and f2 are measured by the continuous factor indicators y1 through y6. The label 1 following an asterisk (*) in parentheses following the BY statement is used to indicate that f1 and f2 are a set of EFA factors. When no rotation is specified using the ROTATION option of the ANALYSIS command, the default oblique GEOMIN rotation is used. For EFA factors, the intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. The variances of the factors are fixed at one as the default. The factors are correlated under the default oblique GEOMIN rotation. The second BY statement specifies that f3 is measured by y7, y8, and y9. The third BY statement specifies that f4 is measured by y10, y11, and y12. The metric of the factors is set automatically by the program by fixing the first factor loading in each BY statement to 1. This option can be overridden. The intercepts and residual variances of the factor indicators are estimated and the residual are not correlated as the default. The residual variances of the factors are estimated as the default.

The first ON statement describes the linear regression of f3 on the set of EFA factors f1 and f2. The second ON statement describes the linear regression of f4 on f3. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 5.1.
