# EXAMPLE 4.1: EXPLORATORY FACTOR ANALYSIS WITH CONTINUOUS FACTOR INDICATORS

## Description

In the first part of this example, an exploratory factor analysis with continuous factor indicators is carried out. Rotated solutions with standard errors are obtained for each number of factors. Modification indices are requested for the residual correlations. In the second part of this example, the same exploratory factor analysis for four factors is carried out using exploratory structural equation modeling (ESEM).

## Mplus Input

**Part 1: Standard EFA**

```mplus
TITLE: this is an example of an exploratory
       factor analysis with continuous factor
       indicators
DATA: FILE IS ex4.1a.dat;
VARIABLE: NAMES ARE y1-y12;
ANALYSIS: TYPE = EFA 1 4;
OUTPUT: MODINDICES;
```

**Part 2: EFA using ESEM**

```mplus
TITLE: this is an example of an exploratory
       factor analysis with continuous factor
       indicators using exploratory structural
       equation modeling (ESEM)
DATA: FILE IS ex4.1b.dat;
VARIABLE: NAMES ARE y1-y12;
MODEL: f1-f4 BY y1-y12 (*1);
OUTPUT: MODINDICES;
```

## Explanation

**TITLE command:** The TITLE command is used to provide a title for the analysis. The title is printed in the output just before the Summary of Analysis.

**DATA command:** The DATA command is used to provide information about the data set to be analyzed. The FILE option is used to specify the name of the file that contains the data to be analyzed, ex4.1.dat. Because the data set is in free format, the default, a FORMAT statement is not required.

**VARIABLE command:** The VARIABLE command is used to provide information about the variables in the data set to be analyzed. The NAMES option is used to assign names to the variables in the data set. The data set in this example contains 12 variables: y1, y2, y3, y4, y5, y6, y7, y8, y9, y10, y11, and y12. Note that the hyphen can be used as a convenience feature in order to generate a list of names.

**ANALYSIS command (Part 1):** The ANALYSIS command is used to describe the technical details of the analysis. The TYPE option is used to describe the type of analysis that is to be performed. By specifying TYPE=EFA, an exploratory factor analysis will be carried out. The numbers following EFA give the lower and upper limits on the number of factors to be extracted. The default rotation is the oblique rotation of GEOMIN. The ROTATION option of the ANALYSIS command can be used to select a different rotation. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

**OUTPUT command:** The MODINDICES option is used with EFA to request modification indices and expected parameter change indices for the residual correlations which are fixed at zero in EFA.

**MODEL command (Part 2):** The difference between this part of the example and the first part is that an exploratory factor analysis for four factors is carried out using exploratory structural equation modeling (ESEM). In the MODEL command, the BY statement specifies that the factors f1 through f4 are measured by the continuous factor indicators y1 through y12. The label 1 following an asterisk (*) in parentheses following the BY statement is used to indicate that f1, f2, f3, and f4 are a set of EFA factors. When no rotation is specified using the ROTATION option of the ANALYSIS command, the default oblique GEOMIN rotation is used. The intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. The variances of the factors are fixed at one as the default. The factors are correlated under the default oblique GEOMIN rotation. The results are the same as for the four-factor EFA in the first part of the example.
