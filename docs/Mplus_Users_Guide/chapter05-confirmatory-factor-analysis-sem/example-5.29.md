# EXAMPLE 5.29: BI-FACTOR EFA USING ESEM

## Description

This example demonstrates a bi-factor exploratory factor analysis (Jennrich & Bentler, 2011, 2012) using ESEM with continuous factor indicators.

## Mplus Input

```mplus
TITLE: this is an example of a bi-factor EFA
using ESEM
DATA: FILE = ex5.29.dat;
VARIABLE: NAMES = y1-y10;
ANALYSIS: ROTATION = BI-GEOMIN;
MODEL: fg f1 f2 BY y1-y10 (*1);
OUTPUT: STDY;
```

## Explanation

In this example, a bi-factor exploratory factor analysis (Jennrich & Bentler, 2011, 2012) using ESEM with continuous factor indicators is carried out using a bi-factor Geomin rotation. This is an exploratory structural equation model (ESEM; Asparouhov & Muthén, 2009a). The factors fg, f1, and f2 are EFA factors which have the same factor indicators. By specifying BI-GEOMIN, a bi-factor EFA will be carried out using a bi-factor Geomin rotation. The default is an oblique solution where the specific factors are correlated with the general factor and are correlated with each other. In the orthogonal solution, the specific factors are uncorrelated with the general factor and are uncorrelated with each other. An orthogonal rotation is obtained by specifying ROTATION=BI-GEOMIN(ORTHOGONAL). An alternative bi-factor rotation can be obtained using the BI-CF-QUARTIMAX setting of the ROTATION option.

In the MODEL command, the BY statement specifies that the factors fg, f1, and f2 are measured by the continuous factor indicators y1 through y10. The factor fg is a general factor and f1 and f2 are specific factors. The label 1 following an asterisk (*) in parentheses following the BY statement is used to indicate that fg, f1, and f2 are a set of EFA factors. The intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. The variances of the factors are fixed at one as the default. In the OUTPUT command, the STDY option is chosen for standardization with respect to y. This puts the results in the metric of an EFA. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 5.1.
