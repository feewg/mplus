# Chapter 12: Monte Carlo Simulation Studies

## 1. Chapter Overview

This chapter covers Monte Carlo simulation for statistical power and parameter recovery.

**Topics Covered:**
- Data generation
- Model estimation in simulations
- Power analysis

## 2. Examples

### Example 12.1: Basic Monte Carlo Simulation

```mplus
TITLE: Monte Carlo simulation
MONTECARLO: NAMES ARE y1-y5 x;
            NOBSERVATIONS = 500;
            NREPS = 1000;
            SEED = 53487;
            MODEL POPULATION:
            f BY y1-y5*0.8;
            f@1;
            y1-y5*0.36;
            f ON x*0.5;
            MODEL:
            f BY y1-y5*0.8;
            f ON x*0.5;
OUTPUT: TECH9;
```

### Example 12.2: Power Analysis

```mplus
TITLE: power analysis
MONTECARLO: NAMES ARE y1-y4;
            NOBSERVATIONS = 200(100) 500;
            NREPS = 1000;
            SEED = 53487;
            MODEL POPULATION:
            f1 BY y1-y2*0.7;
            f2 BY y3-y4*0.7;
            f1-f2@1;
            f1 WITH f2*0.3;
            MODEL:
            f1 BY y1-y2*0.7;
            f2 BY y3-y4*0.7;
            f1 WITH f2*0.3;
OUTPUT: TECH9;
```

## 3. Related Chapters

- [Chapter 19: MONTECARLO Command](ch19_montecarlo_command.md)
