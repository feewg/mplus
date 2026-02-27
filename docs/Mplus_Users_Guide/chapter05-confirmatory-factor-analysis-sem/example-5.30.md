# EXAMPLE 5.30: BI-FACTOR EFA WITH TWO ITEMS LOADING ON ONLY THE GENERAL FACTOR

## Description

This example demonstrates a bi-factor exploratory factor analysis with continuous factor indicators where two items load on only the general factor.

## Mplus Input

```mplus
TITLE: this is an example of bi-factor EFA with
two items loading on only the general
factor
DATA: FILE = ex5.30.dat;
VARIABLE: NAMES = y1-y10;
ANALYSIS: ROTATION = GEOMIN;
MODEL: fg BY y1-y10*;
fg@1;
f1-f2 BY y1-y8 (*1);
fg WITH f1-f2@0;
OUTPUT: STDY;
```

## Explanation

In this example, a bi-factor exploratory factor analysis with continuous factor indicators is carried out using a Geomin rotation. This is an exploratory structural equation model (ESEM; Asparouhov & Muthén, 2009a). The general factor fg is a CFA factor. The specific factors f1 and f2 are EFA factors which have the same factor indicators. Only the specific factors are rotated. By specifying GEOMIN, an EFA will be carried out using the Geomin rotation for the specific factors. The default is an oblique rotation. An orthogonal rotation can be obtained by specifying ROTATION=GEOMIN(ORTHOGONAL). The ROTATION option can be used to specify other rotations.

In the MODEL command, the first BY statement specifies that the general factor fg is measured by y1 through y10. The asterisk (*) frees the first factor loading which is fixed at one as the default to define the metric of the factor. Instead the metric of the factor is defined by fixing the factor variance at one. The second BY statement specifies that the specific factors f1 and f2 are measured by the continuous factor indicators y1 through y8. The label following an asterisk (*) in parentheses following the BY statement is used to indicate that f1 and f2 are a set of EFA factors. The variances of the factors are fixed at one as the default. The specific factors are correlated under the oblique Geomin rotation. The WITH statement specifies that the general and specific factors are not correlated. The intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. In the OUTPUT command, the STDY option is chosen for standardization with respect to y. This puts the results in the metric of an EFA. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator. An explanation of the other commands can be found in Example 5.1.
