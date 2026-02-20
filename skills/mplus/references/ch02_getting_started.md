# Chapter 2: Getting Started with MPlus

## 1. Chapter Overview

This chapter provides guidance on setting up and running your first MPlus analysis. It covers installation, data preparation, and basic workflow.

## 2. Installation and Setup

### 2.1 System Requirements

- Windows 7 or later / macOS / Linux
- Minimum 2GB RAM (4GB+ recommended)
- Available disk space for data and output files

### 2.2 Directory Structure

```
project/
├── data/
│   └── mydata.dat
├── input/
│   └── analysis.inp
└── output/
    └── analysis.out
```

## 3. Data Preparation

### 3.1 Data File Format

- **Free format**: Space or comma delimited
- **Fixed format**: Column-specific data
- **Missing values**: Specified with MISSING option

### 3.2 Free Format Example

```
1.2 3.4 5.6 1
2.3 4.5 6.7 0
3.4 5.6 7.8 1
```

### 3.3 Variable Naming Conventions

- Maximum 8 characters
- Start with letter
- Letters, numbers, and underscores allowed
- Case-sensitive

## 4. Creating Your First Input File

### Example 2.1: Basic Linear Regression

```mplus
TITLE: My First MPlus Analysis
       Simple Linear Regression

DATA: FILE IS example.dat;

VARIABLE: NAMES ARE y x1 x2;
          USEVARIABLES ARE y x1 x2;

MODEL: y ON x1 x2;

OUTPUT: STDYX;
```

### Code Explanation

| Line | Code | Explanation |
|------|------|-------------|
| 1-2 | TITLE | Descriptive title for the analysis |
| 4 | DATA: FILE IS | Specifies the data file location |
| 6-7 | VARIABLE | Defines variable names and selection |
| 9 | MODEL: y ON x1 x2 | Regresses y on x1 and x2 |
| 11 | OUTPUT: STDYX | Requests standardized output |

## 5. Running MPlus

### 5.1 Command Line

```bash
mplus analysis.inp
```

### 5.2 VS Code Extension

Use the MPlus extension buttons:
- ▶️ Run MPlus
- ⏹️ Stop MPlus
- 🗑️ Clear Terminal
- 📄 Open Output

## 6. Understanding Output

### 6.1 Output Sections

1. **Input Instructions**: Echo of your syntax
2. **Summary of Analysis**: Sample size, variables
3. **Model Results**: Parameter estimates
4. **Standardized Results**: STDYX, STDY, STD
5. **Model Fit**: Chi-square, CFI, TLI, RMSEA

### 6.2 Key Output Indicators

```
MODEL FIT INFORMATION

Number of Free Parameters                        6

Loglikelihood
    H0 Value                       -2345.678

Information Criteria
    AIC                             4703.356
    BIC                             4728.901

Chi-Square Test of Model Fit
    Value                              3.456
    Degrees of Freedom                     2
    P-Value                           0.1782
```

## 7. Common Errors and Solutions

### Error: Variable not found
**Cause**: Typo in variable name or not in NAMES list
**Solution**: Check spelling and NAMES statement

### Error: Non-positive definite matrix
**Cause**: Multicollinearity or identification issues
**Solution**: Check correlations, add constraints

### Error: Convergence problems
**Cause**: Model misspecification or difficult data
**Solution**: Check starting values, increase iterations

## 8. Best Practices

1. **Use comments**: Document your analysis with `!`
2. **Save frequently**: Keep backups of working input files
3. **Start simple**: Build complex models incrementally
4. **Check output**: Always review for warnings and errors
5. **Use meaningful names**: Clear variable and file names

## 9. Next Steps

- [Chapter 3: Regression and Path Analysis](ch03_regression_path_analysis.md)
- [Chapter 15: Command Reference](ch15_title_data_variable_define.md)
