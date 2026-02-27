# EXAMPLE 12.7: MONTE CARLO SIMULATION STUDY WHERE PARAMETER ESTIMATES SAVED FROM A REAL DATA ANALYSIS ARE USED FOR POPULATION PARAMETER VALUES

## Description

This example has two steps. In Step 1, parameter estimates from a real data analysis of a CFA with covariates (MIMIC) for continuous factor indicators are saved for use as population parameter values for use in data generation and coverage in a subsequent internal Monte Carlo simulation study. In Step 2, parameter estimates saved from a real data analysis are used for population parameter values for data generation and coverage.

## Mplus Input - Step 1

```mplus
TITLE: this is an example of a real data analysis
of a CFA with covariates (MIMIC) for
continuous factor indicators where the
parameter estimates are saved for use in a
Monte Carlo simulation study

DATA: FILE = ex12.7real.dat;

VARIABLE: NAMES = y1-y10 x1 x2;

MODEL: f1 BY y1@1 y2-y5*1;
f2 BY y6@1 y7-y10*1;
f1-f2*.5;
f1 WITH f2*.25;
y1-y5*.5;
[y1-y5*1];
y6-y10*.75;
[y6-y10*2];
f1 ON x1*.3 x2*.5;
f2 ON x1*.5 x2*.3;

OUTPUT: TECH1;
SAVEDATA: ESTIMATES = ex12.7estimates.dat;
```

## Explanation - Step 1

The ESTIMATES option of the SAVEDATA command is used to specify the name of the file in which the parameter estimates of the analysis will be saved.

## Mplus Input - Step 2

```mplus
TITLE: this is an example of a Monte Carlo
simulation study where parameter estimates
saved from a real data analysis are used
for population parameter values for data
generation and coverage

MONTECARLO:
NAMES ARE y1-y10 x1 x2;
NOBSERVATIONS = 500;
NREPS = 500;
SEED = 45335;
POPULATION = ex12.7estimates.dat;
COVERAGE = ex12.7estimates.dat;

MODEL POPULATION:
f1 BY y1-y5;
f2 BY y6-y10;
f1 ON x1 x2;
f2 ON x1 x2;

MODEL: f1 BY y1-y5;
f2 BY y6-y10;
f1 ON x1 x2;
f2 ON x1 x2;

OUTPUT: TECH9;
```

## Explanation - Step 2

Parameter estimates saved from a real data analysis are used for population parameter values for data generation and coverage using the POPULATION and COVERAGE options of the MONTECARLO command. The POPULATION option is used to name the data set that contains the population parameter values to be used in data generation. The COVERAGE option is used to name the data set that contains the parameter values to be used for computing coverage and are printed in the first column of the output labeled Population.
