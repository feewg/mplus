# EXAMPLE 3.16: PATH ANALYSIS WITH CONTINUOUS DEPENDENT VARIABLES, BOOTSTRAPPED STANDARD ERRORS, INDIRECT EFFECTS, AND NON-SYMMETRIC BOOTSTRAP CONFIDENCE INTERVALS

## Description

This example demonstrates a path analysis with continuous dependent variables that includes:
- Bootstrapped standard errors
- Indirect effects
- Non-symmetric bootstrap confidence intervals

This approach is particularly useful when:
- The normality assumption is questionable
- More accurate standard errors are needed for indirect effects
- Confidence intervals that account for non-normal distributions are desired

## Mplus Input

```mplus
TITLE: this is an example of a path analysis
       with continuous dependent variables,
       bootstrapped standard errors, indirect
       effects, and non-symmetric bootstrap
       confidence intervals
DATA: FILE IS ex3.16.dat;
VARIABLE: NAMES ARE y1-y6 x1-x4;
          USEVARIABLES ARE y1-y3 x1-x3;
ANALYSIS: BOOTSTRAP = 1000;
MODEL: y1 y2 ON x1 x2 x3;
       y3 ON y1 y2 x2;
MODEL INDIRECT:
       y3 IND y1 x1;
       y3 IND y2 x1;
OUTPUT: CINTERVAL (BOOTSTRAP);
```

## Explanation

The difference between this example and Example 3.11 is that bootstrapped standard errors, indirect effects, and non-symmetric bootstrap confidence intervals are requested.

**BOOTSTRAP option:**
The BOOTSTRAP option is used to request bootstrapping and to specify the number of bootstrap draws to be used in the computation. By selecting `BOOTSTRAP = 1000`, bootstrapped standard errors will be computed using 1000 draws.

When the BOOTSTRAP option is used:
- Alone: bootstrap standard errors of the model parameter estimates are obtained
- With CINTERVAL(BOOTSTRAP): bootstrap standard errors and non-symmetric bootstrap confidence intervals for the model parameter estimates are obtained
- With MODEL INDIRECT: bootstrap standard errors for indirect effects are obtained

**MODEL INDIRECT command:**
The MODEL INDIRECT command is used to request indirect effects and their standard errors. Total indirect, specific indirect, and total effects are obtained using the IND and VIA options.

The IND option is used to request a specific indirect effect or a set of indirect effects:
- `y3 IND y1 x1` requests the specific indirect effect from x1 to y1 to y3
- `y3 IND y2 x1` requests the specific indirect effect from x1 to y2 to y3

In the IND statements:
- The variable on the left-hand side of IND is the dependent variable
- The last variable on the right-hand side of IND is the independent variable
- Other variables on the right-hand side of IND are mediating variables

Total effects are computed for all IND statements that start and end with the same variables.

**OUTPUT command:**
The CINTERVAL(BOOTSTRAP) option of the OUTPUT command requests non-symmetric bootstrap confidence intervals for the model parameter estimates and indirect effects.
