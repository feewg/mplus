# EXAMPLE 12.6: MONTE CARLO SIMULATION STUDY WHERE CLUSTERED DATA ARE GENERATED, ANALYZED, AND SAVED FOR A SUBSEQUENT EXTERNAL MONTE CARLO ANALYSIS

## Description

This example has two steps. In Step 1, clustered data are generated and analyzed for the two-level growth model for a continuous outcome (three-level) analysis described in Example 9.12. The data are saved for a subsequent external Monte Carlo simulation study. In Step 2, an external Monte Carlo simulation study of clustered data generated for a two-level growth model for a continuous outcome is carried out using TYPE=COMPLEX for a single-level growth model.

## Mplus Input - Step 1

```mplus
TITLE: this is an example of a Monte Carlo
simulation study where clustered data for
a two-level growth model for a continuous
outcome (three-level) analysis are
generated and analyzed

MONTECARLO:
NAMES ARE y1-y4 x w;
NOBSERVATIONS = 1000;
NREPS = 100;
SEED = 58459;
CUTPOINTS = x(1) w(0);
MISSING = y1-y4;
NCSIZES = 3;
CSIZES = 40 (5) 50 (10) 20 (15);
WITHIN = x; BETWEEN = w;
REPSAVE = ALL;
SAVE = ex12.6rep*.dat;

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

ANALYSIS: TYPE = TWOLEVEL;

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

OUTPUT: TECH8 TECH9;
```

## Explanation - Step 1

The REPSAVE and SAVE options of the MONTECARLO command are used to save some or all of the data sets generated in a Monte Carlo simulation study. The REPSAVE option specifies the numbers of the replications for which the data will be saved. In the example above, the keyword ALL specifies that all of the data sets will be saved.

The SAVE option is used to name the files to which the data sets will be written. The asterisk (*) is replaced by the replication number. For example, data from the first replication will be saved in the file named ex12.6rep1.dat. A file is also produced where the asterisk (*) is replaced by the word list. The file, in this case ex12.6replist.dat, contains the names of the generated data sets.

The ANALYSIS command is used to describe the technical details of the analysis. By selecting TYPE=TWOLEVEL, a multilevel model is estimated.

## Mplus Input - Step 2

```mplus
TITLE: this is an example of an external Monte
Carlo analysis of clustered data generated
for a two-level growth model for a
continuous outcome using TYPE=COMPLEX for
a single-level growth model

DATA: FILE = ex12.6replist.dat;
TYPE = MONTECARLO;

VARIABLE: NAMES = y1-y4 x w clus;
USEVARIABLES = y1-w;
MISSING = ALL (999);
CLUSTER = clus;

ANALYSIS: TYPE = COMPLEX;

MODEL: i s | y1@0 y2@1 y3@2 y4@3;
y1-y4*.5;
i ON x*1 w*.5;
s ON x*.25 w*.25;
i*1.2; s*.3;
[i*1 s*.5];

OUTPUT: TECH9;
```

## Explanation - Step 2

The DATA command is used to provide information about the data sets to be analyzed. The MONTECARLO setting of the TYPE option is used when the data sets being analyzed have been generated and saved using either the REPSAVE option of the MONTECARLO command or by another computer program. The file named using the FILE option of the DATA command contains a list of the names of the data sets to be analyzed and summarized as in a Monte Carlo simulation study.

The CLUSTER option of the VARIABLE command is used when data have been collected under a complex survey data design to identify the variable that contains cluster information. In the example above, the variable clus contains cluster information. By selecting TYPE=COMPLEX, an analysis is carried out that takes non-independence of observations into account.

In external Monte Carlo simulation studies, the MODEL command is also used to provide values for each parameter. These are used as the population parameter values for the analysis model and are printed in the first column of the output labeled Population. They are used for computing coverage and as starting values in the estimation of the model.
