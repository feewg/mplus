# EXAMPLE 6.18: Multiple group multiple cohort growth model

## Description

In this example, the multiple group multiple cohort growth model shown in the picture above is estimated. Longitudinal research studies often collect data on several different groups of individuals defined by their birth year or cohort. This allows the study of development over a wider age range than the length of the study and is referred to as an accelerated or sequential cohort design. The interest in these studies is the development of an outcome over age not measurement occasion. This can be handled by rearranging the data so that age is the time axis using the DATA COHORT command or using a multiple group approach as described in this example. The advantage of the multiple group approach is that it can be used to test assumptions of invariance of growth parameters across cohorts.

## Mplus Input

```mplus
TITLE: this is an example of a multiple group
multiple cohort growth model
DATA: FILE = ex6.18.dat;
VARIABLE: NAMES = y1-y4 x a21-a24 g;
GROUPING = g (1 = 1990 2 = 1989 3 = 1988);
MODEL: i s |y1@0 y2@.2 y3@.4 y4@.6;
[i] (1); [s] (2);
i (3); s (4);
i WITH s (5);
i ON x (6);
s ON x (7);
y1 ON a21;
y2 ON a22 (12);
y3 ON a23 (14);
y4 ON a24 (16);
y2-y4 (22-24);
MODEL 1989:
i s |y1@.1 y2@.3 y3@.5 y4@.7;
y1 ON a21;
y2 ON a22;
y3 ON a23;
y4 ON a24;
y1-y4;
MODEL 1988:
i s |y1@.2 y2@.4 y3@.6 y4@.8;
y1 ON a21 (12);
y2 ON a22 (14);
y3 ON a23 (16);
y4 ON a24;
y1-y3 (22-24);
y4;
OUTPUT: TECH1 MODINDICES(3.84);
```

## Explanation

In the multiple group approach the variables in the data set represent the measurement occasions. In this example, there are four measurement occasions: 2000, 2002, 2004, and 2006. Therefore there are four variables to represent the outcome. In this example, there are three cohorts with birth years 1988, 1989, and 1990. It is the combination of the time of measurement and birth year that determines the ages represented in the data. This is shown in the table below where rows represent cohort and columns represent measurement occasion. The entries in the table represent the ages. In this example, ages 10 to 18 are represented.

| M.O./Cohort | 2000 | 2002 | 2004 | 2006 |
|-------------|------|------|------|------|
| 1988        | 12   | 14   | 16   | 18   |
| 1989        | 11   | 13   | 15   | 17   |
| 1990        | 10   | 12   | 14   | 16   |

The model that is estimated uses the time axis of age as shown in the table below where rows represent cohort and columns represent age. The entries for the first three rows in the table are the years of the measurement occasions. The entries for the last row are the time scores for a linear model.

| Age/Cohort | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 |
|------------|----|----|----|----|----|----|----|----|----|
| 1988       |    |    | 2000 |    | 2002 |    | 2004 |    | 2006 |
| 1989       |    | 2000 |    | 2002 |    | 2004 |    | 2006 |    |
| 1990       | 2000 |    | 2002 |    | 2004 |    | 2006 |    |    |
| Time Score | 0  | .1 | .2 | .3 | .4 | .5 | .6 | .7 | .8 |

As shown in the table, three ages are represented by more than one cohort. Age 12 is represented by cohorts 1988 and 1990 measured in 2000 and 2002; age 14 is represented by cohorts 1988 and 1990 measured in 2002 and 2004; and age 16 is represented by cohorts 1988 and 1990 measured in 2004 and 2006. This information is needed to constrain parameters to be equal in the multiple group model.

The table also provides information about the time scores for each cohort. The time scores are obtained as the difference in age between measurement occasions divided by ten. The division is used to avoid large time scores which can lead to convergence problems. Cohort 1990 provides information for ages 10, 12, 14, and 16. The time scores for cohort 2000 are 0, .2, .4, and .6. Cohort 1989 provides information for ages 11, 13, 15, and 17. The time scores for cohort 1989 are .1, .3, .5, and .7. Cohort 1988 provides information for ages 12, 14, 16, and 18. The time scores for cohort 1988 are .2, .4, .6, and .8.

The GROUPING option is used to identify the variable in the data set that contains information on group membership when the data for all groups are stored in a single data set. The information in parentheses after the grouping variable name assigns labels to the values of the grouping variable found in the data set. In the example above, observations with g equal to 1 will be assigned the label 1990, individuals with g equal to 2 will be assigned the label 1989, and individuals with g equal to 3 will be assigned the label 1988. These labels are used in conjunction with the MODEL command to specify model statements specific to each group.

In multiple group analysis, two variations of the MODEL command are used. They are MODEL and MODEL followed by a label. MODEL describes the overall model to be estimated for each group. MODEL followed by a label describes differences between the overall model and the model for the group designated by the label. In the MODEL command, the | symbol is used to name and define the intercept and slope factors in a growth model. The names i and s on the left-hand side of the | symbol are the names of the intercept and slope growth factors, respectively. The statement on the right-hand side of the | symbol specifies the outcome and the time scores for the growth model. The time scores for the slope growth factor are fixed at 0, .2, .4, and .6. These are the time scores for cohort 1990. The zero time score for the slope growth factor at time point one defines the intercept growth factor as an initial status factor for age 10. The coefficients of the intercept growth factor are fixed at one as part of the growth model parameterization. The residual variances of the outcome variables are estimated and allowed to be different across age and the residuals are not correlated as the default. The time scores for the other two cohorts are specified in the group-specific MODEL commands. The group-specific MODEL command for cohort 1989 fixes the time scores at .1, .3, .5, and .7. The group-specific MODEL command for cohort 1988 fixes the time scores at .2, .4, .6, and .8.

The equalities specified by the numbers in parentheses represent the baseline assumption that the cohorts come from the same population. Equalities specified in the overall MODEL command constrain parameters to be equal across all groups. All parameters related to the growth factors are constrained to be equal across all groups. Other parameters are held equal when an age is represented by more than one cohort. For example, the ON statement with the (12) equality in the overall MODEL command describes the linear regression of y2 on the time-varying covariate a22 for cohort 1990 at age 12. In the group-specific MODEL command for cohort 1988, the ON statement with the (12) equality describes the linear regression of y1 on the time-varying covariate a21 for cohort 1988 at age 12. Other combinations of cohort and age do not involve equality constraints. Cohort 1990 is the only cohort that represents age 10; cohort 1989 is the only cohort that represents ages 11, 13, 15, 17; and cohort 1988 is the only cohort that represents age 18. Statements in the group-specific MODEL commands relax equality constraints specified in the overall MODEL command.

An explanation of the other commands can be found in Example 6.1.
