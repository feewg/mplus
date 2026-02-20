# Chapter 17: MODEL Command

## 1. Overview

The MODEL command specifies the statistical model.

## 2. Basic Statements

| Statement | Meaning | Example |
|-----------|---------|---------|
| BY | Measured by | f1 BY y1-y5; |
| ON | Regressed on | y ON x1 x2; |
| WITH | Correlated with | y1 WITH y2; |

## 3. Parameter Specification

| Symbol | Description | Example |
|--------|-------------|---------|
| @ | Fix parameter | f BY y1@1; |
| * | Free/start value | f BY y1*; |
| (n) | Equality constraint | f BY y1-y5 (1); |
| [ ] | Mean/intercept | [y1]; |

## 4. Special Syntax

### Growth Model
```mplus
MODEL: i s | y1@0 y2@1 y3@2 y4@3;
```

### Multilevel
```mplus
MODEL: %WITHIN%
        y ON x;
        %BETWEEN%
        y ON w;
```

### Mixture
```mplus
MODEL: %OVERALL%
        f BY y1-y5;
        %c#1%
        [f@0];
```

## 5. Related Commands

- MODEL INDIRECT
- MODEL CONSTRAINT
- MODEL TEST
- MODEL PRIORS
