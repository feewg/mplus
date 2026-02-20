# Chapter 18: OUTPUT, SAVEDATA, and PLOT Commands

## 1. OUTPUT Command

### Standardization
| Option | Description |
|--------|-------------|
| STDYX | Standardized (y and x) |
| STDY | Standardized (y only) |
| STD | Standardized (latent) |

### Technical Output
| Option | Description |
|--------|-------------|
| TECH1 | Parameter specification |
| TECH8 | Optimization history |
| TECH11 | LMR-LRT (mixture) |

### Other
| Option | Description |
|--------|-------------|
| CINTERVAL | Confidence intervals |
| MODINDICES | Modification indices |

## 2. SAVEDATA Command

| Option | Description |
|--------|-------------|
| FILE IS | Save data file |
| SAVE = FSCORES | Factor scores |
| SAVE = CPROB | Class probabilities |

## 3. PLOT Command

| Type | Description |
|------|-------------|
| PLOT1 | Basic plots |
| PLOT2 | Additional plots |
| PLOT3 | Advanced plots |

## 4. Examples

```mplus
OUTPUT: STDYX TECH1 MODINDICES;
SAVEDATA: FILE IS scores.dat;
          SAVE = FSCORES;
PLOT: TYPE = PLOT3;
```
