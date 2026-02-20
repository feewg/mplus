# Version 9 Language Addendum

## Overview

New features in MPlus Version 9.0.

## New Features

- `TYPE=IMPUTATION` for multistep mixture modeling
- `BOOTSTRAP` option for `TYPE=TWOLEVEL`
- `CONVERGENCE` option for `MONTECARLO`
- `NAMES` option for `DATA IMPUTATION`

## Syntax Examples

```mplus
DATA: TYPE = IMPUTATION;
```

```mplus
ANALYSIS: TYPE = TWOLEVEL;
          BOOTSTRAP = 1000;
```

```mplus
DATA IMPUTATION:
    NAMES = y1-y5 x1-x3;
```

## Related Chapters

- [Chapter 11: Missing Data](ch11_missing_data_bayesian.md)
- [Chapter 12: Monte Carlo](ch12_monte_carlo_simulation.md)
