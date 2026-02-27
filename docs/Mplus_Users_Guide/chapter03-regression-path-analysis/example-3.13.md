# EXAMPLE 3.13: PATH ANALYSIS WITH CATEGORICAL DEPENDENT VARIABLES USING THE THETA PARAMETERIZATION

## Description

This example demonstrates a path analysis with categorical dependent variables using the Theta parameterization instead of the default Delta parameterization.

The key difference between parameterizations:
- **Delta parameterization**: Scale factors for continuous latent response variables of observed categorical dependent variables are allowed to be parameters in the model, but residual variances for continuous latent response variables are not
- **Theta parameterization**: Residual variances for continuous latent response variables of observed categorical dependent variables are allowed to be parameters in the model, but scale factors for continuous latent response variables are not

## Mplus Input

```mplus
TITLE: this is an example of a path analysis
       with categorical dependent variables using
       the Theta parameterization
DATA: FILE IS ex3.13.dat;
VARIABLE: NAMES ARE u1-u6 x1-x4;
          USEVARIABLES ARE u1-u3 x1-x3;
          CATEGORICAL ARE u1-u3;
ANALYSIS: PARAMETERIZATION = THETA;
MODEL: u1 u2 ON x1 x2 x3;
       u3 ON u1 u2 x2;
```

## Explanation

The difference between this example and Example 3.12 is that the Theta parameterization is used instead of the default Delta parameterization.

**Delta parameterization (default):**
- Scale factors for continuous latent response variables of observed categorical dependent variables are allowed to be parameters in the model
- Residual variances for continuous latent response variables are NOT parameters in the model

**Theta parameterization:**
- Residual variances for continuous latent response variables of observed categorical dependent variables are allowed to be parameters in the model
- Scale factors for continuous latent response variables are NOT parameters in the model

The Theta parameterization is selected by specifying `PARAMETERIZATION = THETA` in the ANALYSIS command.

Both parameterizations are equivalent ways of modeling categorical outcomes, but they offer different parameter constraints and may be more convenient depending on the specific research questions and model constraints.
