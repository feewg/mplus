# EXAMPLE 3.15: PATH ANALYSIS WITH A COMBINATION OF CENSORED, CATEGORICAL, AND UNORDERED CATEGORICAL (NOMINAL) DEPENDENT VARIABLES

## Description

This example demonstrates a path analysis where the dependent variables are a combination of:
- Censored variables
- Binary or ordered categorical (ordinal) variables
- Unordered categorical (nominal) variables

This comprehensive example shows how to handle multiple variable types in a single path analysis model.

## Mplus Input

```mplus
TITLE: this is an example of a path analysis
       with a combination of censored,
       categorical, and unordered categorical
       (nominal) dependent variables
DATA: FILE IS ex3.15.dat;
VARIABLE: NAMES ARE y1 u1 u2 y4-y6 x1-x4;
          USEVARIABLES ARE y1-u2 x1-x3;
          CENSORED IS y1 (a);
          CATEGORICAL IS u1;
          NOMINAL IS u2;
MODEL: y1 u1 ON x1 x2 x3;
       u2 ON y1 u1 x2;
```

Alternative specification for the multinomial logistic regression:
```mplus
u2#1 u2#2 ON y1 u1 x2;
```

## Explanation

The difference between this example and Example 3.11 is that the dependent variables are a combination of censored, binary or ordered categorical (ordinal), and unordered categorical (nominal) variables instead of continuous variables.

**Variable specifications:**

The CENSORED option is used to specify which dependent variables are treated as censored variables in the model and its estimation, whether they are censored from above or below, and whether a censored or censored-inflated model will be estimated. In this example, y1 is a censored variable. The `a` in parentheses following y1 indicates that y1 is censored from above, that is, has a ceiling effect, and that the model is a censored regression model. The censoring limit is determined from the data.

The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In this example, u1 is a binary or ordered categorical variable. The program determines the number of categories.

The NOMINAL option is used to specify which dependent variables are treated as unordered categorical (nominal) variables in the model and its estimation. In this example, u2 is a three-category unordered variable. The program determines the number of categories.

**Model specification:**

The first ON statement describes the censored regression of y1 and the logistic regression of u1 on the covariates x1, x2, and x3.

The second ON statement describes the multinomial logistic regression of u2 on the mediating variables y1 and u1 and the covariate x2 when comparing categories one and two of u2 to the third category of u2. The intercept and slopes of the last category are fixed at zero as the default.

The categories of an unordered categorical variable are referred to by adding to the name of the unordered categorical variable the number sign (#) followed by the number of the category. This alternative specification allows individual parameters to be referred to in the MODEL command for the purpose of giving starting values or placing restrictions.

The default estimator for this type of analysis is maximum likelihood with robust standard errors. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.
