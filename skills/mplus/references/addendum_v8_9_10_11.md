# Version 8.9, 8.10, 8.11 Language Addendum

## Version 8.9

- `ALIGNMENT=FIXED` setting
- PSEM (Penalized SEM)
- DSEM enhancements

## Version 8.10

- PSEM penalty functions: LASSO and GEOMIN

## Version 8.11

- `H5RESULTS` option for SAVEDATA

## Syntax Examples

```mplus
ANALYSIS: TYPE = PSEM;
          PENALTY = LASSO;
```

```mplus
SAVEDATA: H5RESULTS = results.h5;
```

## Related Chapters

- [Chapter 16: ANALYSIS Command](ch16_analysis_command.md)
- [Chapter 18: SAVEDATA](ch18_output_savedata_plot.md)
