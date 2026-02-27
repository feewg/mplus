# EXAMPLE 7.26: CFA With A Non-Parametric Representation Of A Non-Normal Factor Distribution

## Description

In this example, a CFA model with a non-parametric representation of a non-normal factor distribution is estimated. One difference between this example and Example 7.17 is that the factor variance is fixed at zero in each class. This is done to capture a non-parametric representation of the factor distribution (Aitkin, 1999) where the latent classes are used to represent non-normality not unobserved heterogeneity with substantively meaningful latent classes. This is also referred to as semiparametric modeling.

## Mplus Input

```mplus
TITLE: this is an example of CFA with a non-
       parametric representation of a non-normal
       factor distribution
DATA: FILE IS ex7.26.dat;
VARIABLE: NAMES ARE y1-y5 c;
          USEV = y1-y5;
          CLASSES = c (3);
ANALYSIS: TYPE = MIXTURE;
MODEL: %OVERALL%
    f BY y1-y5;
    f@0;
OUTPUT: TECH1 TECH8;
```

## Explanation

The factor distribution is represented by a histogram with as many bars as there are classes. The bars represent scale steps on the continuous latent variable. The spacing of the scale steps is obtained by the factor means in the different classes with a factor mean for one class fixed at zero for identification, and the percentage of individuals at the different scale steps is obtained by the latent class percentages.

This means that continuous factor scores are obtained for the individuals while not assuming normality for the factor but estimating its distribution. Factor variances can also be estimated to obtain a more general mixture although this reverts to the parametric assumption of normality, in this case, within each class. When the latent classes are used to represent non-normality, the mixed parameter values are of greater interest than the parameters for each mixture component (Muthén, 2002, p. 102; Muthén, 2004).
