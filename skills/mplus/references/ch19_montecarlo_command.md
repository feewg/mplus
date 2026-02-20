# Chapter 19: MONTECARLO Command

## 1. Overview

The MONTECARLO command sets up simulation studies.

## 2. Options

| Option | Description |
|--------|-------------|
| NAMES ARE | Variable names |
| NOBSERVATIONS = n | Sample size |
| NREPS = n | Number of replications |
| SEED = n | Random seed |

## 3. Subcommands

### MODEL POPULATION
```mplus
MODEL POPULATION:
    f BY y1-y5*0.8;
    f@1;
```

### MODEL
```mplus
MODEL:
    f BY y1-y5*0.8;
```

## 4. Example

```mplus
MONTECARLO: NAMES ARE y1-y5 x;
            NOBSERVATIONS = 500;
            NREPS = 1000;
            SEED = 53487;
            MODEL POPULATION: f BY y1-y5*0.8;
            MODEL: f BY y1-y5*0.8;
OUTPUT: TECH9;
```
