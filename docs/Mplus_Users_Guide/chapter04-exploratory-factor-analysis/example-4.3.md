# EXAMPLE 4.3: EXPLORATORY FACTOR ANALYSIS WITH CONTINUOUS, CENSORED, CATEGORICAL, AND COUNT FACTOR INDICATORS

## Description

The difference between this example and Example 4.1 is that the factor indicators are a combination of continuous, censored, binary or ordered categorical (ordinal), and count variables instead of all continuous variables.

## Mplus Input

```mplus
TITLE: this is an example of an exploratory
       factor analysis with continuous, censored,
       categorical, and count factor indicators
DATA: FILE = ex4.3.dat;
VARIABLE: NAMES = u4-u6 y4-y6 u1-u3 y1-y3;
          CENSORED = y4-y6(b);
          CATEGORICAL = u1-u3;
          COUNT = u4-u6;
ANALYSIS: TYPE = EFA 1 4;
```

## Explanation

The CENSORED option is used to specify which dependent variables are treated as censored variables in the model and its estimation, whether they are censored from above or below, and whether a censored or censored-inflated model will be estimated. In the example above, y4, y5, and y6 are censored variables. The b in parentheses indicates that they are censored from below, that is, have a floor effect, and that the model is a censored regression model. The censoring limit is determined from the data.

The CATEGORICAL option is used to specify which dependent variables are treated as binary or ordered categorical (ordinal) variables in the model and its estimation. In the example above, the factor indicators u1, u2, and u3 are binary or ordered categorical variables. The program determines the number of categories for each variable.

The COUNT option is used to specify which dependent variables are treated as count variables in the model and its estimation and whether a Poisson or zero-inflated Poisson model will be estimated. In the example above, u4, u5, and u6 are count variables.

The variables y1, y2, and y3 are continuous variables.

The default estimator for this type of analysis is maximum likelihood with robust standard errors using a numerical integration algorithm. Note that numerical integration becomes increasingly more computationally demanding as the number of factors and the sample size increase. In this example, the four-factor solution requires four dimensions of integration. Using the default of 7 integration points per factor for exploratory factor analysis, a total of 2,401 integration points is required for this analysis. To reduce computational time with several factors, the number of integration points per dimension can be reduced from the default of 7 for exploratory factor analysis to as few as 3 for an approximate solution.

The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

An explanation of the other commands can be found in Example 4.1.
