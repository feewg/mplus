# EXAMPLE 10.1: Two-Level Mixture Regression for a Continuous Dependent Variable

## Description

This example shows a two-level mixture regression model for a continuous dependent variable. This example is the same as Example 7.1 except that it has been extended to the multilevel framework. In the within part of the model, the filled circles at the end of the arrows from x1 to c and y represent random intercepts that are referred to as c#1 and y in the between part of the model. In the between part of the model, the random intercepts are shown in circles because they are continuous latent variables that vary across clusters. The random intercepts y and c#1 are regressed on a cluster-level covariate w.

Because c is a categorical latent variable, the interpretation of the picture is not the same as for models with continuous latent variables. The arrow from c to the y variable indicates that the intercept of the y variable varies across the classes of c. This corresponds to the regression of y on a set of dummy variables representing the categories of c. The broken arrow from c to the arrow from x2 to y indicates that the slope in the linear regression of y on x2 varies across the classes of c. The arrow from x1 to c represents the multinomial logistic regression of c on x1.

## Mplus Input

```mplus
TITLE: this is an example of a two-level mixture
  regression for a continuous dependent
  variable
DATA: FILE IS ex10.1.dat;
VARIABLE: NAMES ARE y x1 x2 w class clus;
  USEVARIABLES = y x1 x2 w;
  CLASSES = c (2);
  WITHIN = x1 x2;
  BETWEEN = w;
  CLUSTER = clus;
ANALYSIS: TYPE = TWOLEVEL MIXTURE;
  STARTS = 0;
MODEL:
  %WITHIN%
  %OVERALL%
  y ON x1 x2;
  c ON x1;
  %c#1%
  y ON x2;
  y;
  %BETWEEN%
  %OVERALL%
  y ON w;
  c#1 ON w;
  c#1*1;
  %c#1%
  [y*2];
OUTPUT: TECH1 TECH8;
```

## Explanation

The TITLE command is used to provide a title for the analysis. The title is printed in the output just before the Summary of Analysis.

The DATA command is used to provide information about the data set to be analyzed. The FILE option is used to specify the name of the file that contains the data to be analyzed, ex10.1.dat. Because the data set is in free format, the default, a FORMAT statement is not required.

The VARIABLE command is used to provide information about the variables in the data set to be analyzed. The NAMES option is used to assign names to the variables in the data set. The data set in this example contains six variables: y, x1, x2, w, c, and clus. If not all of the variables in the data set are used in the analysis, the USEVARIABLES option can be used to select a subset of variables for analysis. Here the variables y1, x1, x2, and w have been selected for analysis. The CLASSES option is used to assign names to the categorical latent variables in the model and to specify the number of latent classes in the model for each categorical latent variable. In the example above, there is one categorical latent variable c that has two latent classes. The WITHIN option is used to identify the variables in the data set that are measured on the individual level and modeled only on the within level. They are specified to have no variance in the between part of the model. The BETWEEN option is used to identify the variables in the data set that are measured on the cluster level and modeled only on the between level. Variables not mentioned on the WITHIN or the BETWEEN statements are measured on the individual level and can be modeled on both the within and between levels. The CLUSTER option is used to identify the variable that contains cluster information.

The ANALYSIS command is used to describe the technical details of the analysis. The TYPE option is used to describe the type of analysis that is to be performed. By selecting TWOLEVEL MIXTURE, a multilevel mixture model will be estimated. By specifying STARTS=0 in the ANALYSIS command, random starts are turned off.

The MODEL command is used to describe the model to be estimated. In multilevel models, a model is specified for both the within and between parts of the model. For mixture models, there is an overall model designated by the label %OVERALL%. The overall model describes the part of the model that is in common for all latent classes. The part of the model that differs for each class is specified by a label that consists of the categorical latent variable name followed by the number sign (#) followed by the class number. In the example above, the label %c#2% refers to the part of the model for class 2 that differs from the overall model.

In the overall model in the within part of the model, the first ON statement describes the linear regression of y on the individual-level covariates x1 and x2. The second ON statement describes the multinomial logistic regression of the categorical latent variable c on the individual-level covariate x1 when comparing class 1 to class 2. The intercept in the regression of c on x1 is estimated as the default. In the model for class 1 in the within part of the model, the ON statement describes the linear regression of y on the individual-level covariate x2 which relaxes the default equality of regression coefficients across classes. By mentioning the residual variance of y, it is not held equal across classes.

In the overall model in the between part of the model, the first ON statement describes the linear regression of the random intercept y on the cluster-level covariate w. The second ON statement describes the linear regression of the random intercept c#1 of the categorical latent variable c on the cluster-level covariate w. The random intercept c#1 is a continuous latent variable. Each class of the categorical latent variable c except the last class has a random intercept. A starting value of one is given to the residual variance of the random intercept c#1. In the class-specific part of the between part of the model, the intercept of y is given a starting value of 2 for class 1.

The default estimator for this type of analysis is maximum likelihood with robust standard errors using a numerical integration algorithm. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, two dimensions of integration are used with a total of 225 integration points. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

Following is an alternative specification of the multinomial logistic regression of c on the individual-level covariate x1 in the within part of the model:

```
c#1 ON x1;
```

where c#1 refers to the first class of c. The classes of a categorical latent variable are referred to by adding to the name of the categorical latent variable the number sign (#) followed by the number of the class. This alternative specification allows individual parameters to be referred to in the MODEL command for the purpose of giving starting values or placing restrictions.

The OUTPUT command is used to request additional output not included as the default. The TECH1 option is used to request the arrays containing parameter specifications and starting values for all free parameters in the model. The TECH8 option is used to request that the optimization history in estimating the model be printed in the output. TECH8 is printed to the screen during the computations as the default. TECH8 screen printing is useful for determining how long the analysis takes.
