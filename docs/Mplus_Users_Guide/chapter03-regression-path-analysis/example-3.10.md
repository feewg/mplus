# EXAMPLE 3.10: NON-LINEAR CONSTRAINT ON THE LOGIT PARAMETERS OF AN UNORDERED CATEGORICAL (NOMINAL) VARIABLE

## Description

This example demonstrates how to specify non-linear constraints on the logit parameters of an unordered categorical (nominal) variable.

In this example, theory specifies the following probabilities for the four categories of an unordered categorical (nominal) variable:
- ½ + ¼ p
- ¼ (1-p)
- ¼ (1-p)
- ¼ p

where p is a probability parameter to be estimated.

These restrictions on the category probabilities correspond to non-linear constraints on the logit parameters for the categories in the multinomial logistic model. This example is based on Dempster, Laird, and Rubin (1977, p. 2).

## Mplus Input

```mplus
TITLE: this is an example of non-linear
       constraint on the logit parameters of an
       unordered categorical (nominal) variable
DATA: FILE IS ex3.10.dat;
VARIABLE: NAMES ARE u;
          NOMINAL = u;
MODEL: [u#1] (p1);
       [u#2] (p2);
       [u#3] (p2);
MODEL CONSTRAINT:
       p2 = log ((exp (p1) – 1)/2 – 1);
```

## Explanation

The NOMINAL option is used to specify which dependent variables are treated as unordered categorical (nominal) variables in the model and its estimation. In this example, u is a four-category unordered variable. The program determines the number of categories.

The categories of an unordered categorical variable are referred to by adding to the name of the unordered categorical variable the number sign (#) followed by the number of the category. In this example:
- `u#1` refers to the first category of u
- `u#2` refers to the second category of u
- `u#3` refers to the third category of u

In the MODEL command, parameters are given labels by placing a name in parentheses after the parameter:
- The logit parameter for category one is referred to as `p1`
- The logit parameter for category two is referred to as `p2`
- The logit parameter for category three is also referred to as `p2`

When two parameters are referred to using the same label, they are held equal.

The MODEL CONSTRAINT command is used to define linear and non-linear constraints on the parameters in the model. The non-linear constraint for the logits follows from the four probabilities given above after some algebra.

The default estimator for this type of analysis is maximum likelihood with robust standard errors. The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.
