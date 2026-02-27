# EXAMPLE 7.1: Mixture Regression Analysis For A Continuous Dependent Variable Using Automatic Starting Values With Random Starts

## Description

In this example, the mixture regression model for a continuous dependent variable is estimated using automatic starting values with random starts. Because c is a categorical latent variable, the interpretation of the picture is not the same as for models with continuous latent variables. The arrow from c to y indicates that the intercept of y varies across the classes of c. This corresponds to the regression of y on a set of dummy variables representing the categories of c. The broken arrow from c to the arrow from x2 to y indicates that the slope in the regression of y on x2 varies across the classes of c. The arrow from x1 to c represents the multinomial logistic regression of c on x1.

## Mplus Input

```mplus
TITLE: this is an example of a mixture regression
       analysis for a continuous dependent
       variable using automatic starting values
       with random starts
DATA: FILE IS ex7.1.dat;
VARIABLE: NAMES ARE y x1 x2;
          CLASSES = c (2);
ANALYSIS: TYPE = MIXTURE;
MODEL:
    %OVERALL%
    y ON x1 x2;
    c ON x1;
    %c#2%
    y ON x2;
    y;
OUTPUT: TECH1 TECH8;
```

## Explanation

The TITLE command is used to provide a title for the analysis. The title is printed in the output just before the Summary of Analysis.

The DATA command is used to provide information about the data set to be analyzed. The FILE option is used to specify the name of the file that contains the data to be analyzed, ex7.1.dat. Because the data set is in free format, the default, a FORMAT statement is not required.

The VARIABLE command is used to provide information about the variables in the data set to be analyzed. The NAMES option is used to assign names to the variables in the data set. The data set in this example contains three variables: y, x1, and x2. The CLASSES option is used to assign names to the categorical latent variables in the model and to specify the number of latent classes in the model for each categorical latent variable. In the example above, there is one categorical latent variable c that has two latent classes.

The ANALYSIS command is used to describe the technical details of the analysis. The TYPE option is used to describe the type of analysis that is to be performed. By selecting MIXTURE, a mixture model will be estimated.

When TYPE=MIXTURE is specified, either user-specified or automatic starting values are used to create randomly perturbed sets of starting values for all parameters in the model except variances and covariances. In this example, the random perturbations are based on automatic starting values. Maximum likelihood optimization is done in two stages. In the initial stage, 20 random sets of starting values are generated. An optimization is carried out for ten iterations using each of the 20 random sets of starting values. The ending values from the 4 optimizations with the highest loglikelihoods are used as the starting values in the final stage optimizations which are carried out using the default optimization settings for TYPE=MIXTURE.

The MODEL command is used to describe the model to be estimated. For mixture models, there is an overall model designated by the label %OVERALL%. The overall model describes the part of the model that is in common for all latent classes. The part of the model that differs for each class is specified by a label that consists of the categorical latent variable followed by the number sign followed by the class number. In the example above, the label %c#2% refers to the part of the model for class 2 that differs from the overall model.

In the overall model, the first ON statement describes the linear regression of y on the covariates x1 and x2. The second ON statement describes the multinomial logistic regression of the categorical latent variable c on the covariate x1 when comparing class 1 to class 2. The intercept in the regression of c on x1 is estimated as the default.

In the model for class 2, the ON statement describes the linear regression of y on the covariate x2. This specification relaxes the default equality constraint for the regression coefficient. By mentioning the residual variance of y, it is not held equal across classes. The intercepts in class 1 and class 2 are free and unequal as the default. The default estimator for this type of analysis is maximum likelihood with robust standard errors.

The OUTPUT command is used to request additional output not included as the default. The TECH1 option is used to request the arrays containing parameter specifications and starting values for all free parameters in the model. The TECH8 option is used to request that the optimization history in estimating the model be printed in the output.
