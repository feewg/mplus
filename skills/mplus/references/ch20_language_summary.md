# Chapter 20: Summary of the MPlus Language

## 1. Command Order

1. TITLE (optional)
2. DATA (required)
3. VARIABLE (required)
4. DEFINE (optional)
5. ANALYSIS (optional)
6. MODEL (required)
7. OUTPUT (optional)
8. SAVEDATA (optional)
9. PLOT (optional)
10. MONTECARLO (optional)

## 2. Language Rules

- Statements end with semicolon (;)
- Comments: `!` for single line
- Variable names are case-sensitive

## 3. Special Symbols

| Symbol | Meaning |
|--------|---------|
| ; | End of statement |
| @ | Fix parameter |
| * | Free parameter |
| ( ) | Equality constraint |
| [ ] | Mean/intercept |
| \| | Growth factor |

## 4. Default Settings

| Setting | Default |
|---------|---------|
| Missing data | FIML |
| Estimator | ML / WLSMV |
| Iterations | 1000 |
| Convergence | 0.00005 |

## 5. Quick Reference

### Variable Types
- CATEGORICAL ARE: Binary/ordinal
- NOMINAL ARE: Nominal
- COUNT ARE: Count
- CENSORED ARE: Censored

### Model Types
- TYPE = GENERAL
- TYPE = MIXTURE
- TYPE = TWOLEVEL
- TYPE = EFA

### Estimators
- ML, MLR, WLSMV, BAYES
