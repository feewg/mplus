# EXAMPLE 4.6: TWO-LEVEL EXPLORATORY FACTOR ANALYSIS WITH BOTH INDIVIDUAL- AND CLUSTER-LEVEL FACTOR INDICATORS

## Description

The difference between this example and Example 4.5 is that there is a combination of individual-level categorical factor indicators and between-level continuous factor indicators. The exploratory factor analysis structure for the within part of the model includes only the individual-level factor indicators whereas the exploratory factor analysis structure for the between part of the model includes the between part of the individual-level factor indicators and the between-level factor indicators. Rotated solutions with standard errors are obtained for both the within and between parts of the model.

## Mplus Input

```mplus
TITLE: this is an example of a two-level
       exploratory factor analysis with both
       individual- and cluster-level factor
       indicators
DATA: FILE = ex4.6.dat;
VARIABLE: NAMES = u1-u6 y1-y4 x1 x2 w clus;
          USEVARIABLES = u1-u6 y1-y4;
          CATEGORICAL = u1-u6;
          CLUSTER = clus;
          BETWEEN = y1-y4;
ANALYSIS: TYPE = TWOLEVEL EFA 1 2 UW 1 2 UB;
SAVEDATA: SWMATRIX = ex4.6sw.dat;
```

## Explanation

The BETWEEN option is used to identify the variables in the data set that are measured on the cluster level and modeled only on the between level. Variables not mentioned on the WITHIN or the BETWEEN statements are measured on the individual level and can be modeled on both the within and between levels.

The default rotation is the oblique rotation of GEOMIN. The ROTATION option of the ANALYSIS command can be used to select a different rotation.

The default estimator for this type of analysis is a robust weighted least squares estimator using a diagonal weight matrix (Asparouhov & Muthén, 2007). The ESTIMATOR option of the ANALYSIS command can be used to select a different estimator.

The SWMATRIX option of the SAVEDATA command is used with TYPE=TWOLEVEL and weighted least squares estimation to specify the name and location of the file that contains the within- and between-level sample statistics and their corresponding estimated asymptotic covariance matrix. It is recommended to save this information and use it in subsequent analyses along with the raw data to reduce computational time during model estimation.

An explanation of the other commands can be found in Examples 4.1, 4.3, and 4.5.
