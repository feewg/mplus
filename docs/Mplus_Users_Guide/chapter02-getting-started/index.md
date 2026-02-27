# Chapter 2: Getting Started With Mplus

After Mplus is installed, the program can be run from the Mplus editor. The Mplus Editor for Windows includes a language generator and a graphics module. The graphics module provides graphical displays of observed data and analysis results.

## The Mplus Language

The user language for Mplus consists of a set of ten commands each of which has several options. The default options for Mplus have been chosen so that user input can be minimized for the most common types of analyses.

### The Ten Commands of Mplus

1. **TITLE** - Provides a title for the analysis
2. **DATA** (required) - Provides information about the data set to be analyzed
3. **VARIABLE** (required) - Provides information about the variables in the data set
4. **DEFINE** - Transforms existing variables and creates new variables
5. **ANALYSIS** - Describes the technical details of the analysis
6. **MODEL** - Describes the model to be estimated
7. **OUTPUT** - Requests additional output not included as the default
8. **SAVEDATA** - Saves the analysis data, auxiliary data, and analysis results
9. **PLOT** - Requests graphical displays of observed data and analysis results
10. **MONTECARLO** - Specifies the details of a Monte Carlo simulation study

### Command Syntax Rules

- The DATA and VARIABLE commands are required for all analyses
- All commands must begin on a new line and must be followed by a colon
- Semicolons separate command options
- There can be more than one option per line
- Records in the input setup must be no longer than 90 columns
- Can contain upper and/or lower case letters and tabs

### Shortcuts and Comments

- Commands and options can be shortened to four or more letters
- Option settings can be referred to by either the complete word or the part of the word shown in bold type
- Comments are designated by an exclamation point (!)
- Several lines can be commented out by starting with `!*` and ending with `*!`
- The keywords IS, ARE, and = can be used interchangeably in all commands except DEFINE, MODEL CONSTRAINT, and MODEL TEST
- Items in a list can be separated by blanks or commas
- Mplus uses a hyphen (-) to indicate a list of variables or numbers
- The special keyword ALL can be used to indicate all variables

## Prototypical Examples

### Example 1: Factor Analysis with Covariates (MIMIC Model)

```mplus
TITLE: this is an example of a MIMIC model
    with two factors, six continuous factor
    indicators, and three covariates
DATA: FILE IS mimic.dat;
VARIABLE: NAMES ARE y1-y6 x1-x3;
MODEL: f1 BY y1-y3;
    f2 BY y4-y6;
    f1 f2 ON x1-x3;
```

### Example 2: Growth Model with Time-Invariant Covariates

```mplus
TITLE: this is an example of a linear growth
    model for a continuous outcome at four
    time points with the intercept and slope
    growth factors regressed on two time-
    invariant covariates
DATA: FILE IS growth.dat;
VARIABLE: NAMES ARE y1-y4 x1 x2;
MODEL: i s | y1@0 y2@1 y3@2 y4@3;
    i s ON x1 x2;
```

### Example 3: Latent Class Analysis with Covariates and Direct Effect

```mplus
TITLE: this is an example of a latent class
    analysis with two classes, one covariate,
    and a direct effect
DATA: FILE IS lcax.dat;
VARIABLE: NAMES ARE u1-u4 x;
    CLASSES = c (2);
    CATEGORICAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
MODEL:
    %OVERALL%
    c ON x;
    u4 ON x;
```

### Example 4: Multilevel Regression Model

```mplus
TITLE: this is an example of a multilevel
    regression analysis with one individual-
    level outcome variable regressed on an
    individual-level background variable where
    the intercept and slope are regressed on a
    cluster-level variable
DATA: FILE IS reg.dat;
VARIABLE: NAMES ARE clus y x w;
    CLUSTER = clus;
    WITHIN = x;
    BETWEEN = w;
    MISSING = .;
DEFINE: CENTER x (GRANDMEAN);
ANALYSIS: TYPE = TWOLEVEL RANDOM;
MODEL:
    %WITHIN%
    s | y ON x;
    %BETWEEN%
    y s ON w;
```

## Overview of Mplus Examples

The next eleven chapters contain examples of prototypical input setups for several different types of analyses. The input, data, and output, as well as the corresponding Monte Carlo input and Monte Carlo output for most of the examples are on the CD that contains the Mplus program.

### Example Chapters

- **Chapter 3**: Regression and path analysis
- **Chapter 4**: Exploratory factor analysis
- **Chapter 5**: Confirmatory factor analysis and structural equation modeling
- **Chapter 6**: Growth modeling and survival analysis
- **Chapter 7**: Mixture modeling with cross-sectional data
- **Chapter 8**: Mixture modeling with longitudinal data
- **Chapter 9**: Multilevel modeling with complex survey data
- **Chapter 10**: Multilevel mixture modeling
- **Chapter 11**: Missing data modeling and Bayesian analysis
- **Chapter 12**: Monte Carlo simulation studies
- **Chapter 13**: Special features

### Variable Naming Conventions

For simplicity, the input setups for the examples use generic variable names:

| Variable Type | Naming Convention |
|---------------|-------------------|
| Observed continuous and censored outcome | y |
| Binary, ordered categorical, unordered categorical, count outcome | u |
| Time-to-event variables | t |
| Observed background variable | x |
| Observed time-varying background variable | a |
| Observed between-level background variable | w |
| Continuous latent variable | f |
| Categorical latent variable | c |
| Intercept growth factor | i |
| Slope growth factor / random slope | s or q |

### Mplus Program Coverage

| Program Version | Chapters Covered |
|-----------------|------------------|
| Mplus Base | Chapters 3, 5, 6, 11, 13, and parts of Chapters 4 and 12 |
| Mplus Base + Mixture Add-On | Above + Chapters 7, 8 |
| Mplus Base + Multilevel Add-On | Base + Chapter 9 |
| Mplus Base + Combination Add-On | All chapters |

Note: Variable names are not limited to these choices - they are used for clarity in the examples.
