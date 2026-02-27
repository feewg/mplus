# EXAMPLE 9.11: Two-level multiple group CFA with continuous factor indicators

## Description

This example demonstrates a two-level multiple group confirmatory factor analysis with continuous factor indicators. The model shows measurement invariance testing across groups, where factor loadings and intercepts are held equal across groups by default.

## Mplus Input

```mplus
TITLE: this is an example of a two-level
  multiple group CFA with continuous
  factor indicators
DATA: FILE IS ex9.11.dat;
VARIABLE: NAMES ARE y1-y6 g clus;
  GROUPING = g (1 = g1 2 = g2);
  CLUSTER = clus;
ANALYSIS: TYPE = TWOLEVEL;
MODEL:
  %WITHIN%
  fw1 BY y1-y3;
  fw2 BY y4-y6;
  %BETWEEN%
  fb1 BY y1-y3;
  fb2 BY y4-y6;
MODEL g2: %WITHIN%
  fw1 BY y2-y3;
  fw2 BY y5-y6;
```

## Explanation

This example demonstrates a two-level multiple group CFA with continuous factor indicators where measurement invariance can be tested across groups.

**GROUPING Option:**
The GROUPING option identifies the variable containing group membership information. In this example:
- Observations with g=1 are assigned label g1
- Observations with g=2 are assigned label g2
- The grouping variable should be a cluster-level variable

**Multiple Group Analysis:**
Two variations of the MODEL command are used:
1. MODEL: Describes the model to be estimated for all groups
2. MODEL followed by a label: Describes differences between the overall model and the model for a specific group

**Default Measurement Invariance:**
By default in multiple group analysis:
- Factor loadings are held equal across groups (measurement invariance)
- Intercepts are held equal across groups

**Within Part:**
- fw1 is measured by y1, y2, and y3
- fw2 is measured by y4, y5, and y6
- The metric of factors is set by fixing the first factor loading in each BY statement to one
- The variances of factors are estimated as the default
- fw1 and fw2 are correlated as the default

**Between Part:**
- fb1 is measured by y1, y2, and y3 (random intercepts)
- fb2 is measured by y4, y5, and y6 (random intercepts)
- The metric of factors is set by fixing the first factor loading to one
- The variances of factors are estimated as the default
- fb1 and fb2 are correlated as the default

**Group-Specific Model (MODEL g2):**
In the group-specific MODEL command for group 2, specifying the within factor loadings for fw1 and fw2 relaxes the default equality constraints, so factor loadings are no longer held equal across groups. The factor indicators fixed at one (y1 and y4) remain the same.

**Note:** The default estimator is maximum likelihood with robust standard errors.
