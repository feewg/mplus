# EXAMPLE 13.7: TRANSFORMING VARIABLES USING THE DEFINE COMMAND

## Description

This example is based on Example 3.11 where the variables are not transformed. In this example, two variables are transformed using the DEFINE command. The variable `y1` is transformed by dividing it by 100. The variable `x3` is transformed by taking the square root of it. The transformed variables are used in the estimation of the model. The DEFINE command can also be used to create new variables.

## Mplus Input

```mplus
TITLE: this is an example of a path analysis
with continuous dependent variables where
two variables are transformed
DATA: FILE IS ex3.11.dat;
DEFINE: y1 = y1/100;
x3 = SQRT(x3);
VARIABLE: NAMES ARE y1-y6 x1-x4;
USEVARIABLES = y1-y3 x1-x3;
MODEL: y1 y2 ON x1 x2 x3;
y3 ON y1 y2 x2;
```

## Explanation

The DEFINE command is used to transform variables before the analysis. In this example:
- `y1 = y1/100` - The variable `y1` is transformed by dividing it by 100
- `x3 = SQRT(x3)` - The variable `x3` is transformed by taking the square root of it

The transformed variables are used in the estimation of the model. The DEFINE command can also be used to create new variables.
