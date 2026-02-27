# EXAMPLE 5.1: CFA WITH CONTINUOUS FACTOR INDICATORS

## Description

This example demonstrates a confirmatory factor analysis (CFA) model with continuous factor indicators. The model has two correlated factors that are each measured by three continuous factor indicators.

## Mplus Input

```mplus
TITLE: this is an example of a CFA with
continuous factor indicators
DATA: FILE IS ex5.1.dat;
VARIABLE: NAMES ARE y1-y6;
MODEL: f1 BY y1-y3;
f2 BY y4-y6;
```

## Explanation

The TITLE command is used to provide a title for the analysis. The title is printed in the output just before the Summary of Analysis.

The DATA command is used to provide information about the data set to be analyzed. The FILE option is used to specify the name of the file that contains the data to be analyzed, ex5.1.dat. Because the data set is in free format, the default, a FORMAT statement is not required.

The VARIABLE command is used to provide information about the variables in the data set to be analyzed. The NAMES option is used to assign names to the variables in the data set. The data set in this example contains six variables: y1, y2, y3, y4, y5, y6. Note that the hyphen can be used as a convenience feature in order to generate a list of names.

The MODEL command is used to describe the model to be estimated. Here the two BY statements specify that f1 is measured by y1, y2, and y3, and f2 is measured by y4, y5, and y6. The metric of the factors is set automatically by the program by fixing the first factor loading in each BY statement to 1. This option can be overridden. The intercepts and residual variances of the factor indicators are estimated and the residuals are not correlated as the default. The variances of the factors are estimated as the default. The factors are correlated as the default because they are independent (exogenous) variables. The default estimator for this type of analysis is maximum likelihood. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.
