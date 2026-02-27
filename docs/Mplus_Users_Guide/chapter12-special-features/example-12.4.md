# EXAMPLE 12.4: MONTE CARLO SIMULATION STUDY FOR A TWO-LEVEL GROWTH MODEL FOR A CONTINUOUS OUTCOME (THREE-LEVEL ANALYSIS)

## Description

In this example, data for the two-level growth model for a continuous outcome (three-level analysis) described in Example 9.12 are generated and analyzed. This Monte Carlo simulation study can be used to estimate the power to detect that the binary cluster-level covariate w has a significant effect on the growth slope factor sb.

## Mplus Input

```mplus
TITLE: this is an example of a Monte Carlo
simulation study for a two-level growth
model for a continuous outcome (three-
level analysis)

MONTECARLO:
NAMES ARE y1-y4 x w;
NOBSERVATIONS = 1000;
NREPS = 500;
SEED = 58459;
CUTPOINTS = x (1) w (0);
MISSING = y1-y4;
NCSIZES = 3;
CSIZES = 40 (5) 50 (10) 20 (15);
WITHIN = x;
BETWEEN = w;

MODEL POPULATION:
%WITHIN%
x@1;
iw sw | y1@0 y2@1 y3@2 y4@3;
y1-y4*.5;
iw ON x*1;
sw ON x*.25;
iw*1; sw*.2;
%BETWEEN%
w@1;
ib sb | y1@0 y2@1 y3@2 y4@3;
y1-y4@0;
ib ON w*.5;
sb ON w*.25;
[ib*1 sb*.5];
ib*.2; sb*.1;

MODEL MISSING:
[y1-y4@-1];
y1 ON x*.4;
y2 ON x*.8;
y3 ON x*1.6;
y4 ON x*3.2;

ANALYSIS: TYPE IS TWOLEVEL;

MODEL:
%WITHIN%
iw sw | y1@0 y2@1 y3@2 y4@3;
y1-y4*.5;
iw ON x*1;
sw ON x*.25;
iw*1; sw*.2;
%BETWEEN%
ib sb | y1@0 y2@1 y3@2 y4@3;
y1-y4@0;
ib ON w*.5;
sb ON w*.25;
[ib*1 sb*.5];
ib*.2; sb*.1;

OUTPUT: TECH9 NOCHISQUARE;
```

## Explanation

The NCSIZES option is used to specify the number of unique cluster sizes to be used in data generation. In the example above, there are three unique cluster sizes. The CSIZES option is used to specify the number of clusters and the sizes of the clusters to be used in data generation. The CSIZES option specifies that 40 clusters of size 5, 50 clusters of size 10, and 20 clusters of size 15 will be generated.

The WITHIN option is used to identify the variables in the data set that are measured on the individual level and modeled only on the within level. They are specified to have no variance in the between part of the model. The variable x is an individual-level variable.

The BETWEEN option is used to identify the variables in the data set that are measured on the cluster level and modeled only on the between level. The variable w is a cluster-level variable. Variables not mentioned on the WITHIN or the BETWEEN statements are measured on the individual level and can be modeled on both the within and between levels.

The NOCHISQUARE option of the OUTPUT command is used to request that the chi-square fit statistic not be computed. This reduces computational time.
