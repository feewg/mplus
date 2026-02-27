# EXAMPLE 3.1: Linear Regression

## Description

This is an example of a linear regression for a continuous observed dependent variable with two covariates.

## Mplus Input File

```mplus
TITLE: this is an example of a linear regression
    for a continuous observed dependent
    variable with two covariates
DATA: FILE IS ex3.1.dat;
VARIABLE: NAMES ARE y1-y6 x1-x4;
    USEVARIABLES ARE y1 x1 x3;
MODEL: y1 ON x1 x3;
```

## Explanation

### TITLE Command

The TITLE command is used to provide a title for the analysis. The title is printed in the output just before the Summary of Analysis.

### DATA Command

The DATA command is used to provide information about the data set to be analyzed. The FILE option is used to specify the name of the file that contains the data to be analyzed, `ex3.1.dat`. Because the data set is in free format, the default, a FORMAT statement is not required.

### VARIABLE Command

The VARIABLE command is used to provide information about the variables in the data set to be analyzed.

- The **NAMES** option is used to assign names to the variables in the data set. The data set in this example contains ten variables: y1, y2, y3, y4, y5, y6, x1, x2, x3, and x4. Note that the hyphen can be used as a convenience feature in order to generate a list of names.
- The **USEVARIABLES** option can be used to select a subset of variables for analysis. Here the variables y1, x1, and x3 have been selected for analysis.
- Because the scale of the dependent variable is not specified, it is assumed to be continuous.

### MODEL Command

The MODEL command is used to describe the model to be estimated.

The **ON** statement describes the linear regression of y1 on the covariates x1 and x3. It is not necessary to refer to the means, variances, and covariances among the x variables in the MODEL command because the parameters of the x variables are not part of the model estimation. Because the model does not impose restrictions on the parameters of the x variables, these parameters can be estimated separately as the sample values.

### Estimator

The default estimator for this type of analysis is **maximum likelihood**. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.
