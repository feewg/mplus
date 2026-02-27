# EXAMPLE 3.17: PATH ANALYSIS WITH A CATEGORICAL DEPENDENT VARIABLE AND A CONTINUOUS MEDIATING VARIABLE WITH MISSING DATA

## Description

This example demonstrates a path analysis where:
- The dependent variable is binary or ordered categorical (ordinal)
- The continuous mediating variable has missing values

This type of model is commonly used when:
- The outcome is dichotomous or ordinal (e.g., success/failure, Likert scales)
- There is missing data in the mediating variable
- Maximum likelihood estimation with numerical integration is needed

## Mplus Input

```mplus
TITLE: this is an example of a path analysis
       with a categorical dependent variable and
       a continuous mediating variable with
       missing data
DATA: FILE IS ex3.17.dat;
VARIABLE: NAMES ARE u y x;
          CATEGORICAL IS u;
          MISSING IS y (999);
ANALYSIS: ESTIMATOR = MLR;
          INTEGRATION = MONTECARLO;
MODEL: y ON x;
       u ON y x;
OUTPUT: TECH1 TECH8;
```

## Explanation

In this example, the dependent variable is binary or ordered categorical (ordinal) and the continuous mediating variable has missing values.

**VARIABLE command:**
The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In this example, u is a binary or ordered categorical variable. The program determines the number of categories.

The MISSING option is used to identify the values or symbols in the analysis data set that will be treated as missing or invalid. In this example, the number 999 is the missing value flag.

**ANALYSIS command:**
By specifying `ESTIMATOR = MLR`, a maximum likelihood estimator with robust standard errors using a numerical integration algorithm will be used.

Note that numerical integration becomes increasingly more computationally demanding as the number of mediating variables with missing data and the sample size increase.

In this example, Monte Carlo integration with 500 integration points is used (`INTEGRATION = MONTECARLO`). The ESTIMATOR option can be used to select a different estimator.

**MODEL command:**
The first ON statement describes the linear regression of y on the covariate x. This models the relationship between the independent variable and the mediator.

The second ON statement describes the logistic regression of u on the mediating variable y and the covariate x. This models the relationship between the mediator and the categorical outcome, controlling for the direct effect of x.

**OUTPUT command:**
The OUTPUT command is used to request additional output not included as the default:
- TECH1: requests the arrays containing parameter specifications and starting values for all free parameters in the model
- TECH8: requests that the optimization history in estimating the model be printed in the output. TECH8 is printed to the screen during the computations as the default and is useful for determining how long the analysis takes.
