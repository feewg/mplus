# EXAMPLE 3.18: MODERATED MEDIATION WITH A PLOT OF THE INDIRECT EFFECT

## Description

This example demonstrates a moderated mediation analysis with a plot of the indirect effect (Preacher, Rucker, & Hayes, 2007). In this model:

- The variable z moderates the relationship between the mediator m and the covariate x
- The indirect effect is computed and plotted across different values of the moderator
- Bayesian estimation is used

Moderated mediation occurs when the strength of an indirect effect depends on the level of another variable (the moderator).

## Mplus Input

```mplus
TITLE: this is an example of moderated mediation
       with a plot of the indirect effect
DATA: FILE = ex3.18.dat;
VARIABLE: NAMES = y m x z;
          USEVARIABLES = y m x z xz;
DEFINE: xz = x*z;
ANALYSIS: ESTIMATOR = BAYES;
          PROCESSORS = 2;
          BITERATIONS = (30000);
MODEL: y ON m (b)
           x z;
       m ON x (gamma1)
           z
           xz (gamma2);
MODEL CONSTRAINT:
       PLOT(indirect);
       LOOP(mod,-2,2,0.1);
       indirect = b*(gamma1+gamma2*mod);
PLOT: TYPE = PLOT2;
OUTPUT: TECH8;
```

## Explanation

The DEFINE command is used to create the variable xz which is the interaction between the moderator z and the covariate x. The variable xz must be included on the USEVARIABLES list after the original variables in order to be used in the analysis.

**ANALYSIS command:**
By specifying `ESTIMATOR = BAYES`, a Bayesian analysis will be carried out.

In Bayesian estimation:
- The default is to use two independent Markov chain Monte Carlo (MCMC) chains
- If multiple processors are available, using `PROCESSORS = 2` will speed up computations
- The BITERATIONS option is used to specify the maximum and minimum number of iterations for each MCMC chain when the potential scale reduction (PSR) convergence criterion is used
- Using a number in parentheses, `BITERATIONS = (30000)` specifies that a minimum of 30,000 and a maximum of the default of 50,000 iterations will be used. The large minimum value is chosen to obtain a smooth plot.

**MODEL command:**
The first ON statement describes the linear regression of y on the mediator m, the covariate x, and the moderator z. The parameter b represents the effect of the mediator on the outcome.

The second ON statement describes the linear regression of the mediator m on the covariate x, the moderator z, and the interaction xz. The parameter gamma1 represents the effect of x on m, and gamma2 represents the moderation effect (the interaction coefficient).

The intercepts and residual variances of y and m are estimated and the residuals are not correlated as the default.

**MODEL CONSTRAINT:**
In MODEL CONSTRAINT, the LOOP option is used in conjunction with the PLOT option to create plots of variables:

- The PLOT option names the variable that will be plotted on the y-axis (indirect)
- The LOOP option names the variable that will be plotted on the x-axis (mod), gives the numbers that are the lower and upper values of the variable (-2 and 2), and the incremental value (0.1)

The variable mod varies over the range of z that is of interest, such as two standard deviations away from its mean. Corresponding to the case of z being standardized, the lower and upper values of mod are -2 and 2, and 0.1 is the incremental value.

When mod appears in a MODEL CONSTRAINT statement involving a new parameter, that statement is evaluated for each value of mod specified by the LOOP option.

The indirect effect is computed as: `indirect = b*(gamma1+gamma2*mod)`

This represents the conditional indirect effect of x on y through m at different values of the moderator z.

**PLOT command:**
Using `TYPE = PLOT2` in the PLOT command, the plot of indirect and mod can be viewed by choosing Loop plots from the Plot menu of the Mplus Editor. The plot presents the computed values along with a 95% confidence interval.

For Bayesian estimation, the default is credibility intervals of the posterior distribution with equal tail percentages. The CINTERVAL option of the OUTPUT command can be used to obtain credibility intervals of the posterior distribution that give the highest posterior density.
